import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Code2, Cloud, BarChart3, GitBranch, ShieldCheck } from 'lucide-react'
import { Seo, Reveal, SectionHeading, FAQ, CTASection } from '../components/ui.jsx'
import { SERVICES, WHY, PROCESS, TECH, COMMITMENT } from '../data.js'

function HeroVisual() {
  const float = (d, y = 12) => ({ animate: { y: [0, -y, 0] }, transition: { duration: 6, repeat: Infinity, delay: d, ease: 'easeInOut' } })
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[520px]" aria-hidden="true">
      <svg viewBox="0 0 520 420" className="absolute inset-0 h-full w-full opacity-60">
        <defs><linearGradient id="ln" x1="0" x2="1"><stop offset="0" stopColor="#06B6D4" /><stop offset="1" stopColor="#7C3AED" /></linearGradient></defs>
        {[[60, 80, 260, 200], [260, 200, 450, 90], [260, 200, 140, 340], [260, 200, 400, 330], [60, 80, 140, 340]].map((l, i) => <line key={i} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} stroke="url(#ln)" strokeWidth="1.2" strokeDasharray="4 6" />)}
        {[[60, 80], [260, 200], [450, 90], [140, 340], [400, 330]].map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="6" fill="#06B6D4" />)}
      </svg>
      <motion.div {...float(0)} className="absolute left-0 top-6 w-56 rounded-2xl border border-white/10 bg-ink/90 p-4 font-mono text-xs shadow-xl backdrop-blur">
        <div className="mb-2 flex gap-1.5"><i className="h-2 w-2 rounded-full bg-red-400" /><i className="h-2 w-2 rounded-full bg-yellow-400" /><i className="h-2 w-2 rounded-full bg-green-400" /></div>
        <p className="text-cyan">const <span className="text-white">solution</span> = {'{'}</p>
        <p className="pl-3 text-mute">scalable: <span className="text-violet">true</span>,</p>
        <p className="pl-3 text-mute">secure: <span className="text-violet">true</span></p><p className="text-cyan">{'}'}</p>
      </motion.div>
      <motion.div {...float(1.5, 16)} className="absolute right-0 top-0 w-48 rounded-2xl border border-white/10 bg-ink/90 p-4 shadow-xl backdrop-blur">
        <div className="flex items-center gap-2 text-xs text-mute"><BarChart3 size={14} className="text-cyan" />Dashboard</div>
        <div className="mt-3 flex h-16 items-end gap-1.5">{[30, 52, 40, 70, 58, 90].map((h, i) => <div key={i} style={{ height: `${h}%` }} className="flex-1 rounded-t bg-gradient-to-t from-brand to-cyan" />)}</div>
      </motion.div>
      <motion.div {...float(0.8, 10)} className="absolute left-24 top-[44%] flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-brand to-violet shadow-2xl shadow-violet/40">
        <Cloud size={40} />
      </motion.div>
      <motion.div {...float(2.2)} className="absolute bottom-6 left-4 flex items-center gap-2 rounded-xl border border-white/10 bg-ink/90 px-4 py-3 text-sm backdrop-blur"><GitBranch size={16} className="text-cyan" />CI/CD pipeline</motion.div>
      <motion.div {...float(1)} className="absolute bottom-0 right-6 flex items-center gap-2 rounded-xl border border-white/10 bg-ink/90 px-4 py-3 text-sm backdrop-blur"><ShieldCheck size={16} className="text-violet" />Secure by design</motion.div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Seo />
      <section className="glow relative overflow-hidden pb-20 pt-32 sm:pt-40">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="orb -left-20 top-40 h-72 w-72 bg-brand/30" /><div className="orb -right-10 top-10 h-80 w-80 bg-violet/30" style={{ animationDelay: '-5s' }} />
        <div className="wrap relative grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="eyebrow">SACSOFT Technologies · Smart Solutions. Strong Businesses.</p>
            <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-7xl">Technology That Moves Your <span className="grad-text">Business Forward.</span></h1>
            <p className="mt-6 max-w-xl text-lg text-mute">From software development and digital transformation to cloud infrastructure and business automation, SACSOFT helps businesses turn technology into a competitive advantage.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services" className="btn-primary">Explore Our Services <ArrowRight size={16} /></Link>
              <Link to="/contact" className="btn-ghost">Start Your Project</Link>
              <Link to="/contact" className="btn-ghost">Let's Talk</Link>
            </div>
          </motion.div>
          <HeroVisual />
        </div>
      </section>

      <div className="overflow-hidden border-y border-white/10 bg-ink/70 py-5" aria-label="Technologies we work with">
        <div className="marquee flex w-max gap-10 whitespace-nowrap text-sm font-semibold text-mute">
          {[...Object.values(TECH).flat(), ...Object.values(TECH).flat()].map((t, i) => <span key={i} className="flex items-center gap-10">{t}<i className="h-1.5 w-1.5 rounded-full bg-cyan/60" /></span>)}
        </div>
      </div>

      <section className="section bg-ink/60">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-bold sm:text-5xl">Your Partner in Digital Transformation</h2>
            <div className="mt-6 space-y-4 text-mute">
              <p>At SACSOFT, we believe technology has the power to transform businesses.</p>
              <p>We help organizations simplify complex processes, improve operational efficiency, modernize their technology infrastructure, and build innovative digital experiences.</p>
              <p>Our comprehensive IT services combine software development, technology consulting, cloud solutions, infrastructure management, and business automation.</p>
              <p>Whether you're starting a new business, improving existing systems, or planning your digital transformation journey, SACSOFT is ready to help you move forward.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            {[[Code2, 'Software'], [Cloud, 'Cloud & DevOps'], [BarChart3, 'Data'], [ShieldCheck, 'Security']].map(([I, t], i) => (
              <div key={t} className={`card flex aspect-square flex-col justify-end ${i % 3 === 0 ? 'bg-gradient-to-br from-brand/20 to-transparent' : ''}`}><I size={30} className="mb-3 text-cyan" /><p className="font-semibold">{t}</p></div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeading title="Your Complete Technology Partner" sub="Support at every stage of your technology journey, from a first website to cloud infrastructure and custom software." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                <Link to={`/services/${s.slug}`} className="card block h-full">
                  <span className="icon-tile"><s.icon size={22} /></span>
                  <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-mute">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">Learn More <ArrowRight size={14} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink/60">
        <div className="wrap">
          <SectionHeading title="Why Choose SACSOFT?" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map(([t, d]) => <Reveal key={t}><div className="card h-full"><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm text-mute">{d}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeading title="Our Working Process" sub="A clear path from first conversation to ongoing support." />
          <ol className="relative mx-auto max-w-3xl border-l border-white/15 pl-8">
            {PROCESS.map(([t, d], i) => (
              <Reveal key={t}>
                <li className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[50px] flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand to-violet text-sm font-bold">{i + 1}</span>
                  <h3 className="font-display text-xl font-semibold">{t}</h3><p className="mt-1 text-mute">{d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-ink/60">
        <div className="wrap">
          <SectionHeading title="Technologies We Work With" sub="Modern tools across development, data, cloud and infrastructure." />
          <div className="flex flex-wrap justify-center gap-2.5">
            {Object.values(TECH).flat().map(t => <span key={t} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:border-cyan/50 hover:text-cyan">{t}</span>)}
          </div>
          <p className="mt-8 text-center"><Link to="/technologies" className="btn-ghost">View all technologies</Link></p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeading title="Our Commitment to Every Client" sub="Testimonials will appear here once we have real client feedback to share." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {COMMITMENT.map(c => <div key={c} className="card text-center font-semibold">{c}</div>)}
          </div>
        </div>
      </section>

      <section className="section bg-ink/60">
        <div className="wrap"><SectionHeading title="Frequently Asked Questions" /><FAQ /></div>
      </section>
      <CTASection />
    </>
  )
}
