import React from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function Differentials() {
  const diffs = [
    ['Solução Verdadeiramente Completa', 'Equipamentos, servidores, software, suporte, manutenção e suprimentos em um único contrato'],
    ['Foco em Órgãos Públicos e Instituições Complexas', 'Modelo aderente à legislação, às boas práticas de governança e às necessidades de multiunidade'],
    ['BI e Governança Nativos', 'Não apenas bilhetagem: inteligência aplicada à gestão de impressão'],
    ['Técnico Dedicado On-Site', 'Atendimento presencial, ágil e próximo das equipes do cliente'],
    ['Sustentabilidade Comprovada', 'Logística reversa estruturada e relatórios ambientais disponíveis'],
    ['Segurança e LGPD', 'Arquitetura desenhada para proteger dados e respeitar políticas internas'],
    ['Modelo Justo de Franquia + Excedente', 'Compensação semestral e apoio consultivo na reavaliação do contrato'],
  ]

  return (
    <section id="diferenciais" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Diferenciais da Nossa Proposta</h2>
        <p className="mt-2 text-slate-600">Por que escolher nossa solução de outsourcing de impressão?</p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {diffs.map(([t, d]) => (
            <div key={t} className="flex gap-4 rounded-2xl border bg-white p-6 shadow-sm">
              <div className="text-emerald-600"><CheckCircle2 className="h-6 w-6" /></div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{t}</h3>
                <p className="mt-1 text-slate-600">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
