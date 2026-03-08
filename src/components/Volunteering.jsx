import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe } from 'lucide-react'

const volunteeringData = [
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
    <section id="volunteering" className="relative z-10 py-8 bg-[#F5FAFF]">
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
            Community &amp; Outreach
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#0F3557]">
            Volunteering
          </h2>
          <p className="text-[#64748b] text-lg sm:text-xl max-w-3xl mx-auto">
            Giving back to the community and contributing to open-access scientific initiatives.
          </p>
        </motion.div>

        {/* Volunteering Grid */}
        <div className="flex justify-center max-w-4xl mx-auto">
          {volunteeringData.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="w-full max-w-lg"
            >
              <div className="bg-white h-full p-8 border border-[#D6ECFF] rounded-2xl shadow-sm hover:shadow-lg hover:border-[#4FA3D9]/40 transition-all flex flex-col group">
                
                {/* Header */}
                <div className="flex items-center gap-5 mb-6 pb-6 border-b border-[#D6ECFF]">
                  <div className="w-16 h-16 rounded-xl bg-[#F5FAFF] flex items-center justify-center overflow-hidden flex-shrink-0 border border-[#D6ECFF] p-2 shadow-sm">
                    <img 
                      src={`https://logo.clearbit.com/${item.logoDomain}`} 
                      alt={`${item.organization} logo`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <Globe className="w-8 h-8 text-[#4FA3D9] hidden" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0F3557] mb-1">
                      {item.role}
                    </h3>
                    <p className="text-base font-medium text-[#2F8F9D]">
                      {item.organization}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col">
                  <div className="flex flex-col gap-2 mb-6 text-sm font-mono text-[#64748b]">
                    {item.duration && (
                      <div className="flex items-center gap-2">
                        <span className="text-[#00B4D8]">•</span>
                        <span className="text-[#2F8F9D]">Duration: </span>
                        <span>{item.duration}</span>
                      </div>
                    )}
                    {item.location && (
                      <div className="flex items-center gap-2">
                        <span className="text-[#00B4D8]">•</span>
                        <span className="text-[#2F8F9D]">Location: </span>
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>

                  <div className="text-left mt-auto">
                    <h4 className="text-xs font-mono uppercase text-[#2F8F9D] tracking-wider mb-4 pl-2 border-l-2 border-[#00B4D8]">
                      Tasks &amp; Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {item.tasks.map((task, i) => (
                        <li key={i} className="text-sm text-[#334155] flex items-start gap-3">
                          <span className="text-[#00B4D8] mt-1 text-xs">►</span>
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
