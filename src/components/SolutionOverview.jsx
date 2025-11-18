import React from 'react'

export default function SolutionOverview() {
  const levels = [
    {
      title: 'Equipamentos Multifuncionais Novos',
      bullets: [
        'Quatro categorias de equipamentos, dimensionadas conforme perfil de uso de cada unidade',
        'Impressão e cópia PB e colorida, funções de digitalização, ADF e duplex automático',
      ],
    },
    {
      title: 'Infraestrutura de Servidores de Impressão',
      bullets: [
        'Ambiente de alta confiabilidade e disponibilidade',
        'Baseado em sistemas operacionais modernos (Ubuntu Server ou Windows Server corporativo)',
        'Total responsabilidade da contratada pelo licenciamento e manutenção',
      ],
    },
    {
      title: 'Software de Gestão e Bilhetagem',
      bullets: [
        'Controle por usuário, departamento e centro de custo',
        'Impressão segura, cotas, relatórios detalhados e dashboards executivos',
        'Integração com Active Directory/OpenLDAP',
      ],
    },
    {
      title: 'Serviços Operacionais e Suporte',
      bullets: [
        'Manutenção preventiva e corretiva',
        'Helpdesk web 24x7 para abertura de chamados',
        'Técnico dedicado on-site',
        'Suprimentos originais (exceto papel e grampos)',
      ],
    },
    {
      title: 'Gestão Inteligente com BI e Governança',
      bullets: [
        'Relatórios mensais, indicadores e acompanhamento sistemático',
        'Apoio na reavaliação de franquia e redimensionamento do parque',
      ],
    },
  ]

  return (
    <section id="solucao" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Nossa Solução de Outsourcing de Impressão</h2>
        <p className="mt-4 max-w-3xl text-slate-600">Propomos uma solução de outsourcing completa, que substitui o modelo tradicional de compra e manutenção de impressoras por um serviço gerenciado de ponta a ponta, com custo previsível, governança robusta e foco em eficiência, segurança e sustentabilidade.</p>
        <div className="mt-10 space-y-6">
          {levels.map((lvl, i) => (
            <div key={lvl.title} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">{i + 1}</div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{lvl.title}</h3>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
                    {lvl.bullets.map(b => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
