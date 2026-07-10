// app/api/send-project-enquiry/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, projectName, projectId } = await request.json();

    console.log('Received project enquiry:', { name, email, phone, projectName, projectId, message });

    // Validate required fields
    if (!name || !email || !phone || !projectName) {
      return NextResponse.json(
        { error: 'Name, email, phone and project name are required' },
        { status: 400 }
      );
    }

    // Email configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.verify();
    console.log('SMTP connection verified');

    // Send email to admin
    const mailOptions = {
      from: `"Anandam Residency" <${process.env.EMAIL_USER}>`,
      to: 'anandamresidency.in@gmail.com',
      subject: `🏠 NEW PROJECT ENQUIRY: ${projectName} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>New Project Enquiry</title>
          <style>
            body { font-family: 'Segoe UI', sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0B3A99 0%, #062466 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 10px 10px; }
            .project-card { background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%); padding: 15px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #79c223; }
            .field { margin-bottom: 15px; padding: 10px; background: white; border-radius: 8px; border-left: 4px solid #79c223; }
            .label { font-weight: bold; color: #0B3A99; font-size: 12px; text-transform: uppercase; }
            .value { color: #333; font-size: 14px; margin-top: 5px; }
            .urgent { background: #fff3cd; border-left-color: #ffc107; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
            .badge { display: inline-block; background: #79c223; color: white; padding: 5px 10px; border-radius: 5px; font-size: 10px; font-weight: bold; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="header"><h2>🏢 Anandam Residency</h2><p>🎯 New Project Enquiry Received</p></div>
          <div class="content">
            <div class="project-card">
              <div class="label">🏗️ PROJECT DETAILS</div>
              <div class="value"><strong>📌 Project Name:</strong> ${projectName}</div>
              <div class="value"><strong>🆔 Project ID:</strong> ${projectId}</div>
            </div>
            <div class="field urgent"><div class="label">⚠️ URGENT - Customer Interested</div><div class="value">Please contact this customer within 24 hours.</div></div>
            <div class="field"><div class="label">👤 Customer Name</div><div class="value">${name}</div></div>
            <div class="field"><div class="label">📧 Email</div><div class="value">${email}</div></div>
            <div class="field"><div class="label">📞 Phone</div><div class="value">${phone}</div></div>
            ${message ? `<div class="field"><div class="label">💬 Message</div><div class="value">${message}</div></div>` : ''}
            <div class="badge">📅 Submitted: ${new Date().toLocaleString()}</div>
          </div>
          <div class="footer"><p>This customer is interested in <strong>${projectName}</strong>. Please respond within 24 hours.</p><p>© ${new Date().getFullYear()} Anandam Residency</p></div>
        </body>
        </html>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    console.log('Admin email sent for project enquiry');

    // Send auto-reply to customer
    const autoReplyOptions = {
      from: `"Anandam Residency" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for your enquiry about ${projectName} - Anandam Residency`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Thank You</title>
          <style>
            body { font-family: 'Segoe UI', sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0B3A99 0%, #062466 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #79c223; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; margin: 15px 0; font-weight: bold; }
            .info-box { background: #e8f5e9; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #79c223; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="header"><h2>🏢 Anandam Residency</h2></div>
          <div class="content">
            <h3>Dear ${name},</h3>
            <p>Thank you for your interest in <strong>${projectName}</strong>!</p>
            <div class="info-box">
              <p><strong>✅ Your enquiry has been received successfully.</strong></p>
              <p><strong>🏗️ Project:</strong> ${projectName}</p>
            </div>
            <p><strong>⚡ What happens next?</strong></p>
            <ol>
              <li>Our project specialist will review your request</li>
              <li>You will receive a call within <strong>24 hours</strong></li>
              <li>Detailed project brochure will be shared via email</li>
            </ol>
            <a href="tel:+918777827497" class="button">📞 Talk to Expert Now</a>
            <p><strong>📍 Site Location:</strong><br/>Anandam Residency, Asansol - Gourandi Rd, Panchgachia, Asansol, West Bengal 713341</p>
          </div>
          <div class="footer"><p>© ${new Date().getFullYear()} Anandam Residency</p></div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(autoReplyOptions);
    console.log('Auto-reply sent to customer:', email);

    return NextResponse.json(
      { message: 'Project enquiry submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending project enquiry:', error);
    
    let errorMessage = 'Failed to send enquiry';
    if (error instanceof Error) {
      errorMessage = error.message;
      console.error('Error details:', error.stack);
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}