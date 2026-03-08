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
      'Best Presenter – 26th National Children’s Science Congress',
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
    <section id="education" className="relative z-10 py-8">
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
            // Academic Foundations
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-text-secondary text-lg sm:text-xl max-w-3xl mx-auto">
            My academic progression in the geospatial and earth sciences field.
          </p>
        </motion.div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {educationData.map((item, index) => (
            <motion.div
              key={item.degree}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="glass-card h-full p-8 border border-glacier/20 hover:border-cyan-neon/40 transition-colors flex flex-col group">
                
                {/* Logo Area */}
                <div className="mb-8 h-20 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white p-1 shadow-lg shadow-cyan-neon/10 group-hover:scale-105 transition-transform duration-500 overflow-hidden flex items-center justify-center relative">
                    <img 
                      src={item.logo} 
                      alt={item.institution} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-space-600/50 text-xs font-mono text-glacier mb-4 w-fit mx-auto border border-space-500/30">
                    {item.period}
                  </span>
                  
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {item.degree}
                  </h3>
                  
                  <p className="text-sm font-medium text-text-secondary mb-6">
                    {item.institution}
                  </p>

                  <div className="mt-auto px-4 py-3 rounded-lg bg-glacier/5 border border-glacier/10 mb-6">
                    <span className="text-sm font-bold text-cyan-neon">CGPA: {item.cgpa}</span>
                  </div>

                  <div className="text-left">
                    <h4 className="text-xs font-mono uppercase text-glacier tracking-wider mb-3 pl-1 border-l-2 border-cyan-neon">
                      Achievements &amp; Roles
                    </h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                          <span className="text-cyan-neon mt-1">•</span>
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
