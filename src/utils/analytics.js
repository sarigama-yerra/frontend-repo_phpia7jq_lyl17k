// Simple analytics helper for GA4 and Facebook Pixel
export function trackEvent(eventName, params = {}) {
  try {
    if (typeof window !== 'undefined') {
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, params)
      }
      if (typeof window.fbq === 'function') {
        // Map generic events to FB custom events
        window.fbq('trackCustom', eventName, params)
      }
    }
  } catch (e) {
    // no-op
  }
}
