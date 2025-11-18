import React from 'react'
import { MapPin, PiggyBank, BarChart3, Layers, ServerCrash, TrendingDown, Leaf } from 'lucide-react'

export default function ProblemSection() {
  const items = [
    { icon: MapPin, title: 'Dispersão Geográfica', desc: 'Diversos prédios/unidades com demandas distintas de impressão, cópia e digitalização' },
    { icon: PiggyBank, title: 'Custos Ocultos', desc: 'Despesas pulverizadas com equipamentos próprios, suprimentos, manutenção e horas de TI' },
    { icon: BarChart3, title: 'Falta de Controle', desc: 'Dificuldade em saber quem imprime, onde, quanto e para qual finalidade' },
    { icon: Layers, title: 'Parque Heterogêneo', desc: 'Equipamentos de marcas, idades e capacidades diferentes, sem padrão técnico' },
    { icon: ServerCrash, title: 'Impacto na TI', desc: 'Equipe de TI sobrecarregada com suporte a impressoras, deixando de focar em projetos estratégicos' },
    { icon: TrendingDown, title: 'Pressão por Racionalização', desc: 'Necessidade de redução de custos, alinhamento à Estratégia de Governo Digital e ao PDTIC' },
    { icon: Leaf, title: 'Exigência de Sustentabilidade', desc: 'Cumprimento de normas ambientais, logística reversa e destinação correta de resíduos' },
  ]

  return (
    <section id="desafios" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Entendimento do Contexto e dos Desafios de Impressão</h2>
        <p className="mt-4 max-w-3xl text-slate-600">Em ambientes públicos e educacionais, a impressão é um serviço continuado e crítico, presente no dia a dia acadêmico, administrativo e de gestão. Esse cenário envolve múltiplos campi, unidades remotas, demandas diversas e necessidade de rigor na prestação de contas e transparência dos gastos.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700"><Icon /></div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
