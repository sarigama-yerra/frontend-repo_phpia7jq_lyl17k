import React from 'react'
import { Printer, Palette, ScanLine, Factory } from 'lucide-react'

export default function EquipmentFleet() {
  const cards = [
    {
      icon: Printer,
      title: 'Tipo A – Monocromático A4',
      details: [
        'Velocidade: ~30 ppm',
        'Funções: Impressão, cópia e digitalização PB, duplex automático, ADF',
        'Aplicação: Setores administrativos e acadêmicos com volume médio',
      ],
    },
    {
      icon: Palette,
      title: 'Tipo B – Colorido A4',
      details: [
        'Velocidade: ~25 ppm',
        'Funções: Impressão, cópia e digitalização colorida, duplex e ADF',
        'Aplicação: Relatórios, apresentações e materiais visuais',
      ],
    },
    {
      icon: ScanLine,
      title: 'Tipo C – Colorido A3',
      details: [
        'Velocidade: ~25 ppm',
        'Capacidade: Mínimo 1.000 folhas',
        'Aplicação: Plantas, cartazes, relatórios ampliados',
      ],
    },
    {
      icon: Factory,
      title: 'Tipo D – Alta Performance A3',
      details: [
        'Velocidade: ~80 ppm',
        'Recursos: Módulo de grampeamento e acabamento',
        'Aplicação: Alta produção e grande volume',
      ],
    },
  ]

  const common = [
    'Impressão duplex automática',
    'Resolução até 1200 x 1200 dpi',
    'Gigabit Ethernet + USB 2.0',
    'Suporte SNMP v1, v2c, v3 e IPv6',
  ]

  return (
    <section id="equipamentos" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Infraestrutura de Equipamentos Multifuncionais</h2>
        <p className="mt-4 max-w-3xl text-slate-600">A solução contempla um parque padronizado de equipamentos novos, em linha de fabricação, não remanufaturados e dimensionados para diferentes perfis de uso.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, details }) => (
            <div key={title} className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700"><Icon /></div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
                {details.map(d => <li key={d}>{d}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border bg-slate-50 p-6">
          <h4 className="font-semibold text-slate-900">Características Comuns</h4>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            {common.map(c => (
              <div key={c} className="rounded-lg bg-white p-3 text-sm text-slate-700 shadow-sm">{c}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
