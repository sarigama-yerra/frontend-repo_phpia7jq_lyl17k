import React from 'react'

export default function TrustIndicators() {
  const stats = [
    { label: 'Anos de Experiência no Mercado', value: '10+' },
    { label: 'Clientes Atendidos', value: '120+' },
    { label: 'Equipamentos Gerenciados', value: '2.500+' },
    { label: 'Taxa de Satisfação', value: '98%' },
  ]

  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 rounded-2xl border bg-slate-50 p-6 text-center shadow-sm md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="">
              <div className="text-3xl font-extrabold text-slate-900">{s.value}</div>
              <div className="mt-1 text-sm text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
