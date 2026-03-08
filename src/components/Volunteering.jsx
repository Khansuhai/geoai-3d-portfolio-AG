import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe } from 'lucide-react'

const volunteeringData = [
  {
    role: 'Data Analyst',
    organization: 'GlacierWatch',
    location: 'Berlin, Germany',
    duration: 'Apr 2024 – Present',
    website: 'https://glacierwatch.eu',
    logoDomain: 'glacierwatch.eu',
    tasks: [
      'Collected and organized glacier datasets',
      'Analyzed glacier changes using GIS and remote sensing',
      'Studied temporal variations in glacier systems',
      'Evaluated datasets for glacier monitoring initiatives'
    ]
  },
  {
    role: 'Volunteer',
    organization: 'JAX Foundation',
    location: 'India',
    duration: 'Oct 2020 – Dec 2022',
    logoDomain: 'jaxfoundation.org',
    tasks: [
      'Participated in volunteer activities and collaborative initiatives',
      'Contributed to community and organizational programs'
    ]
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Volunteering() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="volunteering" className="relative z-10 py-8">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-cyan-neon tracking-[0.3em] uppercase mb-4">
            // Community &amp; Outreach
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="gradient-text">Volunteering</span>
          </h2>
          <p className="text-text-secondary text-lg sm:text-xl max-w-3xl mx-auto">
            Giving back to the community and contributing to open-access scientific initiatives.
          </p>
        </motion.div>

        {/* Volunteering Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {volunteeringData.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex"
            >
              <div className="glass-card h-full p-8 border border-glacier/20 hover:border-cyan-neon/40 transition-colors flex flex-col group w-full">
                
                {/* Header: Logo & Role */}
                <div className="flex items-center gap-5 mb-6 pb-6 border-b border-white/5">
                  <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0 border border-white/10 p-2">
                    <img 
                      src={`https://logo.clearbit.com/${item.logoDomain}`} 
                      alt={`${item.organization} logo`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <Globe className="w-8 h-8 text-glacier hidden" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-1 leading-tight">
                      {item.role}
                    </h3>
                    <p className="text-base font-medium text-cyan-neon">
                      {item.organization}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col">
                  <div className="flex flex-col gap-2 mb-6 text-sm font-mono text-text-muted">
                    {item.duration && (
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-neon">•</span>
                        <span className="text-glacier">Duration: </span>
                        <span>{item.duration}</span>
                      </div>
                    )}
                    {item.location && (
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-neon">•</span>
                        <span className="text-glacier">Location: </span>
                        <span>{item.location}</span>
                      </div>
                    )}
                    {item.website && (
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-neon">•</span>
                        <span className="text-glacier">Website: </span>
                        <a href={item.website} target="_blank" rel="noreferrer" className="text-text-primary hover:text-cyan-neon transition-colors">
                          {item.website.replace('https://', '')}
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="text-left mt-auto">
                    <h4 className="text-xs font-mono uppercase text-glacier tracking-wider mb-4 pl-2 border-l-2 border-cyan-neon">
                      Tasks &amp; Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {item.tasks.map((task, i) => (
                        <li key={i} className="text-sm text-text-secondary flex items-start gap-3">
                          <span className="text-cyan-neon mt-1 text-xs opacity-70 group-hover:opacity-100 transition-opacity">►</span>
                          <span className="leading-relaxed group-hover:text-text-primary transition-colors">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
