import React from 'react'

export default function AboutUs() {
  const pillars = [
    {
      title: 'Experiência e Atuação',
      items: [
        'Anos de atuação em projetos multiunidade e multicampi',
        'Implantação de parques com dezenas de equipamentos distribuídos',
        'Know-how em órgãos públicos federais com aderência a PDTI/PDTIC',
      ],
    },
    {
      title: 'Capacidade Técnica',
      items: [
        'Parcerias e certificações com fabricantes',
        'Equipe técnica própria certificada',
        'Estrutura para atendimento on-site e suporte remoto',
      ],
    },
    {
      title: 'Compromissos Essenciais',
      items: [
        'Conformidade legal e regulatória',
        'Foco em segurança da informação',
        'Prova de conceito quando necessário',
      ],
    },
  ]

  return (
    <section id="sobre" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Sobre a Nossa Empresa</h2>
        <p className="mt-4 max-w-3xl text-slate-600">Somos uma empresa especializada em outsourcing de impressão, cópia e digitalização, com forte atuação em ambientes complexos, distribuídos e de alta criticidade operacional, como instituições de ensino, órgãos públicos e organizações de médio e grande porte.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map(p => (
            <div key={p.title} className="rounded-2xl border bg-slate-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
                {p.items.map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border bg-white p-6 text-center shadow-sm">
          <div className="font-semibold text-slate-800">Tecnologia • Governança • Sustentabilidade</div>
        </div>
      </div>
    </section>
  )
}
