import React from 'react'

export default function Training() {
  return (
    <section id="treinamentos" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Capacitação de TI e Usuários Finais</h2>
        <p className="mt-4 max-w-3xl text-slate-600">A adoção de uma solução de outsourcing bem-sucedida depende da capacitação adequada das equipes técnicas e dos usuários finais.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Equipe de TI</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
              <li>Configuração e operação do software de bilhetagem</li>
              <li>Análise de franquias, consumo e relatórios</li>
              <li>Gestão de cotas, políticas e integrações</li>
              <li>Acesso a documentação técnica detalhada</li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Usuários Finais</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
              <li>Uso básico dos multifuncionais</li>
              <li>Impressão simplex/duplex e boas práticas</li>
              <li>Abastecimento de papel e mensagens dos equipamentos</li>
              <li>Orientações sobre uso consciente</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
          {['Retreinamento sem custo adicional', 'Materiais de apoio digitais (manuais, vídeos, FAQs)', 'Canal permanente para dúvidas'].map(i => (
            <div key={i} className="rounded-lg bg-white p-3 text-sm text-slate-700 shadow-sm">{i}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
