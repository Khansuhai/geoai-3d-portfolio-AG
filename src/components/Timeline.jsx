import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Award, FlaskConical, Globe, Activity } from 'lucide-react'

const timelineData = [
  {
    year: '2025 (Feb)',
    title: 'Training of Trainers (TOT) — Glaciers',
    organization: 'National Institute of Hydrology, Roorkee',
    description: 'Training on Glaciers & Glacial Lakes Observations for Sustainable Water Resources. Skills acquired in HEC-RAS flood modeling, satellite data analysis, and Google Earth Engine.',
    icon: FlaskConical,
    color: 'text-cyan-neon',
    bgColor: 'bg-cyan-neon/10',
    borderColor: 'border-cyan-neon/20',
    tags: ['HEC-RAS', 'Google Earth Engine', 'Water Indices'],
    side: 'right',
  },
  {
    year: '2025 (Feb)',
    title: 'Cryosphere & Climate Hazard Training',
    organization: 'National Institute of Hydrology, Jammu',
    description: 'Focused on GLOF modeling, glacier mass balance, and overall climate hazard assessment.',
    icon: FlaskConical,
    color: 'text-laser',
    bgColor: 'bg-laser/10',
    borderColor: 'border-laser/20',
    tags: ['GLOF Modeling', 'Mass Balance', 'Climate Hazards'],
    side: 'left',
  },
  {
    year: '2024 (Aug) – 2025 (Jun)',
    title: 'PG Diploma in Disaster Management (PGDDM)',
    organization: 'University of Ladakh — Kargil Campus',
    description: 'Focus: Disaster risk assessment, hazard mapping, and remote sensing. Thesis: Glacial Lake Outburst Flood Modeling in Ladakh. CGPA: 8.75/10.',
    icon: GraduationCap,
    color: 'text-cyan-neon',
    bgColor: 'bg-cyan-neon/10',
    borderColor: 'border-cyan-neon/20',
    tags: ['CGPA 8.75', 'GLOF Thesis', 'Hazard Assessment'],
    side: 'right',
  },
  {
    year: '2024 (Apr) – Present',
    title: 'Data Analyst — GlacierWatch Project',
    organization: 'GlacierWatch, Berlin, Germany',
    description: 'Glacier data collection and organization. Remote sensing analysis of glacier changes and GIS-based monitoring to support cryosphere research.',
    icon: Briefcase,
    color: 'text-glacier',
    bgColor: 'bg-glacier/10',
    borderColor: 'border-glacier/20',
    tags: ['Data Analysis', 'Remote Sensing', 'GIS Monitoring'],
    side: 'left',
  },
  {
    year: '2023 (Nov) – Present',
    title: 'Intern / Research Contributor',
    organization: 'ARCUS, Alaska, USA',
    description: 'Contributing to Arctic science education programs, citizen science initiatives, and outreach for Arctic ecosystem awareness.',
    icon: Briefcase,
    color: 'text-cyan-neon',
    bgColor: 'bg-cyan-neon/10',
    borderColor: 'border-cyan-neon/20',
    tags: ['Arctic Science', 'Citizen Science', 'Education Outreach'],
    side: 'right',
  },
  {
    year: '2023 (May – Jul)',
    title: 'Teaching Assistant',
    organization: 'Bright Future Girls Degree College, Saharanpur',
    description: 'Assisted in GIS & Remote Sensing practical classes. Conducted classes on geohazards, cryosphere, and climate change. Participated in field surveys.',
    icon: Briefcase,
    color: 'text-glacier',
    bgColor: 'bg-glacier/10',
    borderColor: 'border-glacier/20',
    tags: ['GIS Practicals', 'Geohazards', 'Field Surveys'],
    side: 'left',
  },
  {
    year: '2022 (May – Jul)',
    title: 'Research Intern — Glacial Lakes',
    organization: 'Amity Institute of Geo-Informatics & RS, Noida',
    description: 'Project: Temporal Change in Sheshnag Lake and Sonasar Lake. Performed glacial lake monitoring and temporal change detection using ArcMap, Google Earth Pro, and GEE.',
    icon: FlaskConical,
    color: 'text-cyan-neon',
    bgColor: 'bg-cyan-neon/10',
    borderColor: 'border-cyan-neon/20',
    tags: ['Glacial Lakes', 'Change Detection', 'Google Earth Engine'],
    side: 'right',
  },
  {
    year: '2021 (Apr – Jun)',
    title: 'Research Intern — Climate Science',
    organization: 'Amity Institute of Geo-Informatics & RS, Noida',
    description: 'Project: The Sun Luminosity and its Impact on Earth’s Climate. Focus on research methodology training, climate data analysis, and term paper writing.',
    icon: FlaskConical,
    color: 'text-glacier',
    bgColor: 'bg-glacier/10',
    borderColor: 'border-glacier/20',
    tags: ['Climate Impact', 'Data Analysis', 'Term Paper'],
    side: 'left',
  },
  {
    type: 'volunteer',
    period: 'Oct 2020 – Dec 2022',
    title: 'Active Volunteer',
    subtitle: 'JAX Foundation (NGO), India',
    description: 'Dedicated over two years to organizing community awareness programs, focusing on environmental conservation and educational empowerment initiatives.',
    details: ['Event Organization', 'Community Outreach', 'Leadership'],
    icon: Globe,
    color: 'text-glacier',
    bgColor: 'bg-glacier/10',
    borderColor: 'border-glacier/20',
    tags: ['Education Camps', 'COVID Relief', 'Tree Plantation'],
    side: 'right',
  },
  {
    year: '2021 (Feb – Jul)',
    title: 'Volunteer',
    organization: 'JAX Foundation',
    description: 'Activities included girl child education camps, tree plantation drives, and COVID relief coordination (arranging oxygen cylinders and hospital beds).',
    icon: Award,
    color: 'text-glacier',
    bgColor: 'bg-glacier/10',
    borderColor: 'border-glacier/20',
    tags: ['Education Camps', 'COVID Relief', 'Tree Plantation'],
    side: 'right',
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
              {item.year || item.period}
            </span>
          </div>

          <h3 className="text-lg font-bold text-text-primary mb-1">
            {item.title}
          </h3>
          <p className="text-sm text-text-muted font-medium mb-3">
            {item.organization || item.subtitle}
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
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-cyan-neon tracking-[0.3em] uppercase mb-4">
            // Experience &amp; Volunteering
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-text-secondary text-lg sm:text-xl max-w-3xl mx-auto">
            My academic progression and professional journey in the geospatial field.
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
