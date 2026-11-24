import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Seo, PageHero, Reveal, CTASection } from '../components/ui.jsx'
import { SERVICES } from '../data.js'

export default function Services() {
  return (
    <>
      <Seo title="Services" desc="Software development, IT consulting, cloud, DevOps, database, cybersecurity, digital services and business automation from SACSOFT." />
      <PageHero crumbs="Services" title="One technology partner. Every service you need." sub="Explore our full range of IT services, from websites and custom software to cloud, databases and security." />
      <section className="section">
        <div className="wrap grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.06}>
              <Link to={`/services/${s.slug}`} className="card block h-full">
                <span className="icon-tile"><s.icon size={22} /></span>
                <h2 className="font-display text-xl font-semibold">{s.title}</h2>
                <p className="mt-2 text-sm text-mute">{s.desc}</p>
                <ul className="mt-4 space-y-1 text-sm text-mute">{s.items.slice(0, 3).map(x => <li key={x}>• {x}</li>)}</ul>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">Learn More <ArrowRight size={14} /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  )
}
