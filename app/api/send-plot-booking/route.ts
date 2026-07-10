// app/api/send-plot-booking/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, preferredDate, preferredTime, message, plotName, plotId, plotNumber, plotLocation } = await request.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASSWORD },
    }); 

    await transporter.verify();

    // Admin email
    await transporter.sendMail({
      from: `"Anandam Residency" <${process.env.EMAIL_USER}>`,
      to: 'anandamresidency.in@gmail.com',
      subject: `📅 NEW SITE VISIT BOOKING: ${plotName} - ${name}`,
      html: `
        <div style="font-family: Arial; max-width: 600px;">
          <h2 style="background:#0B3A99;color:white;padding:20px;">🏢 Site Visit Booking</h2>
          <div style="padding:20px;border:1px solid #ddd;">
            <h3>🎯 Plot: ${plotName}</h3>
            <p><strong>👤 Name:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
            <p><strong>📞 Phone:</strong> ${phone}</p>
            <p><strong>📅 Date:</strong> ${preferredDate}</p>
            <p><strong>⏰ Time:</strong> ${preferredTime}</p>
            ${message ? `<p><strong>💬 Message:</strong> ${message}</p>` : ''}
          </div>
        </div>
      `,
    });

    // Customer confirmation
    await transporter.sendMail({
      from: `"Anandam Residency" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Site Visit Confirmation - ${plotName}`,
      html: `
        <div style="font-family: Arial; max-width: 600px;">
          <h2 style="background:#0B3A99;color:white;padding:20px;">🏢 Site Visit Confirmed</h2>
          <div style="padding:20px;border:1px solid #ddd;">
            <p>Dear ${name},</p>
            <p>Your site visit for <strong>${plotName}</strong> has been scheduled.</p>
            <p><strong>📅 Date:</strong> ${preferredDate}<br/><strong>⏰ Time:</strong> ${preferredTime}</p>
            <p>Our representative will call you to confirm.</p>
            <a href="tel:+918777827497" style="background:#79c223;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;">📞 Call Us</a>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Booking confirmed' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}