import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const educationData = [
  {
    period: '2024 – 2025',
    degree: 'Postgraduate Diploma in Disaster Management (PGDDM)',
    institution: 'University of Ladakh — Kargil Campus',
    logo: '/assets/img/UOL%20LOGO.png',
    cgpa: '8.75 / 10',
    achievements: [
      'Thesis: Glacial Lake Outburst Flood Modeling in Ladakh'
    ]
  },
  {
    period: '2020 – 2023',
    degree: 'B.Sc. (Hons) Geography',
    institution: 'Amity Institute of Geo-Informatics and Remote Sensing, Amity University — Noida, India',
    logo: '/assets/img/Amity%20University%20LOGO..jpg',
    cgpa: '9.26 / 10',
    achievements: [
      'Vice President – Departmental Geo-Science Club',
      'Fieldwork Coordinator',
      'Sports Captain – AIGIRS Department',
      'University Team Player – Cricket and Softball',
      'Won 2 Silver Medals in Inter-University Meet (Sangathan 2022)'
    ]
  },
  {
    period: '2019 – 2020',
    degree: 'Senior Secondary School Certificate',
    institution: 'Kendriya Vidyalaya Bolarum',
    logo: '/assets/img/KV%20SCHOOL%20LOGO.jpg',
    cgpa: '7.26 / 10',
    achievements: [
      'Best Presenter – 26th National Children\'s Science Congress',
      'School Player – Volleyball and Basketball',
      'Won 2 Gold Medals in Annual Sports Meets'
    ]
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="relative z-10 py-8 bg-[#F5FAFF]">
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
            Academic Foundations
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#0F3557]">
            Education
          </h2>
          <p className="text-[#64748b] text-lg sm:text-xl max-w-3xl mx-auto">
            My academic progression in the geospatial and earth sciences field.
          </p>
        </motion.div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-fr">
          {educationData.map((item, index) => (
            <motion.div
              key={item.degree}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="bg-white h-full p-8 border border-[#D6ECFF] rounded-2xl shadow-sm hover:shadow-lg hover:border-[#4FA3D9]/40 transition-all flex flex-col group">
                
                {/* Logo Area */}
                <div className="mb-8 h-20 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#F5FAFF] p-1 shadow-md border border-[#D6ECFF] group-hover:scale-105 transition-transform duration-500 overflow-hidden flex items-center justify-center">
                    <img 
                      src={item.logo} 
                      alt={item.institution} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#D6ECFF]/50 text-xs font-mono text-[#2F8F9D] mb-4 w-fit mx-auto border border-[#D6ECFF]">
                    {item.period}
                  </span>
                  
                  <h3 className="text-xl font-bold text-[#0F3557] mb-3">
                    {item.degree}
                  </h3>
                  
                  <p className="text-sm font-medium text-[#64748b] mb-6">
                    {item.institution}
                  </p>

                  <div className="mt-auto px-4 py-3 rounded-lg bg-[#D6ECFF]/30 border border-[#D6ECFF] mb-6">
                    <span className="text-sm font-bold text-[#0F3557]">CGPA: {item.cgpa}</span>
                  </div>

                  <div className="text-left">
                    <h4 className="text-xs font-mono uppercase text-[#2F8F9D] tracking-wider mb-3 pl-1 border-l-2 border-[#00B4D8]">
                      Achievements &amp; Roles
                    </h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-xs text-[#334155] flex items-start gap-2">
                          <span className="text-[#00B4D8] mt-1">•</span>
                          <span className="leading-relaxed">{achievement}</span>
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
