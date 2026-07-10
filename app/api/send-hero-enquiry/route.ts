// app/api/send-hero-enquiry/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, phone, location, plotSize, message } = await request.json();

    console.log('Received hero enquiry:', { name, phone, location, plotSize, message });

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone number are required' },
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
      to: 'anandamresidency.in@gmail.com',
      subject: `🏠 NEW WEBSITE ENQUIRY from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>New Website Enquiry</title>
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
          <div class="header"><h2>🏢 Anandam Residency</h2><p>🎯 New Website Enquiry Received</p></div>
          <div class="content">
            <div class="field urgent"><div class="label">⚠️ URGENT - New Lead</div><div class="value">Please contact this customer within 24 hours.</div></div>
            <div class="field"><div class="label">👤 Customer Name</div><div class="value">${name}</div></div>
            <div class="field"><div class="label">📞 Phone</div><div class="value">${phone}</div></div>
            ${location ? `<div class="field"><div class="label">📍 Preferred Location</div><div class="value">${location}</div></div>` : ''}
            ${plotSize ? `<div class="field"><div class="label">📐 Plot Size Requirement</div><div class="value">${plotSize}</div></div>` : ''}
            ${message ? `<div class="field"><div class="label">💬 Message</div><div class="value">${message}</div></div>` : ''}
            <div class="badge">📅 Submitted: ${new Date().toLocaleString()}</div>
          </div>
          <div class="footer"><p>This customer submitted an enquiry from the homepage.</p><p>© ${new Date().getFullYear()} Anandam Residency</p></div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Auto-reply to customer (if email is provided in message or we can send SMS)
    // Note: Since phone is primary, we can't send email without email address
    // But we can send a confirmation SMS or just rely on call back

    return NextResponse.json({ message: 'Enquiry submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending hero enquiry:', error);
    return NextResponse.json({ error: 'Failed to send enquiry' }, { status: 500 });
  }
}