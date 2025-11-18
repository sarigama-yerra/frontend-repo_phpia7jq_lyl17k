import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', instituicao: '', cargo: '', unidades: '', volume: '', mensagem: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')

  const validate = () => {
    const e = {}
    if (!form.nome) e.nome = 'Informe seu nome completo.'
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Informe um e-mail válido.'
    if (!form.telefone) e.telefone = 'Informe um telefone/WhatsApp.'
    if (!form.instituicao) e.instituicao = 'Informe a instituição/empresa.'
    if (!form.cargo) e.cargo = 'Informe seu cargo.'
    if (!form.unidades) e.unidades = 'Informe o número de unidades.'
    if (!form.volume) e.volume = 'Informe o volume mensal estimado.'
    return e
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    setServerError('')
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return

    try {
      setLoading(true)
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Falha ao enviar. Tente novamente mais tarde.')
      setSent(true)
    } catch (err) {
      setServerError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const Field = ({ label, name, type = 'text', placeholder }) => (
    <div>
      <label className="text-sm font-medium text-slate-700" htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={form[name]}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
        placeholder={placeholder}
        className={`mt-1 w-full rounded-lg border px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors[name] ? 'border-red-500' : 'border-slate-300'}`}
      />
      {errors[name] && <p className="mt-1 text-xs text-red-600">{errors[name]}</p>}
    </div>
  )

  if (sent) {
    return (
      <section id="contato" className="bg-white py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Solicitação enviada com sucesso!</h2>
          <p className="mt-2 text-slate-600">Nossa equipe entrará em contato em breve. Obrigado!</p>
        </div>
      </section>
    )
  }

  return (
    <section id="contato" className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Entre em Contato</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <form onSubmit={onSubmit} className="md:col-span-2 space-y-4" noValidate>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Nome Completo" name="nome" placeholder="Seu nome" />
              <Field label="E-mail Corporativo" name="email" type="email" placeholder="voce@empresa.com.br" />
              <Field label="Telefone / WhatsApp" name="telefone" placeholder="(XX) XXXXX-XXXX" />
              <Field label="Instituição/Empresa" name="instituicao" placeholder="Nome da organização" />
              <Field label="Cargo" name="cargo" placeholder="Sua função" />
              <Field label="Número de Unidades/Locais" name="unidades" placeholder="Ex.: 12" />
            </div>
            <Field label="Volume Estimado de Impressão (mensal)" name="volume" placeholder="Ex.: 150.000 páginas" />
            <div>
              <label className="text-sm font-medium text-slate-700" htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} className={`mt-1 w-full rounded-lg border px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.mensagem ? 'border-red-500' : 'border-slate-300'}`} rows={4} placeholder="Conte um pouco do seu cenário"></textarea>
            </div>
            {serverError && <p className="text-sm text-red-600">{serverError}</p>}
            <button type="submit" disabled={loading} className="w-full rounded-lg bg-emerald-600 px-4 py-3 font-semibold text-white shadow hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-70">{loading ? 'Enviando...' : 'Enviar Solicitação'}</button>
          </form>

          <div className="space-y-3 rounded-2xl border bg-slate-50 p-6">
            <div>
              <div className="text-sm font-semibold text-slate-900">E-mail Comercial</div>
              <div className="text-slate-700">placeholder@empresa.com.br</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">Telefone / WhatsApp</div>
              <div className="text-slate-700">(XX) XXXX-XXXX</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">Site</div>
              <div className="text-slate-700">www.suaempresa.com.br</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">Endereço</div>
              <div className="text-slate-700">Rua, nº – Bairro – Cidade/UF</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">Horário Comercial</div>
              <div className="text-slate-700">Segunda a Sexta: 8h às 18h</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
