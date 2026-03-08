import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Medal, Star, Sparkles, IndianRupee } from 'lucide-react'

const awards = [
  {
    title: 'Merit Scholarship — Government of India',
    organization: 'Ministry of Education, India',
    year: '2020 – 2023',
    description: 'Awarded the prestigious Government of India Merit Scholarship of ₹8,000/year in recognition of outstanding academic performance throughout the B.Sc. (Hons.) Geography program.',
    icon: IndianRupee,
    color: 'text-aurora',
    bgColor: 'bg-aurora/10',
    borderColor: 'border-aurora/20',
    status: 'awarded',
  },
  {
    title: 'DTU Hackathon',
    organization: 'Delhi Technological University',
    year: 'Coming Soon',
    description: 'Participation and achievements at the Delhi Technological University Hackathon — details will be updated soon.',
    icon: Trophy,
    color: 'text-glacier',
    bgColor: 'bg-glacier/10',
    borderColor: 'border-glacier/20',
    status: 'coming-soon',
  },
  {
    title: 'Soil Erosion Research Award',
    organization: 'Research Competition',
    year: 'Coming Soon',
    description: 'Recognition for outstanding research contributions in soil erosion analysis using geospatial techniques — details will be updated soon.',
    icon: Medal,
    color: 'text-laser',
    bgColor: 'bg-laser/10',
    borderColor: 'border-laser/20',
    status: 'coming-soon',
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Awards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="awards" className="relative z-10 py-8">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-aurora tracking-[0.3em] uppercase mb-3">
            // Hackathons &amp; Awards
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Recognition
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Achievements, awards, and competitive milestones along the way
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              className="relative group"
            >
              <div className={`glass-card p-6 h-full border ${award.borderColor} relative overflow-hidden`}>
                {/* Decorative glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full ${award.bgColor} opacity-30 blur-3xl group-hover:opacity-50 transition-opacity duration-700`} />

                {/* Coming soon badge */}
                {award.status === 'coming-soon' && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 glass px-2.5 py-1 rounded-full">
                      <Sparkles className="w-3 h-3 text-text-muted animate-pulse-glow" />
                      <span className="text-[10px] font-mono text-text-muted">Coming Soon</span>
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={`${award.bgColor} p-3 rounded-xl w-fit mb-5`}>
                  <award.icon className={`w-6 h-6 ${award.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-text-primary mb-1 pr-20 leading-tight">
                  {award.title}
                </h3>
                <p className="text-xs text-text-muted font-medium mb-1">
                  {award.organization}
                </p>
                <p className={`text-xs font-mono ${award.color} mb-4`}>
                  {award.year}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {award.description}
                </p>

                {/* Award status indicator */}
                {award.status === 'awarded' && (
                  <div className="mt-5 flex items-center gap-2">
                    <Star className="w-4 h-4 text-aurora fill-aurora/30" />
                    <span className="text-xs font-medium text-aurora">Awarded</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
