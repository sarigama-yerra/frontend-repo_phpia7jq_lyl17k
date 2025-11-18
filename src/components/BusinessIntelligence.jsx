import React from 'react'
import { BarChart3, Activity, Award, ScanSearch } from 'lucide-react'

export default function BusinessIntelligence() {
  const items = [
    'Consumo por departamento, unidade e tipo de equipamento',
    'Comparativos históricos com projeções semestrais',
    'Identificação de horários/dias de maior utilização',
    'Classificação de departamentos mais eficientes',
    'Detecção de trabalhos atípicos',
    'Indicadores de redução de desperdício',
  ]

  const benefits = [
    'Redução do consumo de papel e toner por ajuste de políticas',
    'Melhor utilização da franquia contratada',
    'Planejamento orçamentário mais assertivo',
    'Subsídios objetivos para decisões de expansão ou remanejamento',
    'Relatórios executivos focados em economia e impacto ambiental',
  ]

  return (
    <section id="bi" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Business Intelligence Aplicado à Impressão</h2>
        <p className="mt-4 max-w-3xl text-slate-600">Além da bilhetagem, a solução incorpora camadas de Business Intelligence (BI) que transformam dados de impressão em insights gerenciais e oportunidades de economia.</p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            {items.map(i => <div key={i} className="rounded-lg bg-white p-3 text-slate-700 shadow-sm">{i}</div>)}
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="h-56 w-full rounded-md bg-gradient-to-br from-emerald-50 to-emerald-100"></div>
            <p className="mt-3 text-center text-sm text-slate-500">Gráfico ilustrativo: Medir → Analisar → Otimizar</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-700">
              {benefits.map(b => <li key={b}>{b}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
