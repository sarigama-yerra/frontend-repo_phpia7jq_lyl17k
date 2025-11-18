import React from 'react'

export default function BusinessModel() {
  const cards = [
    {
      title: 'Franquia Mensal (PB)',
      bullets: [
        'Volume fixo de páginas em PB por equipamento/mês',
        'Custo unitário conhecido por página',
        'Dimensionado a partir do histórico do cliente',
      ],
    },
    {
      title: 'Excedente PB',
      bullets: [
        'Páginas além da franquia mensal',
        'Valor por página reduzido',
        'Garantindo economicidade',
      ],
    },
    {
      title: 'Impressões Coloridas',
      bullets: [
        'Tratadas como excedente',
        'Valor unitário específico',
        'Controladas pelo software',
      ],
    },
    {
      title: 'Compensação Semestral',
      bullets: [
        'Créditos de meses com uso abaixo da franquia compensam excedentes',
        'Evita pagamento por páginas não utilizadas',
        'Aderente à Portaria e boas práticas',
      ],
    },
  ]

  const benefits = [
    'Previsibilidade orçamentária',
    'Modelo justo e transparente',
    'Proteção contra oscilações sazonais',
    'Facilidade de auditoria',
  ]

  return (
    <section id="modelo" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Modelo de Contratação e Precificação</h2>
        <p className="mt-4 max-w-3xl text-slate-600">O modelo de negócios é baseado em franquia mensal de páginas em preto e branco por equipamento, com cobrança de excedentes de forma transparente e mecanismo de compensação semestral, alinhado às diretrizes da administração pública.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map(c => (
            <div key={c.title} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
                {c.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border bg-slate-50 p-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
            {benefits.map(b => <div key={b} className="rounded-lg bg-white p-3 text-sm text-slate-700 shadow-sm">{b}</div>)}
          </div>
          <div className="mt-6 h-48 w-full rounded-md bg-gradient-to-r from-indigo-50 via-emerald-50 to-indigo-50"></div>
          <p className="mt-2 text-center text-sm text-slate-500">Gráfico ilustrativo: franquia vs. excedente vs. compensação semestral</p>
        </div>
      </div>
    </section>
  )
}
