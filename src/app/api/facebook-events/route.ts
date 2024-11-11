import { NextResponse } from 'next/server';

const ACCESS_TOKEN = 'EAAR6h9HxrGYBOyK2PWJT6nMgxZAuOm1yy3xL4ZAifO1of00pZBiyMlVYxfAPJpKJwjiAySXG62M0fXF2aBeY25EgDZCRZBqCfQr7eYQADY0kUNSY25AYEjpZCZCWFbV7E2ZARgJXXMXxsjo1fDoSwxDILhc1ika8egRWljIaaOQpEMaHDZBrCH6Neme8kF7Loop8pZCgZDZD';
const PIXEL_ID = '1736192697203766';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const currentTime = Math.floor(Date.now() / 1000);

    const payload = {
      data: [
        {
          event_name: body.eventName,
          event_time: currentTime,
          action_source: "website",
          user_data: {
            em: body.userData?.email ? [body.userData.email] : [],
            ph: body.userData?.phone ? [body.userData.phone] : [null],
          },
          custom_data: body.customData || {},
          original_event_data: {
            event_name: body.eventName,
            event_time: currentTime,
          }
        }
      ]
    };

    const response = await fetch(
      `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Facebook API Error:', error);
    return NextResponse.json({ error: 'Failed to send event' }, { status: 500 });
  }
}
