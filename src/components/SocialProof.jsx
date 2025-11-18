import React from 'react'

export default function SocialProof() {
  const testimonials = [
    {
      name: 'Universidade Federal Exemplo',
      text: 'Reduzimos drasticamente o tempo de parada e obtivemos visibilidade total do consumo por campus.',
    },
    {
      name: 'Secretaria Municipal de Administração',
      text: 'A governança e os relatórios mensais facilitaram auditorias e otimizaram nosso orçamento.',
    },
    {
      name: 'Instituto Tecnológico Estadual',
      text: 'A bilhetagem integrada e a impressão segura elevaram nosso padrão de segurança.',
    },
  ]

  const results = [
    'Redução média de 30% nos custos de impressão',
    '98% de disponibilidade do parque',
    'Mais de 1 milhão de páginas gerenciadas mensalmente',
    '100% de conformidade com LGPD',
  ]

  return (
    <section id="resultados" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Resultados Comprovados</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map(t => (
            <div key={t.name} className="rounded-2xl border bg-white p-6 shadow-sm">
              <p className="text-slate-700">“{t.text}”</p>
              <div className="mt-3 text-sm font-semibold text-slate-900">{t.name}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {results.map(r => (
            <div key={r} className="rounded-lg bg-white p-3 text-center text-sm text-slate-700 shadow-sm">{r}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
