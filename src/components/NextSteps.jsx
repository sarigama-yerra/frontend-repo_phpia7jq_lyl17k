import React from 'react'

export default function NextSteps() {
  const steps = [
    ['Reunião Técnica de Alinhamento', 'Detalhamento das necessidades específicas do cliente e entendimento de premissas de TI'],
    ['Diagnóstico de Consumo', 'Levantamento de parque existente, volumes e custos. Identificação de oportunidades'],
    ['Proposta Personalizada', 'Dimensionamento do parque proposto e estrutura de franquia/excedente'],
    ['Prova de Conceito (Opcional)', 'Demonstração prática e validação em ambiente controlado'],
    ['Contratação e Implantação', 'Assinatura contratual, kickoff do projeto e início do cronograma'],
  ]

  return (
    <section id="proximos-passos" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Próximos Passos</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-5">
          {steps.map(([t, d], i) => (
            <div key={t} className="rounded-2xl border bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">{i + 1}</div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{t}</h3>
              <p className="mt-1 text-sm text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
