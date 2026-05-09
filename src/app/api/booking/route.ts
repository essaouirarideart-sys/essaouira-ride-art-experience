import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      name,
      phone,
      email,
      date,
      people,
      activity,
      packageName,
      duration,
      price,
      message,
    } = body;

    // Validation
    if (!name || !phone || !activity || !packageName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation if provided
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Configure Nodemailer with Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
            }
            .header {
              background: linear-gradient(135deg, #d4a574 0%, #c4935a 100%);
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 8px 8px;
            }
            .booking-detail {
              margin: 15px 0;
              padding: 10px;
              background: #f5f5f5;
              border-left: 4px solid #d4a574;
            }
            .label {
              font-weight: bold;
              color: #666;
              display: inline-block;
              width: 150px;
            }
            .value {
              color: #333;
            }
            .price {
              font-size: 24px;
              color: #d4a574;
              font-weight: bold;
            }
            .footer {
              margin-top: 20px;
              padding-top: 20px;
              border-top: 2px solid #eee;
              text-align: center;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎯 New Booking Request</h1>
              <p>Essaouira Ride & Art Experience</p>
            </div>
            <div class="content">
              <h2 style="color: #d4a574; margin-top: 0;">Booking Details</h2>
              
              <div class="booking-detail">
                <span class="label">🎯 Activity:</span>
                <span class="value">${activity}</span>
              </div>
              
              <div class="booking-detail">
                <span class="label">📦 Package:</span>
                <span class="value">${packageName}</span>
              </div>
              
              <div class="booking-detail">
                <span class="label">⏱️ Duration:</span>
                <span class="value">${duration}</span>
              </div>
              
              <div class="booking-detail">
                <span class="label">💰 Price:</span>
                <span class="value price">${price}€</span>
              </div>
              
              <div class="booking-detail">
                <span class="label">📅 Date:</span>
                <span class="value">${date || "To be defined"}</span>
              </div>
              
              <div class="booking-detail">
                <span class="label">👥 People:</span>
                <span class="value">${people}</span>
              </div>
              
              <h2 style="color: #d4a574; margin-top: 30px;">Client Information</h2>
              
              <div class="booking-detail">
                <span class="label">👤 Name:</span>
                <span class="value">${name}</span>
              </div>
              
              <div class="booking-detail">
                <span class="label">📱 Phone/WhatsApp:</span>
                <span class="value">${phone}</span>
              </div>
              
              ${email ? `
              <div class="booking-detail">
                <span class="label">📧 Email:</span>
                <span class="value">${email}</span>
              </div>
              ` : ''}
              
              ${message ? `
              <div class="booking-detail">
                <span class="label">💬 Message:</span>
                <div class="value" style="margin-top: 10px;">${message}</div>
              </div>
              ` : ''}
              
              <div class="footer">
                <p>This booking request was submitted via the website.</p>
                <p>Please respond to the client as soon as possible.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Booking - ${activity}`,
      html: emailHtml,
      replyTo: email || undefined,
    });

    return NextResponse.json(
      { success: true, message: "Booking request sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Failed to send booking request" },
      { status: 500 }
    );
  }
}
