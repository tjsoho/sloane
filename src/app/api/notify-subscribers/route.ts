import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { db } from '../../../utils/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const generateBlogPostEmailTemplate = (firstName: string, post: any) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Blog Post from Sloane</title>
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
          
          .blog-image {
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
          
          /* Tags */
          .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin: 15px 0;
          }
          
          .tag {
            background-color: #00BF63;
            color: #FFFFFF;
            padding: 4px 12px;
            border-radius: 15px;
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
            
            .blog-image {
              max-width: 100%;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://app.sloane.biz/logo.svg" alt="Sloane Logo" />
          </div>
          <div class="content">
            <h1>Hi ${firstName}! 👋</h1>
            <p>We just published a new blog post that we think you'll find interesting:</p>
            <h2 style="color: #004B27; font-size: 24px; margin: 20px 0;">${post.title}</h2>
            ${post.image ? `<img src="${post.image}" alt="${post.title}" class="blog-image" />` : ''}
            <p>${post.description}</p>
            ${post.tags && post.tags.length > 0 ? `
              <div class="tags">
                ${post.tags.map((tag: string) => `<span class="tag">${tag}</span>`).join('')}
              </div>
            ` : ''}
            <a href="https://app.sloane.biz/blog/${post.slug}" class="button">Read the Full Post</a>
            <p>We hope you enjoy reading it!</p>
            <p>Best regards,<br>The Sloane Team</p>
          </div>
          <div class="footer">
            <p>© 2024 Sloane AI. All rights reserved.</p>
            <p>You're receiving this email because you're subscribed to our blog updates.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

export async function POST(request: Request) {
  try {
    const { post } = await request.json();
    
    // Get all active subscribers
    const subscribersRef = collection(db, 'subscribers');
    const q = query(subscribersRef, where('status', '==', 'active'));
    const querySnapshot = await getDocs(q);
    
    const subscribers = querySnapshot.docs.map(doc => ({
      email: doc.data().email,
      firstName: doc.data().firstName
    }));

    // Send emails to all subscribers
    const emailPromises = subscribers.map(subscriber => {
      const msg = {
        to: subscriber.email,
        from: 'hello@sloane.biz',
        subject: `New Blog Post: ${post.title}`,
        html: generateBlogPostEmailTemplate(subscriber.firstName, post),
      };
      return sgMail.send(msg);
    });

    // Wait for all emails to be sent
    await Promise.all(emailPromises);

    return NextResponse.json({ 
      success: true, 
      message: `Successfully sent blog post notification to ${subscribers.length} subscribers` 
    });
  } catch (error) {
    console.error('Error sending blog post notifications:', error);
    return NextResponse.json(
      { error: 'Failed to send blog post notifications' },
      { status: 500 }
    );
  }
} 