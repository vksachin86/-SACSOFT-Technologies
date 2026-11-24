import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, ArrowUp, MessageCircle, Plus, ChevronDown, Mail, Phone, MapPin } from 'lucide-react'
import { SITE, NAV, SERVICES, FAQS } from '../data.js'

export function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true">
        <defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#06B6D4" /><stop offset=".5" stopColor="#2563EB" /><stop offset="1" stopColor="#7C3AED" /></linearGradient></defs>
        <rect width="64" height="64" rx="16" fill="#111827" stroke="#ffffff22" />
        <path d="M44 20H26a7 7 0 0 0 0 14h12a7 7 0 0 1 0 14H20" fill="none" stroke="url(#lg)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="leading-none"><span className="font-display text-xl font-bold tracking-tight">SAC<span className="grad-text">SOFT</span></span><span className="block text-[9px] font-semibold uppercase tracking-[0.34em] text-mute">Technologies</span></span>
    </span>
  )
}

export function Seo({ title, desc }) {
  useEffect(() => {
    document.title = title ? `${title} | SACSOFT Technologies` : 'SACSOFT Technologies | Software Development & IT Solutions Company'
    if (desc) document.querySelector('meta[name="description"]')?.setAttribute('content', desc)
  }, [title, desc])
  return null
}

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  )
}

export function SectionHeading({ title, sub, center = true }) {
  return (
    <div className={`mb-12 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      <span className={`mb-5 block h-1 w-14 rounded-full bg-gradient-to-r from-cyan to-violet ${center ? 'mx-auto' : ''}`} />
      <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-base text-mute sm:text-lg">{sub}</p>}
    </div>
  )
}

export function PageHero({ title, sub, crumbs }) {
  return (
    <section className="glow relative overflow-hidden pb-16 pt-36 sm:pt-44">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="wrap relative">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-mute">
          <Link to="/" className="hover:text-white">Home</Link> / <span className="text-white">{crumbs}</span>
        </nav>
        <h1 className="font-display max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">{title}</h1>
        {sub && <p className="mt-5 max-w-2xl text-lg text-mute">{sub}</p>}
      </div>
    </section>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => {
    setOpen(false)
  }, [pathname])
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  const link = ({ isActive }) => `text-sm font-medium transition hover:text-white ${isActive ? 'text-white' : 'text-mute'}`
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled || open ? 'border-b border-white/10 bg-navy/85 backdrop-blur-xl' : ''}`}>
      <div className="wrap flex h-[72px] items-center justify-between">
        <Link to="/" aria-label="SACSOFT Technologies home"><Logo /></Link>
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV.map(([l, to]) => l === 'Services' ? (
            <div key={l} className="group relative">
              <NavLink to={to} className={link}>{l} <ChevronDown size={14} className="inline" /></NavLink>
              <div className="invisible absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="grid grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-ink/95 p-3 shadow-2xl backdrop-blur-xl">
                  {SERVICES.map(s => (
                    <Link key={s.slug} to={`/services/${s.slug}`} className="flex items-center gap-3 rounded-xl p-3 text-sm text-mute hover:bg-white/5 hover:text-white">
                      <s.icon size={18} className="text-cyan" />{s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : <NavLink key={l} to={to} end={to === '/'} className={link}>{l}</NavLink>)}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-primary hidden sm:inline-flex">Let's Talk</Link>
          <button className="rounded-lg p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Mobile" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden lg:hidden">
            <div className="wrap flex flex-col gap-1 pb-6">
              {NAV.map(([l, to]) => <NavLink key={l} to={to} end={to === '/'} className={({ isActive }) => `rounded-xl px-3 py-3 text-base font-medium ${isActive ? 'bg-white/10 text-white' : 'text-mute'}`}>{l}</NavLink>)}
              <Link to="/contact" className="btn-primary mt-3">Let's Talk</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export function Footer() {
  const q = [['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Solutions', '/solutions'], ['Industries', '/industries'], ['Portfolio', '/portfolio'], ['Insights', '/insights'], ['Contact', '/contact']]
  const fs = [['Software Development', 'software-development'], ['IT Consulting', 'it-consulting'], ['Cloud & DevOps', 'cloud-services'], ['Database Services', 'database-services'], ['Cybersecurity', 'cybersecurity'], ['Digital Services', 'digital-services'], ['Business Solutions', 'business-automation']]
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="wrap grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 font-medium text-white">{SITE.tag}</p>
          <p className="mt-2 text-sm text-mute">Technology solutions designed to help businesses innovate, simplify operations, and grow.</p>
          <div className="mt-5 flex flex-wrap gap-2 text-sm text-mute">
            {[['LinkedIn', 'https://www.linkedin.com/'], ['Instagram', 'https://www.instagram.com/'], ['Facebook', 'https://www.facebook.com/'], ['GitHub', 'https://github.com/']].map(([s, u]) => <a key={s} href={u} target="_blank" rel="noopener noreferrer" aria-label={s} className="rounded-full border border-white/10 px-3 py-1 hover:text-white">{s}</a>)}
          </div>
        </div>
        <div><h3 className="mb-4 font-semibold">Quick Links</h3><ul className="space-y-2 text-sm text-mute">{q.map(([l, t]) => <li key={l}><Link className="hover:text-white" to={t}>{l}</Link></li>)}</ul></div>
        <div><h3 className="mb-4 font-semibold">Services</h3><ul className="space-y-2 text-sm text-mute">{fs.map(([l, s]) => <li key={l}><Link className="hover:text-white" to={`/services/${s}`}>{l}</Link></li>)}</ul></div>
        <div>
          <h3 className="mb-4 font-semibold">Contact</h3>
          <ul className="space-y-3 text-sm text-mute">
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0 text-cyan" /><a href={`tel:+91${SITE.phone}`} className="hover:text-white">{SITE.phone}</a></li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0 text-cyan" /><a href={`mailto:${SITE.email}`} className="break-all hover:text-white">{SITE.email}</a></li>
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-cyan" />{SITE.loc}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="wrap flex flex-col justify-between gap-3 text-sm text-mute sm:flex-row">
          <p>© 2026 SACSOFT Technologies. All rights reserved.</p>
          <p className="flex gap-5"><Link to="/privacy" className="hover:text-white">Privacy Policy</Link><Link to="/terms" className="hover:text-white">Terms &amp; Conditions</Link></p>
        </div>
      </div>
    </footer>
  )
}

export function WhatsAppButton() {
  return (
    <a href={SITE.wa} target="_blank" rel="noopener noreferrer" aria-label="Chat with SACSOFT on WhatsApp" className="fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/40 transition hover:scale-105">
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle size={20} className="relative" /><span className="relative hidden sm:inline">WhatsApp</span>
    </a>
  )
}

export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  if (!show) return null
  return <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-5 right-5 z-40 rounded-full border border-white/15 bg-ink p-3 hover:bg-white/10"><ArrowUp size={18} /></button>
}

export function FAQ() {
  const [o, setO] = useState(0)
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {FAQS.map(([q, a], i) => (
        <div key={q} className="rounded-2xl border border-white/10 bg-white/[0.04]">
          <button className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold" aria-expanded={o === i} onClick={() => setO(o === i ? -1 : i)}>
            {q}<Plus size={18} className={`shrink-0 text-cyan transition ${o === i ? 'rotate-45' : ''}`} />
          </button>
          <AnimatePresence initial={false}>
            {o === i && <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden"><p className="px-5 pb-5 text-mute">{a}</p></motion.div>}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export function CTASection({ title = "Let's Build Something Great Together." }) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand/30 via-ink to-violet/30 px-6 py-16 text-center sm:px-16">
          <h2 className="font-display mx-auto max-w-3xl text-3xl font-bold sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-mute">Tell us about your idea, challenge or requirement. We'll help you turn it into a practical, scalable solution.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">Start Your Project <ArrowRight size={16} /></Link>
            <a href={SITE.wa} target="_blank" rel="noopener noreferrer" className="btn-ghost">Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  )
}
