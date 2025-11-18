import React from 'react'

export default function Governance() {
  const mechanisms = [
    'Sistema de chamados com histórico completo',
    'Relatórios mensais de consumo, SLAs e ocorrências',
    'Reuniões periódicas com gestor e fiscais',
    'Registro formal de decisões (OS, atas, ofícios)',
  ]

  const kpis = [
    'Índice de Atendimento no Prazo (IAP)',
    'Disponibilidade do Parque',
    'Qualidade de Impressão',
    'Consumo Médio por Usuário',
    'Redução de Desperdício',
  ]

  return (
    <section id="governanca" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Governança do Contrato e Indicadores de Desempenho</h2>
        <p className="mt-4 max-w-3xl text-slate-600">A governança do contrato é sustentada por indicadores claros, relatórios periódicos e canais formais de comunicação entre as partes.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Mecanismos de Governança</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
              {mechanisms.map(m => <li key={m}>{m}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Indicadores-Chave (KPIs)</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
              {kpis.map(k => <li key={k}>{k}</li>)}
            </ul>
            <div className="mt-4 h-40 w-full rounded-md bg-gradient-to-r from-indigo-50 via-slate-50 to-emerald-50"></div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border bg-white p-6 text-center shadow-sm">
          <div className="text-slate-700">Medir → Analisar → Otimizar</div>
        </div>
      </div>
    </section>
  )
}
