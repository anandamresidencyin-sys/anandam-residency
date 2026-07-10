// app/api/send-popup-enquiry/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, phone, email, plotType, plotTypeName } = await request.json();

    console.log('Received popup enquiry:', { name, phone, email, plotType, plotTypeName });

    // Validate required fields
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Name, phone and email are required' },
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
      subject: `🎯 NEW POPUP ENQUIRY: ${name} wants to book a site visit`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>New Popup Enquiry</title>
          <style>
            body { font-family: 'Segoe UI', sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0B3A99 0%, #062466 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; padding: 10px; background: white; border-radius: 8px; border-left: 4px solid #79c223; }
            .label { font-weight: bold; color: #0B3A99; font-size: 12px; text-transform: uppercase; }
            .value { color: #333; font-size: 14px; margin-top: 5px; }
            .urgent { background: #fff3cd; border-left-color: #ffc107; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
            .badge { display: inline-block; background: #79c223; color: white; padding: 5px 10px; border-radius: 5px; font-size: 10px; font-weight: bold; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="header"><h2>🏢 Anandam Residency</h2><p>🎯 New Popup Enquiry Received</p></div>
          <div class="content">
            <div class="field urgent"><div class="label">⚠️ URGENT - New Lead</div><div class="value">This customer came from the website popup. Please contact within 30 minutes.</div></div>
            <div class="field"><div class="label">👤 Customer Name</div><div class="value">${name}</div></div>
            <div class="field"><div class="label">📧 Email</div><div class="value">${email}</div></div>
            <div class="field"><div class="label">📞 Phone</div><div class="value">${phone}</div></div>
            <div class="field"><div class="label">🏠 Preferred Plot Type</div><div class="value">${plotTypeName || plotType}</div></div>
            <div class="badge">📅 Submitted: ${new Date().toLocaleString()}</div>
          </div>
          <div class="footer"><p>This customer wants to book a site visit. Please prioritize this lead.</p><p>© ${new Date().getFullYear()} Anandam Residency</p></div>
        </body>
        </html>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    console.log('Admin email sent for popup enquiry');

    // Send auto-reply to customer
    const autoReplyOptions = {
      from: `"Anandam Residency" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for your enquiry - Anandam Residency',
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
            <p>Thank you for showing interest in <strong>Anandam Residency</strong>!</p>
            <div class="info-box">
              <p><strong>✅ Your site visit request has been received successfully.</strong></p>
              <p><strong>🏠 Preferred Plot Type:</strong> ${plotTypeName || plotType}</p>
            </div>
            <p><strong>⚡ What happens next?</strong></p>
            <ol>
              <li>Our site coordinator will call you within <strong>30 minutes</strong></li>
              <li>You will receive a confirmation SMS/Email with visit details</li>
              <li>A dedicated relationship manager will guide you during the site visit</li>
            </ol>
            <a href="tel:+918777827497" class="button">📞 Call Now for Immediate Assistance</a>
            <p><strong>📍 Location:</strong><br/>Anandam Residency, Asansol - Gourandi Rd, Panchgachia, Asansol, West Bengal 713341</p>
            <p><strong>📞 Need help?</strong> Call us at <strong>+91 87778 27497</strong> or reply to this email.</p>
          </div>
          <div class="footer"><p>© ${new Date().getFullYear()} Anandam Residency</p></div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(autoReplyOptions);
    console.log('Auto-reply sent to customer:', email);

    return NextResponse.json(
      { message: 'Popup enquiry submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending popup enquiry email:', error);
    
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