import React from 'react'
import { Recycle, Leaf, BarChart3 } from 'lucide-react'

export default function Sustainability() {
  const pillars = [
    {
      icon: Recycle,
      title: 'Logística Reversa Estruturada',
      bullets: [
        'Recolhimento periódico de cartuchos, toners e resíduos',
        'Destinação ambientalmente adequada com comprovação',
        'Conformidade com Política Nacional de Resíduos Sólidos',
      ],
    },
    {
      icon: Leaf,
      title: 'Economia de Recursos',
      bullets: [
        'Configuração padrão em PB e duplex',
        'Equipamentos com economia de energia',
        'Prioridade para documentação eletrônica',
      ],
    },
    {
      icon: BarChart3,
      title: 'Relatórios Ambientais',
      bullets: [
        'Demonstração de economia de papel',
        "Indicadores como 'árvores preservadas'",
        'Redução estimada de CO₂',
      ],
    },
  ]

  return (
    <section id="sustentabilidade" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Compromisso com Sustentabilidade Ambiental</h2>
        <p className="mt-4 max-w-3xl text-slate-600">A solução foi desenhada para atender às exigências da legislação ambiental e às diretrizes de sustentabilidade da administração pública.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, bullets }) => (
            <div key={title} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700"><Icon /></div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
                {bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 h-48 w-full rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100"></div>
        <p className="mt-2 text-center text-sm text-slate-500">Gráficos ilustrativos de redução de impacto ambiental</p>
      </div>
    </section>
  )
}
