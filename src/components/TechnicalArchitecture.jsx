import React from 'react'

export default function TechnicalArchitecture() {
  const cols = [
    {
      title: 'Servidores Dedicados',
      items: [
        'Instalação em datacenter do cliente',
        'Ubuntu Server 24.04 ou Windows Server',
        'Licenças sob responsabilidade da contratada',
      ],
    },
    {
      title: 'Compatibilidade Ampla',
      items: [
        'Windows, Linux (Debian/RedHat), macOS',
        'Drivers 32 e 64 bits',
      ],
    },
    {
      title: 'Integração Corporativa',
      items: [
        'Active Directory e/ou OpenLDAP',
        'Single Sign-On para usuários',
        'Mesmas credenciais de rede',
      ],
    },
    {
      title: 'Protocolos Avançados',
      items: [
        'SNMP para monitoramento remoto',
        'Sincronização NTP/SNTP',
        'Suporte a VLANs',
      ],
    },
  ]

  return (
    <section id="arquitetura" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Arquitetura Técnica e Servidores de Impressão</h2>
        <p className="mt-4 max-w-3xl text-slate-600">A infraestrutura de servidores é concebida para garantir alta disponibilidade, segurança e integração com o ambiente de TI do cliente.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cols.map(({ title, items }) => (
            <div key={title} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
                {items.map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border bg-white p-6 text-center shadow-sm">
          <div className="mx-auto max-w-3xl text-slate-600">Usuários → Rede Corporativa → Servidores de Impressão → Dispositivos Multifuncionais</div>
        </div>
      </div>
    </section>
  )
}
