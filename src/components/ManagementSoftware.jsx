import React, { useState } from 'react'

const tabs = [
  {
    key: 'usuario',
    title: 'Controle por Usuário',
    items: [
      'Registro de todas as impressões por usuário, setor, unidade e equipamento',
      'Associação a centros de custo, projetos ou unidades acadêmicas/administrativas',
    ],
  },
  {
    key: 'cotas',
    title: 'Cotas e Políticas',
    items: [
      'Definição de cotas volumétricas ou monetárias',
      'Bloqueios configuráveis (cor, A3, volume máximo)',
      'Políticas de impressão duplex como padrão',
    ],
  },
  {
    key: 'segura',
    title: 'Impressão Segura',
    items: [
      'Retenção dos trabalhos em fila até autenticação no equipamento',
      'Liberação por login/senha de rede',
      'Autoexclusão de trabalhos não liberados',
    ],
  },
  {
    key: 'monitoramento',
    title: 'Monitoramento e Alertas',
    items: [
      'Detecção automática de equipamentos, status e alertas',
      'Avisos sobre suprimentos, falhas e volumes atípicos',
    ],
  },
  {
    key: 'relatorios',
    title: 'Relatórios',
    items: [
      'Relatórios detalhados e agendados (diários, mensais, por unidade)',
      'Exportação em PDF, CSV',
      'Interface web em português',
    ],
  },
]

export default function ManagementSoftware() {
  const [active, setActive] = useState('usuario')

  return (
    <section id="gestao" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Gestão de Impressão e Bilhetagem</h2>
        <p className="mt-4 max-w-3xl text-slate-600">O software de gestão e bilhetagem é o coração da governança do contrato, permitindo controle total do consumo e apoio à tomada de decisão.</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {tabs.map(t => (
            <button key={t.key} onClick={() => setActive(t.key)} className={`rounded-full border px-4 py-2 text-sm transition ${active === t.key ? 'bg-indigo-600 text-white border-indigo-600' : 'text-slate-700 hover:bg-slate-50'}`}>
              {t.title}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border bg-slate-50 p-6">
          {tabs.filter(t => t.key === active)[0].items && (
            <ul className="list-disc space-y-1 pl-5 text-slate-700">
              {tabs.filter(t => t.key === active)[0].items.map(i => <li key={i}>{i}</li>)}
            </ul>
          )}

          <div className="mt-6 rounded-xl bg-white p-4 shadow-sm">
            <div className="h-48 w-full rounded-md bg-gradient-to-br from-indigo-50 to-indigo-100"></div>
            <p className="mt-3 text-center text-sm text-slate-500">Mockup de dashboard ilustrativo</p>
          </div>
        </div>
      </div>
    </section>
  )
}
