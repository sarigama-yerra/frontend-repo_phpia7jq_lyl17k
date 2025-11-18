import React from 'react'

export default function OperationsSLA() {
  const boxes = [
    {
      title: 'Helpdesk Web 24x7',
      items: [
        'Abertura de chamados a qualquer momento',
        'Perfis de acesso (usuários, supervisores, TI)',
        'Acompanhamento em tempo real pela fiscalização',
      ],
    },
    {
      title: 'Técnico Dedicado On-Site',
      items: [
        'Profissional residente na região do cliente',
        'Atuação presencial nos horários úteis',
        'Responsável por manutenção preventiva, corretiva e apoio',
      ],
    },
    {
      title: 'SLAs Definidos',
      items: [
        'Falha com parada total: atendimento em poucas horas úteis',
        'Falha sem parada: mesmo dia útil',
        'Troca de suprimentos: até um dia útil',
        'Equipamento backup quando necessário',
      ],
    },
    {
      title: 'Manutenção',
      items: [
        'Calendário de preventivas acordado',
        'Corretivas registradas e rastreadas',
        'Substituição de equipamentos com reincidência de falhas',
      ],
    },
  ]

  const table = [
    ['Falha Total', 'Poucas horas úteis', 'Equipamento backup se necessário'],
    ['Falha Parcial', 'Mesmo dia útil', 'Priorização por impacto'],
    ['Suprimentos', 'Até 1 dia útil', 'Estoque preventivo'],
    ['Preventiva', 'Agendado', 'Calendário trimestral'],
  ]

  return (
    <section id="sla" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Operação do Serviço e Níveis de Serviço (SLA)</h2>
        <p className="mt-4 max-w-3xl text-slate-600">A operação é conduzida com base em SLAs claros, com prazos definidos para cada tipo de atendimento, garantindo alta disponibilidade do parque de impressão.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {boxes.map(b => (
            <div key={b.title} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{b.title}</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
                {b.items.map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border bg-white shadow-sm">
          <table className="min-w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-sm font-semibold text-slate-700">Tipo de Serviço</th>
                <th className="px-4 py-3 text-sm font-semibold text-slate-700">Prazo de Atendimento</th>
                <th className="px-4 py-3 text-sm font-semibold text-slate-700">Observação</th>
              </tr>
            </thead>
            <tbody>
              {table.map((row, idx) => (
                <tr key={idx} className="border-t">
                  {row.map((cell, i) => (
                    <td key={i} className="px-4 py-3 text-slate-700">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
