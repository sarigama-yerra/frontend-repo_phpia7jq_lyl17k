import React from 'react'
import Hero from './components/Hero'
import TrustIndicators from './components/TrustIndicators'
import ProblemSection from './components/ProblemSection'
import SolutionOverview from './components/SolutionOverview'
import EquipmentFleet from './components/EquipmentFleet'
import TechnicalArchitecture from './components/TechnicalArchitecture'
import ManagementSoftware from './components/ManagementSoftware'
import BusinessIntelligence from './components/BusinessIntelligence'
import BusinessModel from './components/BusinessModel'
import OperationsSLA from './components/OperationsSLA'
import Training from './components/Training'
import SecurityLGPD from './components/SecurityLGPD'
import Sustainability from './components/Sustainability'
import Governance from './components/Governance'
import ImplementationProcess from './components/ImplementationProcess'
import Differentials from './components/Differentials'
import AboutUs from './components/AboutUs'
import SocialProof from './components/SocialProof'
import FAQ from './components/FAQ'
import NextSteps from './components/NextSteps'
import FinalCTA from './components/FinalCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnalyticsLoader from './components/AnalyticsLoader'
import { MessageCircle } from 'lucide-react'
import { trackEvent } from './utils/analytics'

export default function App() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5500000000000'
  const whatsappHref = `https://wa.me/${whatsappNumber}`

  return (
    <div className="bg-white text-slate-900">
      <AnalyticsLoader />

      {/* Floating Action Buttons */}
      <a
        href="#contato"
        onClick={() => trackEvent('cta_floating_proposta_click')}
        className="fixed bottom-24 right-6 z-50 rounded-full bg-emerald-600 px-5 py-3 text-white shadow-lg hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        aria-label="Solicitar Proposta"
      >
        Solicitar Proposta
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Falar no WhatsApp"
        onClick={() => trackEvent('cta_floating_whatsapp_click', { number: whatsappNumber })}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <Hero />
      <TrustIndicators />
      <ProblemSection />
      <SolutionOverview />
      <EquipmentFleet />
      <TechnicalArchitecture />
      <ManagementSoftware />
      <BusinessIntelligence />
      <BusinessModel />
      <OperationsSLA />
      <Training />
      <SecurityLGPD />
      <Sustainability />
      <Governance />
      <ImplementationProcess />
      <Differentials />
      <AboutUs />
      <SocialProof />
      <FAQ />
      <NextSteps />
      <FinalCTA />
      <Contact />
      <Footer />
    </div>
  )
}
