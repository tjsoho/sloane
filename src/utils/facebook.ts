import crypto from 'crypto';

interface UserData {
  email?: string;
  phone?: string;
}

interface CustomData {
  currency?: string;
  value?: string;
  // Add other custom data fields as needed
}

// Function to hash user data (required by Facebook)
function hashData(data: string): string {
  return crypto
    .createHash('sha256')
    .update(data.toLowerCase().trim())
    .digest('hex');
}

export async function sendFacebookEvent(
  eventName: string,
  userData?: UserData,
  customData?: CustomData
) {
  // Hash sensitive data before sending
  const hashedUserData = {
    email: userData?.email ? hashData(userData.email) : undefined,
    phone: userData?.phone ? hashData(userData.phone) : undefined,
  };

  try {
    const response = await fetch('/api/facebook-events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        userData: hashedUserData,
        customData,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send event');
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending Facebook event:', error);
  }
} 