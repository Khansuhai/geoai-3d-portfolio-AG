import { motion } from 'framer-motion'
import { ChevronDown, MapPin, Satellite, Mountain } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-900/80 via-transparent to-space-900 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-space-900/60 via-transparent to-space-900/60 z-[1]" />

      {/* Hero background image */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url(/assets/img/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Floating tech badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
        >
          <Satellite className="w-4 h-4 text-cyan-neon animate-pulse-glow" />
          <span className="text-xs font-mono text-text-secondary tracking-wider uppercase">
            Earth Observation &amp; GeoAI
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-aurora animate-pulse" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-4"
        >
          <span className="gradient-text text-glow">Suhail</span>
          <br />
          <span className="text-text-primary">Khan</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-light text-text-secondary">
            <span className="text-glacier font-semibold">Cloud Geographer</span>
            <span className="mx-3 text-text-muted">•</span>
            <span className="text-text-primary">Geospatial Data Analyst</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-text-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-10"
        >
          B.Sc. Hons in Geography · Pursuing Master's in Earth Observation &amp; GeoAI
          <br className="hidden sm:block" />
          Specializing in high-altitude GLOF modeling, cryosphere science &amp; remote sensing
        </motion.p>

        {/* CTA badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {[
            { icon: Mountain, label: 'Glaciology', color: 'text-glacier' },
            { icon: Satellite, label: 'Remote Sensing', color: 'text-cyan-neon' },
            { icon: MapPin, label: 'GIS & GeoAI', color: 'text-laser' },
          ].map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="glass-card px-4 py-2.5 flex items-center gap-2 rounded-xl"
            >
              <Icon className={`w-4 h-4 ${color}`} />
              <span className="text-xs font-medium text-text-secondary">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-text-muted tracking-widest uppercase">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-glacier" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-space-900 to-transparent z-[5]" />
    </section>
  )
}
