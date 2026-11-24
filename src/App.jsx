import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar, Footer, WhatsAppButton, BackToTop } from './components/ui.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'))
const Solutions = lazy(() => import('./pages/Others.jsx').then(m => ({ default: m.Solutions })))
const Industries = lazy(() => import('./pages/Others.jsx').then(m => ({ default: m.Industries })))
const Technologies = lazy(() => import('./pages/Others.jsx').then(m => ({ default: m.Technologies })))
const Portfolio = lazy(() => import('./pages/Others.jsx').then(m => ({ default: m.Portfolio })))
const Insights = lazy(() => import('./pages/Others.jsx').then(m => ({ default: m.Insights })))
const NotFound = lazy(() => import('./pages/Others.jsx').then(m => ({ default: m.NotFound })))
const Legal = lazy(() => import('./pages/Others.jsx').then(m => ({ default: m.Legal })))
const Contact = lazy(() => import('./pages/Others.jsx').then(m => ({ default: m.Contact })))

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollTop />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-navy">Skip to content</a>
      <Navbar />
      <main id="main">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Legal kind="privacy" />} />
            <Route path="/terms" element={<Legal kind="terms" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  )
}
