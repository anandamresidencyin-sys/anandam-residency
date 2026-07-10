// app/api/send-offer-enquiry/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, phone, email, address, message } = await request.json();

    console.log('Received offer enquiry:', { name, phone, email, address, message });

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

    // Send email to admin
    const mailOptions = {
      from: `"Anandam Residency" <${process.env.EMAIL_USER}>`,
      to: 'nandiramesh431@gmail.com',
      subject: `💰 NEW OFFER ENQUIRY: ${name} wants to book land at ₹5,00,000`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>New Offer Enquiry</title>
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
          <div class="header"><h2>🏢 Anandam Residency</h2><p>💰 New Land Booking Enquiry at ₹5,00,000</p></div>
          <div class="content">
            <div class="field urgent"><div class="label">⚠️ URGENT - Limited Offer Lead</div><div class="value">Customer wants to book land at special price ₹5,00,000</div></div>
            <div class="field"><div class="label">👤 Customer Name</div><div class="value">${name}</div></div>
            <div class="field"><div class="label">📧 Email</div><div class="value">${email}</div></div>
            <div class="field"><div class="label">📞 Phone</div><div class="value">${phone}</div></div>
            ${address ? `<div class="field"><div class="label">📍 Address</div><div class="value">${address}</div></div>` : ''}
            ${message ? `<div class="field"><div class="label">💬 Message</div><div class="value">${message}</div></div>` : ''}
            <div class="badge">📅 Submitted: ${new Date().toLocaleString()}</div>
          </div>
          <div class="footer"><p>This customer wants to book land under the limited period offer.</p><p>© ${new Date().getFullYear()} Anandam Residency</p></div>
        </body>
        </html>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    // Auto-reply to customer
    const autoReplyOptions = {
      from: `"Anandam Residency" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for your land booking enquiry - Anandam Residency',
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
            <p>Thank you for your interest in our <strong>Limited Period Offer!</strong></p>
            <div class="info-box">
              <p><strong>✅ Your booking enquiry has been received successfully.</strong></p>
              <p><strong>💰 Offer Price:</strong> ₹5,00,000/-</p>
              <p><strong>📞 Your Contact:</strong> ${phone}</p>
            </div>
            <p><strong>⚡ What happens next?</strong></p>
            <ol>
              <li>Our sales team will call you within <strong>2 hours</strong></li>
              <li>We will share complete project details and pricing</li>
              <li>Site visit can be scheduled at your convenience</li>
            </ol>
            <a href="tel:+918777827497" class="button">📞 Call Now for Immediate Assistance</a>
            <p><strong>📍 Location:</strong><br/>Anandam Residency, Asansol - Gourandi Rd, Panchgachia, Asansol, West Bengal 713341</p>
          </div>
          <div class="footer"><p>© ${new Date().getFullYear()} Anandam Residency</p></div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: 'Offer enquiry submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending offer enquiry:', error);
    return NextResponse.json(
      { error: 'Failed to send enquiry' },
      { status: 500 }
    );
  }
}