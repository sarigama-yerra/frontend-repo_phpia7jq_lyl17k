import React from 'react'
import { Lock, ShieldCheck, Server } from 'lucide-react'

export default function SecurityLGPD() {
  const cols = [
    {
      title: 'Controles de Segurança', icon: Lock, items: [
        'Impressão segura com autenticação',
        'Retenção temporária e autoexclusão',
        'Criptografia de dados em trânsito e repouso',
        'Logs de auditoria completos',
      ]
    },
    {
      title: 'Proteção de Dados e LGPD', icon: ShieldCheck, items: [
        'Observância integral à LGPD',
        'Sigilo absoluto sobre dados tratados',
        'Dados de bilhetagem são propriedade exclusiva do cliente',
        'Backup integral sob controle do cliente',
        'Termos de confidencialidade para toda equipe',
      ]
    },
    {
      title: 'Infraestrutura Segura', icon: Server, items: [
        'Servidores no ambiente do cliente',
        'Conformidade com políticas locais',
        'Atualizações periódicas de segurança',
      ]
    },
  ]

  return (
    <section id="seguranca" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Segurança, Sigilo e LGPD</h2>
        <p className="mt-4 max-w-3xl text-slate-600">A solução respeita integralmente as políticas de segurança da informação do cliente e a legislação de proteção de dados pessoais.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cols.map(({ title, icon: Icon, items }) => (
            <div key={title} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700"><Icon /></div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
                {items.map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
