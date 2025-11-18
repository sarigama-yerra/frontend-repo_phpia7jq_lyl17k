import React from 'react'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="text-xl font-bold">[Nome da Empresa]</div>
            <p className="mt-2 text-sm text-slate-400">Outsourcing de Impressão Inteligente – Tecnologia • Governança • Sustentabilidade</p>
            <div className="mt-4 flex gap-3 text-slate-300">
              <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin /></a>
              <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram /></a>
              <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook /></a>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-400">Links Rápidos</div>
            <ul className="mt-3 space-y-2 text-sm">
              {['Soluções','Diferenciais','Sobre Nós','Contato','Política de Privacidade','Termos de Uso'].map(i => (
                <li key={i}><a href="#" className="hover:text-white">{i}</a></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-xl bg-slate-800 p-4">
              <div className="text-sm">Fale com nosso time e receba uma proposta sob medida para sua instituição.</div>
              <a href="#contato" className="mt-3 inline-flex rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-400">Solicitar Proposta</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">© {year} [Nome da Empresa]. Todos os direitos reservados.</div>
    </footer>
  )
}
