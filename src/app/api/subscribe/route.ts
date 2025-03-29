import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const generateEmailTemplate = (firstName: string) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Sloane</title>
        <style>
          /* Reset styles */
          body, p, h1, h2, h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
          }
          
          /* Base styles */
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #004B27;
            background-color: #FFE7C3;
          }
          
          /* Container */
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 40px 20px;
            background-color: #FFFFFF;
          }
          
          /* Header */
          .header {
            text-align: center;
            padding: 20px 0;
            background: linear-gradient(135deg, #00BF63, #004B27);
          }
          
          .header img {
            max-width: 120px;
            height: auto;
          }
          
          /* Content */
          .content {
            padding: 40px 20px;
            background-color: #FFFFFF;
          }
          
          .product-image {
            width: 100%;
            max-width: 500px;
            height: auto;
            margin: 20px 0;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          
          h1 {
            color: #00BF63;
            font-size: 28px;
            margin-bottom: 20px;
            font-family: 'Archivo', Arial, sans-serif;
          }
          
          p {
            margin-bottom: 20px;
            color: #004B27;
            font-size: 16px;
          }
          
          /* Button */
          .button {
            display: inline-block;
            padding: 15px 30px;
            background-color: #00BF63;
            color: #FFFFFF;
            text-decoration: none;
            border-radius: 50px;
            margin: 20px 0;
            font-family: 'Archivo', Arial, sans-serif;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 14px;
          }
          
          /* Footer */
          .footer {
            text-align: center;
            padding: 20px;
            background-color: #FFE7C3;
            color: #004B27;
            font-size: 12px;
          }
          
          /* Responsive */
          @media screen and (max-width: 600px) {
            .container {
              width: 100%;
              padding: 20px 10px;
            }
            
            h1 {
              font-size: 24px;
            }
            
            p {
              font-size: 14px;
            }
            
            .product-image {
              max-width: 100%;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://app.sloane.biz/logo.png" alt="Sloane Logo" />
          </div>
          <div class="content">
            <h1>Welcome to Sloane, ${firstName}! 🟢 </h1>
            <p>Thank you for entering our draw to win a free month of Sloane AI. We're excited to have you join our community of mindful business owners!</p>
            <img src="https://app.sloane.biz/images/heroMOck.png" alt="Sloane AI Platform" class="product-image" />
            <p>Your entry has been successfully registered, and we'll be in touch if you're our lucky winner. The free month can be applied to any new or existing subscription.</p>
            <p>Why wait? You can start experiencing the power of Sloane AI today:</p>
            <a href="https://app.sloane.biz/signup" class="button">Try Sloane Now</a>
            <p>Even if you sign up now, you'll still be eligible to win the free month, which we'll add as a bonus to your subscription if you're selected.</p>
            <p>Have questions? Our team is always here to help. Just reply to this email, and we'll get back to you right away.</p>
            <p>Best regards,<br>The Sloane Team</p>
          </div>
          <div class="footer">
            <p>© 2024 Sloane AI. All rights reserved.</p>
            <p>You're receiving this email because you entered our free month draw.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

export async function POST(request: Request) {
  try {
    const { email, firstName } = await request.json();

    // Send the welcome email
    const msg = {
      to: email,
      from: 'hello@sloane.biz',
      subject: `Welcome to Sloane, ${firstName}! 🎉`,
      html: generateEmailTemplate(firstName),
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return NextResponse.json(
      { error: 'Failed to send welcome email' },
      { status: 500 }
    );
  }
} 