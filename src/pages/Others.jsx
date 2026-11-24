import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Loader2, CheckCircle2, AlertCircle, Mail, Phone, MapPin } from 'lucide-react'
import { Seo, PageHero, Reveal, SectionHeading, CTASection, FAQ } from '../components/ui.jsx'
import { SITE, SOLUTIONS, INDUSTRIES, TECH, PROJECTS, POSTS, SERVICE_OPTIONS, BUDGETS, TIMELINES } from '../data.js'

export function Solutions() {
  return (
    <>
      <Seo title="Solutions" desc="Digital transformation, automation, enterprise software, cloud and data solutions from SACSOFT." />
      <PageHero crumbs="Solutions" title="Technology Solutions Designed Around Your Business." sub="Practical solutions for modernising operations, systems and infrastructure." />
      <section className="section"><div className="wrap grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SOLUTIONS.map(([t, d, I]) => <Reveal key={t}><div className="card h-full"><span className="icon-tile"><I size={22} /></span><h2 className="font-display text-lg font-semibold">{t}</h2><p className="mt-2 text-sm text-mute">{d}</p></div></Reveal>)}
      </div></section>
      <CTASection />
    </>
  )
}

export function Industries() {
  return (
    <>
      <Seo title="Industries" desc="SACSOFT builds technology solutions for startups, manufacturing, retail, finance, healthcare, education and more." />
      <PageHero crumbs="Industries" title="Industries We Serve" sub="Technology that fits the way your industry works." />
      <section className="section"><div className="wrap grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map(([t, d, I]) => <Reveal key={t}><div className="card h-full"><span className="icon-tile"><I size={22} /></span><h2 className="font-display text-lg font-semibold">{t}</h2><p className="mt-2 text-sm text-mute">{d}</p></div></Reveal>)}
      </div></section>
      <CTASection />
    </>
  )
}

export function Technologies() {
  return (
    <>
      <Seo title="Technologies" desc="The languages, frameworks, databases, cloud platforms and DevOps tools SACSOFT works with." />
      <PageHero crumbs="Technologies" title="Modern tools for reliable solutions." sub="The technologies we work with across development, data, cloud and infrastructure." />
      <section className="section"><div className="wrap grid gap-6 md:grid-cols-2">
        {Object.entries(TECH).map(([cat, list]) => (
          <Reveal key={cat}><div className="card h-full"><h2 className="font-display text-xl font-semibold">{cat}</h2>
            <div className="mt-4 flex flex-wrap gap-2">{list.map(t => <span key={t} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:-translate-y-0.5 hover:border-cyan/50 hover:text-cyan">{t}</span>)}</div></div></Reveal>
        ))}
      </div>
      <p className="wrap mt-8 text-center text-sm text-mute">Technology names are shown to describe tools we work with. They do not imply partnerships or certifications.</p></section>
      <CTASection />
    </>
  )
}

export function Portfolio() {
  const cats = ['All', 'Web', 'Apps', 'Cloud', 'Data']
  const [f, setF] = useState('All')
  const list = PROJECTS.filter(p => f === 'All' || p.cat === f)
  return (
    <>
      <Seo title="Portfolio" desc="Demo and concept projects from SACSOFT: websites, business systems, e-commerce, cloud and dashboards." />
      <PageHero crumbs="Portfolio" title="Concept projects that show what we can build." sub="These are demo and concept projects, not completed client work. Real case studies will be added as they become available." />
      <section className="section"><div className="wrap">
        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {cats.map(c => <button key={c} onClick={() => setF(c)} aria-pressed={f === c} className={`rounded-full border px-5 py-2 text-sm font-medium transition ${f === c ? 'border-transparent bg-gradient-to-r from-brand to-violet' : 'border-white/15 text-mute hover:text-white'}`}>{c}</button>)}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map(p => (
            <div key={p.name} className="card flex h-full flex-col p-0 overflow-hidden">
              <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-brand/30 via-ink to-violet/30"><p.icon size={44} className="text-white/80" /><span className="absolute right-3 top-3 rounded-full bg-black/40 px-3 py-1 text-xs">Demo Project</span></div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs text-cyan">{p.cat}</p>
                <h2 className="font-display mt-1 text-lg font-semibold">{p.name}</h2>
                <p className="mt-2 flex-1 text-sm text-mute">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">{p.tech.map(t => <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-mute">{t}</span>)}</div>
                <Link to="/contact" className="btn-ghost mt-5">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div></section>
      <CTASection />
    </>
  )
}

export function Insights() {
  return (
    <>
      <Seo title="Insights" desc="Placeholder insights on technology, software development, cloud, DevOps, cybersecurity and automation." />
      <PageHero crumbs="Insights" title="Insights" sub="Sample cards below are placeholders. Real articles will be published here soon." />
      <section className="section"><div className="wrap grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {POSTS.map(([c, t]) => (
          <article key={t} className="card h-full">
            <p className="text-xs text-cyan">{c}</p>
            <h2 className="font-display mt-2 text-lg font-semibold">{t}</h2>
            <p className="mt-3 text-xs text-mute">Placeholder content. Not a published article.</p>
          </article>
        ))}
      </div></section>
      <section className="section bg-ink/60"><div className="wrap"><SectionHeading title="Frequently Asked Questions" /><FAQ /></div></section>
    </>
  )
}

const empty = { name: '', email: '', phone: '', company: '', service: '', budget: '', timeline: '', message: '' }
export function Contact() {
  const [v, setV] = useState(empty)
  const [err, setErr] = useState({})
  const [state, setState] = useState('idle')
  const set = k => e => setV({ ...v, [k]: e.target.value })
  const validate = () => {
    const e = {}
    if (v.name.trim().length < 2) e.name = 'Enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address.'
    if (v.phone && !/^[+\d\s-]{8,15}$/.test(v.phone)) e.phone = 'Enter a valid phone number.'
    if (!v.service) e.service = 'Select a service.'
    if (v.message.trim().length < 10) e.message = 'Tell us a little more (at least 10 characters).'
    return e
  }
  const submit = async ev => {
    ev.preventDefault()
    const e = validate(); setErr(e)
    if (Object.keys(e).length) return
    setState('loading')
    try {
      if (SITE.endpoint) {
        const r = await fetch(SITE.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) })
        if (!r.ok) throw new Error('failed')
      } else {
        // No backend configured: open the visitor's email app with the enquiry pre-filled.
        const body = Object.entries({ Name: v.name, Email: v.email, Phone: v.phone, Company: v.company, Service: v.service, Budget: v.budget, Timeline: v.timeline, Message: v.message }).map(([k, x]) => `${k}: ${x}`).join('\n')
        await new Promise(r => setTimeout(r, 600))
        window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('New enquiry: ' + v.service)}&body=${encodeURIComponent(body)}`
      }
      setState('success'); setV(empty)
    } catch { setState('error') }
  }
  const F = ({ id, label, req, children }) => (
    <div><label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}{req && <span className="text-cyan"> *</span>}</label>{children}
      {err[id] && <p role="alert" className="mt-1 text-xs text-red-400">{err[id]}</p>}</div>
  )
  const Sel = ({ id, opts, ph }) => <select id={id} value={v[id]} onChange={set(id)} className="input"><option value="">{ph}</option>{opts.map(o => <option key={o} value={o} className="text-black">{o}</option>)}</select>
  return (
    <>
      <Seo title="Contact" desc="Contact SACSOFT in Rajajinagar, Bengaluru to discuss your software, cloud, DevOps or IT project." />
      <PageHero crumbs="Contact" title="Let's Build Something Great Together." sub="Have an idea, business challenge, or technology requirement? Let's discuss how SACSOFT can help transform your vision into a practical and scalable digital solution." />
      <section className="section"><div className="wrap grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div className="space-y-4">
          {[[Phone, 'Phone', SITE.phone, `tel:+91${SITE.phone}`], [Mail, 'Email', SITE.email, `mailto:${SITE.email}`], [MapPin, 'Location', SITE.loc]].map(([I, l, t, h]) => (
            <div key={l} className="card flex gap-4"><I className="mt-1 shrink-0 text-cyan" /><div><p className="text-sm text-mute">{l}</p>{h ? <a href={h} className="break-all font-semibold hover:text-cyan">{t}</a> : <p className="font-semibold">{t}</p>}</div></div>
          ))}
          <a href={SITE.wa} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">Chat on WhatsApp</a>
        </div>
        <form onSubmit={submit} noValidate className="card space-y-5 p-6 hover:translate-y-0 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <F id="name" label="Full Name" req><input id="name" className="input" value={v.name} onChange={set('name')} autoComplete="name" /></F>
            <F id="email" label="Email Address" req><input id="email" type="email" className="input" value={v.email} onChange={set('email')} autoComplete="email" /></F>
            <F id="phone" label="Phone Number"><input id="phone" type="tel" className="input" value={v.phone} onChange={set('phone')} autoComplete="tel" /></F>
            <F id="company" label="Company Name"><input id="company" className="input" value={v.company} onChange={set('company')} autoComplete="organization" /></F>
            <F id="service" label="Service Required" req><Sel id="service" opts={SERVICE_OPTIONS} ph="Select a service" /></F>
            <F id="budget" label="Project Budget"><Sel id="budget" opts={BUDGETS} ph="Select a budget" /></F>
            <F id="timeline" label="Project Timeline"><Sel id="timeline" opts={TIMELINES} ph="Select a timeline" /></F>
          </div>
          <F id="message" label="Message" req><textarea id="message" rows={5} className="input" value={v.message} onChange={set('message')} /></F>
          <button type="submit" disabled={state === 'loading'} className="btn-primary w-full disabled:opacity-60 sm:w-auto">{state === 'loading' ? <><Loader2 size={16} className="animate-spin" />Sending...</> : 'Send Message'}</button>
          <div aria-live="polite">
            {state === 'success' && <p className="flex items-center gap-2 rounded-xl bg-green-500/10 p-4 text-sm text-green-300"><CheckCircle2 size={18} />Thank you! Your enquiry is ready. If your email app opened, press Send to deliver it, or reach us on WhatsApp.</p>}
            {state === 'error' && <p className="flex items-center gap-2 rounded-xl bg-red-500/10 p-4 text-sm text-red-300"><AlertCircle size={18} />Something went wrong. Please try again, or email {SITE.email}.</p>}
          </div>
        </form>
      </div></section>
    </>
  )
}

export function Legal({ kind }) {
  const t = kind === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'
  return (
    <>
      <Seo title={t} />
      <PageHero crumbs={t} title={t} sub="This is a template page. Replace it with your final legal text before launch." />
      <section className="section"><div className="wrap max-w-3xl space-y-4 text-mute">
        <p>SACSOFT Technologies respects your privacy and uses the information you submit through this website only to respond to your enquiries and provide our services.</p>
        <p>We do not sell your personal information. For questions, contact us at {SITE.email} or {SITE.phone}.</p>
        <p>Use of this website is subject to these terms. Content is provided for general information and may change without notice.</p>
      </div></section>
    </>
  )
}

export function NotFound() {
  return (
    <section className="glow flex min-h-screen items-center"><div className="wrap text-center"><h1 className="font-display text-6xl font-bold">404</h1><p className="mt-3 text-mute">This page could not be found.</p><Link to="/" className="btn-primary mt-6">Back to Home</Link></div></section>
  )
}
