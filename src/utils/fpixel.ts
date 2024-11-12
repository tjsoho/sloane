export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

// Remove development check and just set domain
const domain = 'sloane.biz'

export const pageview = () => {
  if (typeof window !== 'undefined' && window.location.hostname === domain) {
    window.fbq('track', 'PageView', {
      source_url: window.location.href,
      host_name: window.location.hostname,
      domain: domain
    });
  }
}

// For tracking specific events
export const event = (name: string, options = {}) => {
  if (typeof window !== 'undefined' && window.location.hostname === domain) {
    window.fbq('track', name, {
      ...options,
      source_url: window.location.href,
      host_name: window.location.hostname,
      domain: domain
    });
  }
} 