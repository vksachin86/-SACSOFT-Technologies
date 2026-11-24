import { Link, useParams, Navigate } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import { Seo, PageHero, Reveal, SectionHeading, CTASection } from '../components/ui.jsx'
import { SERVICES, PROCESS } from '../data.js'

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = SERVICES.find(x => x.slug === slug)
  if (!s) return <Navigate to="/services" replace />
  const related = SERVICES.filter(x => x.slug !== slug).slice(0, 3)
  const challenges = ['Manual or disconnected processes that slow your team down', 'Tools and systems that do not scale as the business grows', 'Unclear technology direction, priorities or next steps']
  const benefits = ['Solutions designed around your requirements', 'Scalable, maintainable architecture', 'Clear communication at every stage', 'Support after launch']
  return (
    <>
      <Seo title={s.title} desc={s.desc} />
      <PageHero crumbs={s.title} title={s.title} sub={s.desc} />
      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-bold">What we offer</h2>
            <ul className="mt-5 space-y-3">{s.items.map(i => <li key={i} className="flex gap-3 text-mute"><Check size={18} className="mt-0.5 shrink-0 text-cyan" />{i}</li>)}</ul>
            <h2 className="font-display mt-10 text-2xl font-bold">Business challenges</h2>
            <ul className="mt-5 space-y-3">{challenges.map(i => <li key={i} className="flex gap-3 text-mute"><Check size={18} className="mt-0.5 shrink-0 text-violet" />{i}</li>)}</ul>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card">
              <h2 className="font-display text-2xl font-bold">Our solution</h2>
              <p className="mt-3 text-mute">We start by understanding your goals, then plan, build and support a {s.title.toLowerCase()} solution that fits your business, budget and timeline.</p>
              <h3 className="mt-6 font-semibold">Key benefits</h3>
              <ul className="mt-3 space-y-2 text-sm text-mute">{benefits.map(b => <li key={b}>• {b}</li>)}</ul>
              <h3 className="mt-6 font-semibold">Technologies</h3>
              <div className="mt-3 flex flex-wrap gap-2">{s.tech.map(t => <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">{t}</span>)}</div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section bg-ink/60">
        <div className="wrap">
          <SectionHeading title="Our process" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{PROCESS.map(([t, d], i) => <div key={t} className="card"><p className="text-sm text-cyan">Step {i + 1}</p><h3 className="font-semibold">{t}</h3><p className="mt-1 text-sm text-mute">{d}</p></div>)}</div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <SectionHeading title="Related services" />
          <div className="grid gap-5 md:grid-cols-3">{related.map(r => <Link key={r.slug} to={`/services/${r.slug}`} className="card"><r.icon className="mb-3 text-cyan" /><h3 className="font-semibold">{r.title}</h3><span className="mt-3 inline-flex items-center gap-1 text-sm text-brand">Learn More <ArrowRight size={14} /></span></Link>)}</div>
        </div>
      </section>
      <CTASection title={`Need ${s.title}? Let's talk.`} />
    </>
  )
}
