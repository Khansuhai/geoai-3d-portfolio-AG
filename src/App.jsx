import { Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Timeline from './components/Timeline'
import Media from './components/Media'
import Awards from './components/Awards'
import Contact from './components/Contact'
import EarthScene from './components/EarthScene'

function LoadingFallback() {
  return (
    <div className="fixed inset-0 z-0 bg-space-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-glacier/20 border-t-glacier rounded-full animate-spin mx-auto mb-4" />
        <p className="text-xs font-mono text-text-muted tracking-wider">INITIALIZING EARTH SYSTEMS...</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-space-900">
      {/* 3D Background — fixed behind all content */}
      <Suspense fallback={<LoadingFallback />}>
        <EarthScene />
      </Suspense>

      {/* Navigation */}
      <Navbar />

      {/* Main Content — scrolls over the 3D background */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Timeline />
        <Media />
        <Awards />
        <Contact />
      </main>
    </div>
  )
}
