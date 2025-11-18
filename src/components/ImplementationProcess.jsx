import React from 'react'

export default function ImplementationProcess() {
  const fases = [
    { title: 'Fase 1: Reunião Inicial e Diagnóstico', items: ['Alinhamento de expectativas e escopo', 'Mapeamento de unidades e necessidades'] },
    { title: 'Fase 2: Plano de Implantação', items: ['Cronograma detalhado', 'Distribuição do parque por local', 'Planejamento de integrações'] },
    { title: 'Fase 3: Implantação Técnica', items: ['Instalação e configuração dos equipamentos', 'Configuração de servidores e software', 'Integração com diretórios corporativos'] },
    { title: 'Fase 4: Treinamentos', items: ['Capacitação da equipe de TI', 'Treinamento de usuários finais'] },
    { title: 'Fase 5: Validação e Ajustes', items: ['Testes de aceitação funcional', 'Ajustes de parametrização'] },
    { title: 'Fase 6: Go-Live e Operação Assistida', items: ['Início oficial da operação', 'Acompanhamento intensivo', 'Transição para rotina de suporte'] },
  ]

  return (
    <section id="implantacao" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Processo de Implantação da Solução</h2>
        <p className="mt-4 max-w-3xl text-slate-600">Seguimos uma metodologia estruturada que garante implantação segura, com impacto mínimo na operação e cronograma claro desde o início.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {fases.map(f => (
            <div key={f.title} className="rounded-2xl border bg-slate-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
                {f.items.map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
