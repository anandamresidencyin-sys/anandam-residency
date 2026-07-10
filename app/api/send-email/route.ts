// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'anandamresidency.in@gmail.com',
      subject: `New Contact Form Submission: ${subject || 'Inquiry'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>New Contact Form Submission</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #0B3A99 0%, #062466 100%);
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: #f9f9f9;
              padding: 20px;
              border: 1px solid #ddd;
              border-top: none;
              border-radius: 0 0 10px 10px;
            }
            .field {
              margin-bottom: 15px;
              padding: 10px;
              background: white;
              border-radius: 8px;
              border-left: 4px solid #79c223;
            }
            .label {
              font-weight: bold;
              color: #0B3A99;
              font-size: 12px;
              text-transform: uppercase;
              margin-bottom: 5px;
            }
            .value {
              color: #333;
              font-size: 14px;
              margin-top: 5px;
            }
            .footer {
              text-align: center;
              padding: 20px;
              font-size: 12px;
              color: #666;
            }
            .badge {
              display: inline-block;
              background: #79c223;
              color: white;
              padding: 5px 10px;
              border-radius: 5px;
              font-size: 10px;
              font-weight: bold;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>🏢 Anandam Residency</h2>
            <p>New Contact Form Submission</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Name</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">📧 Email</div>
              <div class="value">${email}</div>
            </div>
            <div class="field">
              <div class="label">📞 Phone</div>
              <div class="value">${phone}</div>
            </div>
            <div class="field">
              <div class="label">📋 Subject</div>
              <div class="value">${subject || 'General Inquiry'}</div>
            </div>
            <div class="field">
              <div class="label">💬 Message</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="badge">📅 Submitted: ${new Date().toLocaleString()}</div>
          </div>
          <div class="footer">
            <p>This is an automated message from Anandam Residency Contact Form.</p>
            <p>© ${new Date().getFullYear()} Anandam Residency. All rights reserved.</p>
          </div>
        </body>
        </html>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Also send auto-reply to the user
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Anandam Residency',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Thank You</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #0B3A99 0%, #062466 100%);
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: #f9f9f9;
              padding: 20px;
              border: 1px solid #ddd;
              border-top: none;
              border-radius: 0 0 10px 10px;
            }
            .button {
              display: inline-block;
              background: #79c223;
              color: white;
              padding: 10px 20px;
              text-decoration: none;
              border-radius: 5px;
              margin-top: 15px;
            }
            .footer {
              text-align: center;
              padding: 20px;
              font-size: 12px;
              color: #666;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>🏢 Anandam Residency</h2>
          </div>
          <div class="content">
            <h3>Dear ${name},</h3>
            <p>Thank you for reaching out to Anandam Residency!</p>
            <p>We have received your inquiry and our team will get back to you within <strong>24 hours</strong>.</p>
            <p><strong>Your Query:</strong></p>
            <p style="background: white; padding: 10px; border-left: 3px solid #79c223;">${message.substring(0, 200)}${message.length > 200 ? '...' : ''}</p>
            <p>In the meantime, you can:</p>
            <ul>
              <li>📞 Call us directly at <strong>+91 87778 27497</strong></li>
              <li>💬 WhatsApp us at <strong>+91 87778 27497</strong></li>
              <li>📍 Visit our site: Anandam Residency, Asansol</li>
            </ul>
            <a href="tel:+918777827497" class="button">📞 Call Now</a>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Anandam Residency. All rights reserved.</p>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}