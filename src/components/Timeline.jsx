import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Award, FlaskConical } from 'lucide-react'

const timelineData = [
  {
    year: '2025',
    title: 'NIH Advanced Trainings',
    organization: 'National Institute of Hydrology, India',
    description: 'Completed specialized training programs in HEC-RAS flood modeling, Google Earth Engine for cryosphere analysis, and advanced cryosphere hazard assessment techniques.',
    icon: FlaskConical,
    color: 'text-cyan-neon',
    bgColor: 'bg-cyan-neon/10',
    borderColor: 'border-cyan-neon/20',
    tags: ['HEC-RAS', 'Google Earth Engine', 'Cryosphere Hazards'],
    side: 'right',
  },
  {
    year: '2024 – Present',
    title: 'Research Collaborator — Glacierwatch',
    organization: 'Glacierwatch, Germany',
    description: 'Contributing to glacier monitoring and research initiatives, leveraging satellite remote sensing data and GIS to track glacial changes across high-altitude regions. Collaborating with international researchers on cryosphere hazard assessment.',
    icon: Briefcase,
    color: 'text-glacier',
    bgColor: 'bg-glacier/10',
    borderColor: 'border-glacier/20',
    tags: ['Glacier Monitoring', 'Remote Sensing', 'International Collaboration'],
    side: 'left',
  },
  {
    year: '2024',
    title: 'ARCUS — Arctic Research',
    organization: 'Arctic Research Consortium of the U.S., Alaska',
    description: 'Engaged with ARCUS in Arctic research and polar science outreach, contributing to a global understanding of polar cryosphere dynamics and their interconnection with climate change.',
    icon: Award,
    color: 'text-laser',
    bgColor: 'bg-laser/10',
    borderColor: 'border-laser/20',
    tags: ['Arctic Research', 'Polar Science', 'Climate Change'],
    side: 'right',
  },
  {
    year: '2023 – Present',
    title: 'Master\'s in Earth Observation & GeoAI',
    organization: 'Pursuing — EO & GeoAI Specialization',
    description: 'Advanced studies in Earth Observation techniques combined with Geospatial Artificial Intelligence. Research focus on GLOF (Glacial Lake Outburst Flood) modeling in the Ladakh region using multi-sensor satellite data.',
    icon: GraduationCap,
    color: 'text-aurora',
    bgColor: 'bg-aurora/10',
    borderColor: 'border-aurora/20',
    tags: ['GLOF Modeling', 'Ladakh', 'Multi-Sensor Analysis'],
    side: 'left',
  },
  {
    year: '2023',
    title: 'PG Diploma in Disaster Management',
    organization: 'Specialization in Natural Hazards',
    description: 'Post-Graduate diploma covering disaster risk reduction, hazard assessment, early warning systems, and emergency response — with specific focus on glacial and hydrological hazards.',
    icon: Award,
    color: 'text-warm-accent',
    bgColor: 'bg-warm-accent/10',
    borderColor: 'border-warm-accent/20',
    tags: ['Disaster Risk Reduction', 'Hazard Assessment', 'Early Warning'],
    side: 'right',
  },
  {
    year: '2020 – 2023',
    title: 'B.Sc. (Hons.) Geography',
    organization: 'AIGIRS, Amity University, Noida — CGPA 9.22/10',
    description: 'Honors degree in Geography with focus on Earth System Science, Remote Sensing & GIS. Thesis on Urban Heat Island effect in Saharanpur. Advisor: Dr. V.N. Mishra.',
    icon: GraduationCap,
    color: 'text-glacier',
    bgColor: 'bg-glacier/10',
    borderColor: 'border-glacier/20',
    tags: ['UHI Thesis', 'CGPA 9.22', 'Merit Scholar'],
    side: 'left',
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

function TimelineItem({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const Icon = item.icon

  return (
    <div ref={ref} className="relative mb-12 md:mb-16">
      {/* Timeline dot */}
      <div className="timeline-dot" style={{ top: '2rem' }} />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`relative md:w-[calc(50%-2.5rem)] ${
          item.side === 'left'
            ? 'md:mr-auto md:pr-0'
            : 'md:ml-auto md:pl-0'
        } pl-12 md:pl-0`}
      >
        <div className={`glass-card p-6 border ${item.borderColor}`}>
          {/* Year badge */}
          <div className="flex items-center gap-3 mb-3">
            <div className={`${item.bgColor} p-2 rounded-lg`}>
              <Icon className={`w-4 h-4 ${item.color}`} />
            </div>
            <span className={`text-xs font-mono ${item.color} tracking-wider`}>
              {item.year}
            </span>
          </div>

          <h3 className="text-lg font-bold text-text-primary mb-1">
            {item.title}
          </h3>
          <p className="text-sm text-text-muted font-medium mb-3">
            {item.organization}
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            {item.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-1 rounded-md bg-space-600/40 text-text-muted border border-space-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative z-10 py-8">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-laser tracking-[0.3em] uppercase mb-3">
            // Experience &amp; Training
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text-warm mb-4">
            The Path Forward
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            From academic foundations to international research collaborations — each step has been precision-guided
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="timeline-line hidden md:block" />
          <div className="absolute left-6 md:hidden top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-glacier to-transparent" />

          {timelineData.map((item, index) => (
            <TimelineItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
