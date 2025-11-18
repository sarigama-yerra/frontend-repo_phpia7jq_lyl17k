import React from 'react'

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative overflow-hidden bg-gradient-to-br from-indigo-900 to-indigo-800 py-16">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1960&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
        <h2 className="text-3xl font-extrabold md:text-4xl">Pronto para Transformar a Gestão de Impressão da Sua Organização?</h2>
        <p className="mt-3 text-lg">Agende uma reunião técnica e descubra como podemos otimizar seus custos, aumentar a eficiência e garantir total governança sobre sua infraestrutura de impressão.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#contato" className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-400">Solicitar Proposta Personalizada</a>
          <a href="#demo" className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white/90 hover:bg-white/10">Agendar Demonstração</a>
        </div>
        <div className="mt-6 space-y-1 text-sm text-white/80">
          <div>✓ Proposta sem compromisso</div>
          <div>✓ Análise gratuita do seu cenário atual</div>
          <div>✓ Demonstração prática disponível</div>
        </div>
      </div>
    </section>
  )
}
