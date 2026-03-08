import { motion } from 'framer-motion'
import { ChevronDown, MapPin, Satellite, Mountain } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient overlays for glacier theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5FAFF]/90 via-[#D6ECFF]/50 to-[#F5FAFF] z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#F5FAFF]/70 via-transparent to-[#F5FAFF]/70 z-[1]" />

      {/* Hero background image */}
      <div
        className="absolute inset-0 z-0 opacity-40"
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
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-[#D6ECFF] px-5 py-2.5 rounded-full mb-8 shadow-sm"
        >
          <Satellite className="w-4 h-4 text-[#00B4D8]" />
          <span className="text-xs font-medium text-[#0F3557] tracking-wider uppercase">
            Earth Observation &amp; GeoAI
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#2F8F9D] animate-pulse" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-4"
        >
          <span className="gradient-text">Suhail</span>
          <br />
          <span className="text-[#0F3557]">Khan</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mb-8 mt-2"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-[#334155] tracking-wide">
            <span className="text-[#2F8F9D] font-semibold">Cloud Geographer</span>
            <span className="mx-4 text-[#94a3b8]">•</span>
            <span className="text-[#0F3557]">Geospatial Data Analyst</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-[#64748b] text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-12 font-medium"
        >
          B.Sc. Hons in Geography · PG Diploma in Disaster Management
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
            { icon: Mountain, label: 'Glaciology', color: 'text-[#4FA3D9]' },
            { icon: Satellite, label: 'Remote Sensing', color: 'text-[#00B4D8]' },
            { icon: MapPin, label: 'GIS & GeoAI', color: 'text-[#2F8F9D]' },
          ].map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="bg-white/80 backdrop-blur-sm border border-[#D6ECFF] px-4 py-2.5 flex items-center gap-2 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon className={`w-4 h-4 ${color}`} />
              <span className="text-sm font-medium text-[#334155]">{label}</span>
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
          <span className="text-xs font-mono text-[#64748b] tracking-widest uppercase">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-[#4FA3D9]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5FAFF] to-transparent z-[5]" />
    </section>
  )
}
