import React from 'react'
import Spline from '@splinetool/react-spline'
import { Shield, Printer, LineChart, Leaf } from 'lucide-react'
import { trackEvent } from '../utils/analytics'

const primary = '#1e3a8a'
const accent = '#10b981'

export default function Hero() {
  return (
    <section id="topo" className="relative h-[90vh] w-full overflow-hidden bg-white">
      {/* Spline full-bleed background */}
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay gradient for contrast (won't block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/85 via-white/80 to-white/95" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium backdrop-blur" style={{ background: 'rgba(30,58,138,0.08)', color: primary }}>
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
          Outsourcing de Impressão Inteligente
        </div>
        <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
          Outsourcing de Impressão Inteligente
        </h1>
        <p className="mt-3 text-lg font-semibold text-slate-700">Gestão Completa • Zero Preocupação • Máxima Eficiência</p>
        <p className="mt-5 max-w-3xl text-slate-600">
          Soluções completas de impressão, cópia e digitalização com gestão inteligente, segurança da informação e sustentabilidade, especialmente desenhadas para ambientes complexos e multiunidade.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#contato" onClick={() => trackEvent('cta_hero_proposta_click')} className="rounded-full px-6 py-3 text-white shadow-lg transition hover:shadow-xl" style={{ backgroundColor: accent }}>Solicitar Proposta</a>
          <a href="#demo" onClick={() => trackEvent('cta_hero_demo_click')} className="rounded-full border px-6 py-3 transition hover:bg-slate-50" style={{ borderColor: primary, color: primary }}>Agendar Demonstração</a>
        </div>

        {/* Floating icons */}
        <div className="mt-10 grid grid-cols-4 gap-6" style={{ color: primary }}>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100/80 shadow" aria-hidden><Printer /></div>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100/80 shadow" aria-hidden><Shield /></div>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100/80 shadow" aria-hidden><LineChart /></div>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100/80 shadow" aria-hidden><Leaf /></div>
        </div>
      </div>
    </section>
  )
}
