import React, { useState } from 'react'

const faqs = [
  {
    q: 'Como funciona o modelo de franquia + excedente?',
    a: 'Cada equipamento possui uma franquia mensal de páginas PB. O que exceder é cobrado com valor por página reduzido. Há compensação semestral: créditos de meses abaixo da franquia abatem excedentes futuros.'
  },
  {
    q: 'A solução é adequada para órgãos públicos?',
    a: 'Sim. O modelo é aderente às diretrizes da administração pública, com transparência, relatórios, governança e integração a ambientes multiunidade.'
  },
  { q: 'Quanto tempo leva a implantação?', a: 'Entre 30 e 90 dias, conforme número de unidades, integrações e volume do parque.' },
  { q: 'Como é garantida a segurança dos dados?', a: 'Impressão segura com autenticação, criptografia em trânsito e repouso, logs de auditoria e servidores no ambiente do cliente.' },
  { q: 'Posso fazer uma prova de conceito antes de contratar?', a: 'Sim, oferecemos PoC em ambiente controlado para validar integrações, políticas e relatórios.' },
  { q: 'Como funciona o técnico dedicado on-site?', a: 'Profissional alocado na região do cliente para suporte presencial, manutenções e interface com a fiscalização.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">Perguntas Frequentes</h2>
        <div className="mt-8 divide-y rounded-2xl border bg-slate-50">
          {faqs.map((f, idx) => (
            <div key={f.q} className="px-6 py-4">
              <button className="flex w-full items-center justify-between py-2 text-left" onClick={() => setOpen(open === idx ? -1 : idx)}>
                <span className="text-lg font-semibold text-slate-900">{f.q}</span>
                <span className="text-slate-500">{open === idx ? '-' : '+'}</span>
              </button>
              {open === idx && <p className="pb-2 text-slate-700">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
