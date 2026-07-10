// app/api/send-enquiry/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, plotType, budget, message, agreeTerms } = await request.json();

    console.log('Received enquiry:', { name, email, phone, plotType, budget, message, agreeTerms });

    // Validate required fields
    if (!name || !email || !phone || !plotType || !budget || !agreeTerms) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Helper function to get plot type name
    const getPlotTypeName = (plotTypeValue: string) => {
      switch(plotTypeValue) {
        case 'affordable': return 'Affordable Plots Portfolio';
        case 'valuable': return 'Affordable cum Valuable Standard';
        case 'premium': return 'Elite Premium Gated Plots';
        case 'commercial': return 'Commercial Strategic Hub Plots';
        default: return plotTypeValue;
      }
    };

    // Helper function to get budget range
    const getBudgetRange = (budgetValue: string) => {
      switch(budgetValue) {
        case '25-50': return '₹25 - ₹50 Lakhs Allocation';
        case '50-75': return '₹50 - ₹75 Lakhs Allocation';
        case '75-1cr': return '₹75 Lakhs - ₹1 Crore Premium';
        case '1cr-above': return '₹1 Crore + Strategic Capital';
        default: return budgetValue;
      }
    };

    const plotTypeName = getPlotTypeName(plotType);
    const budgetRange = getBudgetRange(budget);

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

    // Verify connection
    await transporter.verify();
    console.log('SMTP connection verified');

    // Send email to admin
    const mailOptions = {
      from: `"Anandam Residency" <${process.env.EMAIL_USER}>`,
      to: 'anandamresidency.in@gmail.com',
      subject: `New Enquiry: ${name} - ${plotTypeName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>New Enquiry</title>
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
            .urgent {
              background: #fff3cd;
              border-left-color: #ffc107;
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
            <p>New Strategic Enquiry Received</p>
          </div>
          <div class="content">
            <div class="field urgent">
              <div class="label">⚠️ URGENT - New Lead</div>
              <div class="value">Please contact this customer within 24 hours.</div>
            </div>
            <div class="field">
              <div class="label">👤 Customer Name</div>
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
              <div class="label">🏷️ Plot Type</div>
              <div class="value">${plotTypeName}</div>
            </div>
            <div class="field">
              <div class="label">💰 Budget Range</div>
              <div class="value">${budgetRange}</div>
            </div>
            ${message ? `
            <div class="field">
              <div class="label">💬 Additional Requirements</div>
              <div class="value">${message}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">✅ Terms Agreement</div>
              <div class="value">${agreeTerms ? 'Accepted' : 'Not Accepted'}</div>
            </div>
            <div class="badge">📅 Submitted: ${new Date().toLocaleString()}</div>
          </div>
          <div class="footer">
            <p>This is an automated message from Anandam Residency Enquiry System.</p>
            <p>Please respond to this customer within 24 hours.</p>
            <p>© ${new Date().getFullYear()} Anandam Residency. All rights reserved.</p>
          </div>
        </body>
        </html>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    console.log('Admin email sent for enquiry');

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
          <title>Thank You for Your Enquiry</title>
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
              padding: 12px 24px;
              text-decoration: none;
              border-radius: 8px;
              margin: 15px 0;
              font-weight: bold;
            }
            .info-box {
              background: #e8f5e9;
              padding: 15px;
              border-radius: 8px;
              margin: 20px 0;
              border-left: 4px solid #79c223;
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
            <p>Thank you for reaching out to <strong>Anandam Residency</strong>!</p>
            <div class="info-box">
              <p><strong>✅ Your enquiry has been received successfully.</strong></p>
              <p><strong>🏷️ Selected Plot Type:</strong> ${plotTypeName}</p>
              <p><strong>💰 Budget Range:</strong> ${budgetRange}</p>
            </div>
            <p><strong>⚡ What happens next?</strong></p>
            <ol>
              <li>Our investment advisor will review your requirements</li>
              <li>You will receive a call within <strong>24 hours</strong></li>
              <li>A customized plot portfolio will be shared via email</li>
            </ol>
            <a href="tel:+918777827497" class="button">📞 Call Now for Immediate Assistance</a>
            <p><strong>📍 Location:</strong><br/>
            Anandam Residency, Asansol - Gourandi Rd, Panchgachia, Asansol, West Bengal 713341</p>
            <p><strong>📞 Need help?</strong> Call us at <strong>+91 87778 27497</strong> or reply to this email.</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Anandam Residency. All rights reserved.</p>
            <p style="font-size: 11px;">This is an automated response. Please do not reply to this email.</p>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(autoReplyOptions);
    console.log('Auto-reply sent to customer:', email);

    return NextResponse.json(
      { message: 'Enquiry submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending enquiry email:', error);
    
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