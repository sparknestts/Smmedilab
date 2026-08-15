import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, subject, message } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email configuration
    const TO_EMAIL = 'smmedilab.com';
    const FROM_EMAIL = 'noreply@smmedilab.com';

    // Create email content
    const emailContent = `
      Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Subject: ${subject}
      
      Message:
      ${message}
    `;

    // Using Resend API (you'll need to add RESEND_API_KEY to .env.local)
    // Alternatively, you can use Nodemailer, SendGrid, or any other email service
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        reply_to: email, // User's email for replies
        subject: `New Contact Inquiry: ${subject}`,
        text: emailContent,
        html: `
          <h2>New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
