import { useEffect } from 'react'

export default function AnalyticsLoader() {
  useEffect(() => {
    const GA_ID = import.meta.env.VITE_GA_ID
    const FB_PIXEL_ID = import.meta.env.VITE_FB_PIXEL_ID
    const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || '[Nome da Empresa]'
    const COMPANY_URL = import.meta.env.VITE_COMPANY_URL || 'https://www.suaempresa.com.br'

    // Inject GA4
    if (GA_ID && !window.gtag) {
      const gaScript = document.createElement('script')
      gaScript.async = true
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
      document.head.appendChild(gaScript)

      window.dataLayer = window.dataLayer || []
      function gtag(){window.dataLayer.push(arguments)}
      window.gtag = gtag
      window.gtag('js', new Date())
      window.gtag('config', GA_ID)
    }

    // Inject Facebook Pixel
    if (FB_PIXEL_ID && !window.fbq) {
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        }
        if (!f._fbq) f._fbq = n
        n.push = n
        n.loaded = !0
        n.version = '2.0'
        n.queue = []
        t = b.createElement(e)
        t.async = !0
        t.src = v
        s = b.getElementsByTagName(e)[0]
        s.parentNode.insertBefore(t, s)
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
      window.fbq('init', FB_PIXEL_ID)
      window.fbq('track', 'PageView')
    }

    // Inject JSON-LD with dynamic provider
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Outsourcing de Impressão Inteligente',
      provider: {
        '@type': 'Organization',
        name: COMPANY_NAME,
        url: COMPANY_URL,
      },
      areaServed: 'BR',
      serviceType: 'Outsourcing de impressão, cópia e digitalização',
      offers: {
        '@type': 'Offer',
        priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'BRL' },
        description: 'Modelo de franquia mensal + excedente com compensação semestral',
      },
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(ld)
    document.head.appendChild(script)

    return () => {
      // Optional cleanup (keep analytics persistent while SPA navigates)
    }
  }, [])

  return null
}
