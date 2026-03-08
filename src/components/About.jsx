import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Globe, FlaskConical, MapPin, Compass, Snowflake, Monitor, Cloud, Code2, Languages } from 'lucide-react'

const skills = [
  { 
    category: 'GIS & Remote Sensing', 
    icon: Monitor,
    color: '#4FA3D9',
    items: ['QGIS', 'ArcMap', 'ArcGIS Pro', 'ESA SNAP', 'ILWIS', 'Google Earth Pro', 'Google Earth Studio', 'J-MARS', 'SEA-DAS'] 
  },
  { 
    category: 'Cloud Platforms', 
    icon: Cloud,
    color: '#00B4D8',
    items: ['Google Earth Engine', 'Sentinel Hub EO', 'MS Planetary Computer', 'EOS Platform', 'ArcGIS Online'] 
  },
  { 
    category: 'Programming & Tools', 
    icon: Code2,
    color: '#2F8F9D',
    items: ['Python', 'HTML', 'CSS', 'JavaScript', 'Git'] 
  },
  { 
    category: 'Languages', 
    icon: Languages,
    color: '#0F3557',
    items: ['English (C2)', 'Hindi (Native)', 'Urdu (Native)', 'French (A1)'] 
  },
]

const researchInterests = [
  'Glaciology', 
  'Cryosphere Science', 
  'Glacial Lake Outburst Floods (GLOF)', 
  'Remote Sensing', 
  'Earth Observation', 
  'Climate Change', 
  'Himalayan Hazards', 
  'Disaster Risk Reduction'
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative z-10 py-20 bg-[#E6EDF2]/30">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-[#2F8F9D] tracking-[0.3em] uppercase mb-3">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F3557] mb-6">
            The Journey
          </h2>
          <p className="text-[#64748b] text-lg sm:text-xl max-w-3xl mx-auto">
            From geography classrooms to high-altitude glaciers — tracing the path of a Cloud Geographer
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 gap-10 mb-20">
          {/* Profile Card */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-7 h-full rounded-2xl border border-[#D6ECFF] shadow-sm">
              <div className="relative mb-6 rounded-xl overflow-hidden group shadow-md">
                <img
                  src="/assets/img/profile.png"
                  alt="Suhail Khan — Cloud Geographer"
                  className="w-full aspect-[4/5] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3557]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg inline-flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#2F8F9D]" />
                    <span className="text-xs text-[#334155]">Saharanpur, India</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0F3557] mb-1">Suhail Khan</h3>
              <p className="text-sm text-[#2F8F9D] font-mono mb-5">Cloud Geographer &amp; Data Analyst</p>
              <div className="space-y-3 text-sm text-[#334155]">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-[#4FA3D9] flex-shrink-0" />
                  <span>B.Sc Geo-Informatics, Amity Univ · CGPA 9.26</span>
                </div>
                <div className="flex items-center gap-3">
                  <Compass className="w-4 h-4 text-[#00B4D8] flex-shrink-0" />
                  <span>PG Dip. Disaster Management, Univ of Ladakh</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-[#2F8F9D] flex-shrink-0" />
                  <span>Born: 15 Feb 2003 · Nationality: Indian</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Journey Cards */}
          <div className="lg:col-span-3 space-y-6">
            {[
              {
                icon: Snowflake,
                color: 'text-[#4FA3D9]',
                bg: 'bg-[#D6ECFF]/40',
                title: 'Cryosphere & GLOF Research',
                desc: 'Focused on high-altitude Glacial Lake Outburst Flood (GLOF) modeling in Ladakh, combining satellite remote sensing with hydrological analysis to assess glacial hazards in the Himalayas.',
                delay: 0.3,
              },
              {
                icon: Globe,
                color: 'text-[#00B4D8]',
                bg: 'bg-[#D6ECFF]/40',
                title: 'Earth System Science',
                desc: 'In-depth study of cryosphere dynamics, physical oceanography, atmospheric science, climate change, and geomorphology — bridging physical geography with cutting-edge geospatial technology.',
                delay: 0.4,
              },
              {
                icon: FlaskConical,
                color: 'text-[#2F8F9D]',
                bg: 'bg-[#D6ECFF]/40',
                title: 'Disaster Management & Community',
                desc: 'PG Diploma in Disaster Management with a focus on natural hazard assessment. Volunteer at Jax Foundation, working on girls\' child education and environmental issues.',
                delay: 0.5,
              },
            ].map(({ icon: Icon, color, bg, title, desc, delay }) => (
              <motion.div
                key={title}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay }}
                className="bg-white p-7 rounded-2xl border border-[#D6ECFF] shadow-sm hover:shadow-md transition-shadow flex gap-5"
              >
                <div className={`${bg} p-3.5 rounded-xl h-fit flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0F3557] mb-2">{title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ======================== TECHNICAL SKILLS ======================== */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-mono text-[#2F8F9D] tracking-[0.3em] uppercase mb-3">
              Tools &amp; Technologies
            </span>
            <h3 className="text-3xl font-bold text-[#0F3557]">
              Technical Skills
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {skills.map((skillGroup, i) => {
              const Icon = skillGroup.icon
              return (
                <motion.div
                  key={skillGroup.category}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                >
                  <div className="bg-white p-7 rounded-2xl border border-[#D6ECFF] shadow-sm hover:shadow-lg hover:border-[#4FA3D9]/30 transition-all h-full group">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#E6EDF2]">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${skillGroup.color}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: skillGroup.color }} />
                      </div>
                      <h4 className="text-base font-semibold text-[#0F3557]">
                        {skillGroup.category}
                      </h4>
                      <span className="ml-auto text-xs font-mono text-[#94a3b8] bg-[#F5FAFF] px-2 py-1 rounded-md">
                        {skillGroup.items.length}
                      </span>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2.5">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="text-[13px] px-3.5 py-2 rounded-lg bg-[#F5FAFF] text-[#334155] border border-[#E6EDF2] hover:border-[#4FA3D9]/50 hover:text-[#0F3557] hover:bg-[#D6ECFF]/30 hover:shadow-sm transition-all duration-300 cursor-default font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* ======================== RESEARCH INTERESTS ======================== */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-mono text-[#2F8F9D] tracking-[0.3em] uppercase mb-3">
              Focus Areas
            </span>
            <h3 className="text-3xl font-bold text-[#0F3557]">
              Research Interests
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {researchInterests.map((interest, i) => (
              <motion.span
                key={interest}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.05 }}
                className="text-sm px-5 py-2.5 rounded-full bg-white border border-[#D6ECFF] text-[#0F3557] hover:border-[#4FA3D9] hover:shadow-md hover:bg-[#F5FAFF] transition-all duration-300 cursor-default font-medium"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
