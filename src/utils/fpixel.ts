export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

export const pageview = () => {
  window.fbq('track', 'PageView')
}

// For tracking specific events
export const event = (name: string, options = {}) => {
  window.fbq('track', name, options)
} 