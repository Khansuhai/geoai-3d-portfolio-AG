import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase } from 'lucide-react'

const experienceData = [
  {
    role: 'Data Analyst',
    organization: 'GlacierWatch',
    location: 'Berlin, Germany',
    duration: 'Apr 2024 – Present',
    logoDomain: 'glacierwatch.eu',
    tasks: [
      'Collected and organized glacier datasets',
      'Used remote sensing and GIS techniques to analyze glacier change',
      'Studied temporal changes in glacial landforms',
      'Evaluated parameters for glacier monitoring'
    ]
  },
  {
    role: 'Intern',
    organization: 'ARCUS – Arctic Research Consortium of the United States',
    location: 'Fairbanks, Alaska, USA',
    duration: 'Nov 2023 – Present',
    logoDomain: 'arcus.org',
    tasks: [
      'Collaborated with educators in Arctic Science Education Network',
      'Participated in citizen science initiatives in the Arctic region',
      'Supported curriculum development and outreach activities',
      'Organized educational programs related to Arctic science'
    ]
  },
  {
    role: 'Teaching Assistant (Internship)',
    organization: 'Bright Future Girls Degree College',
    location: 'Saharanpur, India',
    duration: 'May 2023 – Jul 2023',
    logoDomain: 'brightfuture.edu.in',
    tasks: [
      'Assisted faculty in Remote Sensing and GIS practical sessions',
      'Prepared course materials and presentations',
      'Assisted with field surveys',
      'Delivered classes on Geohazard, Cryosphere and Climate Change'
    ]
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

/* Helper: tries Google favicon, then Clearbit, then fallback icon */
function OrgLogo({ domain, alt }) {
  const handleError = (e) => {
    const img = e.target
    // If Google favicon fails, try Clearbit
    if (img.src.includes('google.com')) {
      img.src = `https://logo.clearbit.com/${domain}`
    } else {
      // Both failed, show fallback
      img.style.display = 'none'
      img.nextSibling.style.display = 'flex'
    }
  }

  return (
    <>
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
        alt={alt}
        className="w-full h-full object-contain"
        onError={handleError}
      />
      <div className="w-full h-full bg-[#E6EDF2] text-[#4FA3D9] hidden items-center justify-center rounded-full">
        <Briefcase className="w-8 h-8" />
      </div>
    </>
  )
}

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative z-10 py-8 bg-[#E6EDF2]/30">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-[#2F8F9D] tracking-[0.3em] uppercase mb-4">
            Professional Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#0F3557]">
            Work Experience
          </h2>
          <p className="text-[#64748b] text-lg sm:text-xl max-w-3xl mx-auto">
            Practical application of my geospatial and remote sensing skills across institutions.
          </p>
        </motion.div>

        {/* Work Experience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-fr">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.role + index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="bg-white h-full p-8 border border-[#D6ECFF] rounded-2xl shadow-sm hover:shadow-lg hover:border-[#4FA3D9]/40 transition-all flex flex-col group">
                
                {/* Logo Area */}
                <div className="mb-6 flex items-center justify-center relative">
                  <span className="absolute left-0 top-0 inline-block px-3 py-1 rounded-full bg-[#D6ECFF]/50 text-[10px] font-mono text-[#2F8F9D] border border-[#D6ECFF]">
                    {item.duration}
                  </span>
                  <div className="w-16 h-16 rounded-full bg-[#F5FAFF] p-1.5 shadow-md border border-[#D6ECFF] group-hover:scale-105 transition-transform duration-500 overflow-hidden flex items-center justify-center">
                    <OrgLogo domain={item.logoDomain} alt={`${item.organization} logo`} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col text-center">
                  <h3 className="text-lg font-bold text-[#0F3557] mb-2">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-[#64748b] mb-1">
                    {item.organization}
                  </p>
                  <p className="text-xs text-[#2F8F9D] mb-5 font-mono">
                    {item.location}
                  </p>

                  <div className="text-left mt-auto">
                    <h4 className="text-xs font-mono uppercase text-[#2F8F9D] tracking-wider mb-3 pl-2 border-l-2 border-[#00B4D8]">
                      Tasks
                    </h4>
                    <ul className="space-y-2">
                      {item.tasks.map((task, i) => (
                        <li key={i} className="text-xs text-[#334155] flex items-start gap-2">
                          <span className="text-[#00B4D8] mt-0.5">•</span>
                          <span className="leading-relaxed">{task}</span>
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
