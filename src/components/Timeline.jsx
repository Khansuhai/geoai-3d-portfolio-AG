import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase } from 'lucide-react'

const experienceData = [
  {
    role: 'Data Analyst',
    organization: 'GlacierWatch',
    location: 'Berlin, Germany',
    duration: '01 Apr 2024 – Current',
    website: 'https://glacierwatch.eu',
    logoDomain: 'glacierwatch.eu',
    tasks: [
      'Collected and organized glacier datasets',
      'Used remote sensing and GIS techniques to analyze glacier change',
      'Studied temporal changes in glacial landforms',
      'Evaluated parameters for glacier monitoring'
    ],
    side: 'right'
  },
  {
    role: 'Intern',
    organization: 'ARCUS – Arctic Research Consortium of the United States',
    location: 'Fairbanks, Alaska, USA',
    duration: '01 Nov 2023 – Current',
    logoDomain: 'arcus.org',
    tasks: [
      'Collaborated with educators in Arctic Science Education Network',
      'Participated in citizen science initiatives in the Arctic region',
      'Supported curriculum development and outreach activities',
      'Organized educational programs related to Arctic science'
    ],
    side: 'left'
  },
  {
    role: 'Teaching Assistant (Internship)',
    organization: 'Bright Future Girls Degree College',
    location: 'Saharanpur, India',
    duration: '17 May 2023 – 17 Jul 2023',
    logoDomain: 'brightfuture.edu.in', // Using placeholder domain for clearbit, will fallback
    tasks: [
      'Assisted faculty in Remote Sensing and GIS practical sessions',
      'Prepared course materials and presentations',
      'Assisted with field surveys',
      'Delivered classes on Geohazard, Cryosphere and Climate Change'
    ],
    side: 'right'
  },
  {
    role: 'Intern',
    organization: 'Amity Institute of Geo-Informatics & Remote Sensing (AIGIRS)',
    location: 'Noida, India',
    duration: '01 May 2022 – 31 Jul 2022',
    topic: 'Temporal Change in Sheshnag Lake and Sonasar Lake (Glacial Lake)',
    logoDomain: 'amity.edu',
    tasks: [
      'Analyzed temporal changes in Sheshnag Lake and Sonasar Lake',
      'Used ArcMap, Google Earth Pro and Google Earth Engine',
      'Conducted geospatial analysis of glacial lakes',
      'Developed skills in mapping, spatial analysis and data interpretation'
    ],
    side: 'left'
  },
  {
    role: 'Intern',
    organization: 'Amity Institute of Geo-Informatics & Remote Sensing (AIGIRS)',
    location: 'Noida, India',
    duration: '01 Apr 2021 – 30 Jun 2021',
    topic: 'The Sun Luminosity and its Impact on Earth’s Climate',
    logoDomain: 'amity.edu',
    tasks: [
      'Participated in a research training program focused on research methodology and academic writing',
      'Developed a term paper describing methodology, findings and implications',
      'Gained experience in research design and analysis techniques'
    ],
    side: 'right'
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

function ExperienceItem({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

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
        <div className="glass-card p-6 border border-cyan-neon/20 hover:border-glacier/40 transition-colors group">
          
          {/* Header Row */}
          <div className="flex items-start gap-4 mb-4">
            {/* Logo */}
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center p-1 border border-white/5 flex-shrink-0">
               <img 
                 src={`https://logo.clearbit.com/${item.logoDomain}`} 
                 alt={`${item.organization} logo`}
                 className="w-full h-full object-contain"
                 onError={(e) => {
                   e.target.style.display = 'none';
                   e.target.nextSibling.style.display = 'block';
                 }}
               />
               <Briefcase className="w-6 h-6 text-glacier hidden" />
            </div>

            {/* Role & Org */}
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-1">
                {item.role}
              </h3>
              <p className="text-sm font-medium text-cyan-neon">
                {item.organization}
              </p>
            </div>
          </div>

          {/* Details Row */}
          <div className="flex flex-col gap-1 mb-4 text-xs font-mono text-text-muted">
            <span className="text-glacier">Duration: {item.duration}</span>
            <span>Location: {item.location}</span>
          </div>

          {/* Topic (optional) */}
          {item.topic && (
            <div className="mb-4 bg-glacier/5 border-l-2 border-cyan-neon p-3 rounded-r-lg">
              <p className="text-sm text-text-primary font-medium">
                <span className="text-glacier text-xs uppercase tracking-wider block mb-1">Topic</span>
                {item.topic}
              </p>
            </div>
          )}

          {/* Tasks */}
          <div>
            <h4 className="text-xs font-mono uppercase text-glacier tracking-wider mb-2">Tasks</h4>
            <ul className="space-y-2">
              {item.tasks.map((task, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-cyan-neon mt-1 text-xs">•</span>
                  <span className="leading-relaxed">{task}</span>
                </li>
              ))}
            </ul>
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
            // Professional Journey
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-text-secondary text-lg sm:text-xl max-w-3xl mx-auto">
            Practical application of my geospatial and remote sensing skills across institutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="timeline-line hidden md:block" />
          <div className="absolute left-6 md:hidden top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-glacier to-transparent" />

          {experienceData.map((item, index) => (
            <ExperienceItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
