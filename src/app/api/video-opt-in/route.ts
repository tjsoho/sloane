import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { env } from '../../../env';

export async function POST(request: Request) {
  if (!env.SENDGRID_API_KEY) {
    console.error('No SendGrid API key found');
    return NextResponse.json({ error: 'No API key configured' }, { status: 500 });
  }

  try {
    const { email, name } = await request.json();
    console.log('Processing email for:', email);

    sgMail.setApiKey(env.SENDGRID_API_KEY);

    const msg = {
      to: email,
      from: {
        email: 'hello@sloane.biz',
        name: 'Sloane'
      },
      subject: '✨ Sloane Sneak Peek ✨',
      text: `Hey ${name}! Thanks so much for your interest in Sloane! Here is your video access link.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #00BF63;">Hey ${name}!</h1>
          
          <p>Thanks so much for your interest in Sloane! </p>
          
          <p>In this short video, we'll give you a quick tour of Sloane, highlighting her standout feature: the Hubs.</p>
          
          <p>Think of the Hubs as Sloane's team of expert assistants, each highly trained and ready to support every aspect of your business, 24/7.</p>
          
          <p>Click the link below to watch it in action and see how Sloane can revolutionise your business:</p>
          
          <p><a href="https://sloane.biz/videos/tour" 
                style="background-color: #00BF63; 
                       color: white; 
                       padding: 10px 20px; 
                       text-decoration: none; 
                       border-radius: 10px; 
                       display: inline-block;">
             Watch Videos
          </a></p>
          
          <p>See ya soon,<br>The Sloane Team</p>
        </div>
      `
    };

    try {
      const result = await sgMail.send(msg);
      console.log('Email sent successfully:', result);
      return NextResponse.json({ success: true });
    } catch (sendError: any) {
      console.error('SendGrid API Error:', {
        message: sendError.message,
        response: sendError.response?.body,
        code: sendError.code,
        details: sendError.response?.body?.errors
      });
      throw sendError;
    }
  } catch (error: any) {
    console.error('Full error:', error);
    return NextResponse.json({
      error: 'Failed to send email',
      details: error.message,
      response: error.response?.body
    }, { status: 500 });
  }
} 