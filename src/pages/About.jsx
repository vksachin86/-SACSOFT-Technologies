import { Link } from 'react-router-dom'
import { User, Linkedin } from 'lucide-react'
import { Seo, PageHero, Reveal, SectionHeading, CTASection } from '../components/ui.jsx'
import { VALUES } from '../data.js'

export default function About() {
  return (
    <>
      <Seo title="About" desc="SACSOFT is a technology solutions company focused on helping businesses grow through innovative, reliable, and scalable technology." />
      <PageHero crumbs="About" title="Technology should empower businesses, not complicate them." sub="SACSOFT is a technology solutions company focused on helping businesses grow through innovative, reliable, and scalable technology." />
      <section className="section">
        <div className="wrap grid gap-6 md:grid-cols-2">
          <Reveal><div className="card h-full"><h2 className="font-display text-2xl font-bold">Our Mission</h2><p className="mt-3 text-mute">To empower businesses through innovative, reliable, and accessible technology solutions that simplify operations, improve efficiency, and support sustainable growth. We aim to understand the unique challenges of every business and deliver technology solutions that create meaningful value.</p></div></Reveal>
          <Reveal delay={0.08}><div className="card h-full"><h2 className="font-display text-2xl font-bold">Our Vision</h2><p className="mt-3 text-mute">To become a trusted technology partner for businesses globally by delivering innovative digital solutions, building long-term relationships, and continuously evolving with the changing technology landscape.</p></div></Reveal>
        </div>
      </section>
      <section className="section bg-ink/60">
        <div className="wrap">
          <SectionHeading title="Our Values" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map(([t, d]) => <Reveal key={t}><div className="card h-full"><h3 className="font-display text-lg font-semibold">{t}</h3><p className="mt-2 text-sm text-mute">{d}</p></div></Reveal>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid items-center gap-10 md:grid-cols-[280px_1fr]">
          <div className="mx-auto flex aspect-square w-60 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-brand/30 to-violet/30 md:w-full" role="img" aria-label="Founder photo placeholder"><User size={80} className="text-white/60" /></div>
          <Reveal>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Sachin Vishwakarma</h2>
            <p className="mt-1 font-semibold text-cyan">Founder — SACSOFT</p>
            <div className="mt-5 space-y-4 text-mute">
              <p>Sachin Vishwakarma is the founder of SACSOFT, with a vision to build a technology company focused on delivering innovative, reliable, and practical IT solutions for businesses.</p>
              <p>Driven by an interest in technology, software development, digital transformation, and business solutions, his goal is to help organizations leverage modern technology to improve operations, solve challenges, and grow.</p>
              <p>Through SACSOFT, he aims to build a company that provides comprehensive technology services while continuously exploring new technologies and digital opportunities.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3"><a href="#" className="btn-ghost"><Linkedin size={16} />LinkedIn (placeholder)</a><Link to="/contact" className="btn-primary">Contact Sachin</Link></div>
          </Reveal>
        </div>
      </section>
      <section className="section bg-ink/60">
        <div className="wrap">
          <SectionHeading title="Building the Future Through Technology" sub="Innovation-driven, learning-focused, customer-oriented, collaborative, technology-focused, quality-driven and growth-oriented." />
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-br from-brand/20 to-violet/20 p-8 text-center sm:p-12">
            <h3 className="font-display text-2xl font-bold sm:text-4xl">Growing Beyond Services. Building the Future.</h3>
            <p className="mt-4 text-mute">SACSOFT is built with a long-term vision of becoming a comprehensive technology company. Our journey begins with IT services, software development, consulting, and digital solutions. As we grow, we aim to expand our capabilities, build stronger technology teams, develop innovative software products, and create digital solutions that serve businesses across different industries.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
