import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Globe, FlaskConical, MapPin, Compass, Snowflake, Monitor, Cloud, Code2, Languages } from 'lucide-react'

const skills = [
  { 
    category: 'GIS & Remote Sensing', 
    icon: Monitor,
    color: '#4FA3D9',
    items: [
      { name: 'QGIS', icon: '/assets/img/icons/qgis.png' },
      { name: 'ArcMap', icon: '/assets/img/icons/arcmap.png' },
      { name: 'ArcGIS Pro', icon: '/assets/img/ARC%20GIS%20PRO%20LOGO.jpg' },
      { name: 'ESA SNAP', icon: '/assets/img/icons/snap.png' },
      { name: 'ILWIS', icon: '/assets/img/ILWIS%20LOGO.jpg' },
      { name: 'Google Earth Pro', icon: '/assets/img/GOOGLE%20EARTH%20PRO%20LOGO.jpg' },
      { name: 'Google Earth Studio', icon: '/assets/img/GOOGLE%20EARTH%20STUDIO%20LOGO.jpg' },
      { name: 'ERDAS IMAGINE', icon: '/assets/img/icons/imagine.png' },
      { name: 'ENVI', icon: '/assets/img/ENVI%20LOGO.jpg' },
      { name: 'J-MARS', icon: '/assets/img/J%20MARS%20%20LOGO.png' },
      { name: 'SEA-DAS', icon: '/assets/img/SEADAS%20LOGO.jpg' },
      { name: 'PolSARpro', icon: '/assets/img/icons/polsarpro_ico.gif' },
    ]
  },
  { 
    category: 'Cloud Platforms', 
    icon: Cloud,
    color: '#00B4D8',
    items: [
      { name: 'Google Earth Engine', icon: '/assets/img/icons/gee.png' },
      { name: 'Sentinel Hub EO', icon: '/assets/img/SENTINEL%20HUB%20EOEO%20BROWSER%20LOGO.png' },
      { name: 'MS Planetary Computer', icon: '/assets/img/icons/mspc.png' },
      { name: 'ArcGIS Online', icon: '/assets/img/ARC%20GIS%20ONLINE%20LOGO.jpg' },
      { name: 'MATLAB', icon: '/assets/img/icons/matlab.png' },
    ]
  },
  { 
    category: 'Programming & Tools', 
    icon: Code2,
    color: '#2F8F9D',
    items: [
      { name: 'Python', icon: '/assets/img/icons/python.png' },
      { name: 'JavaScript', icon: '/assets/img/icons/js.png' },
      { name: 'HTML', icon: '/assets/img/HTML%20LOGO.png' },
      { name: 'CSS', icon: '/assets/img/CSS%20LOGO.jpg' },
      { name: 'R Language', icon: '/assets/img/R%20LANGUGE%20LOGO.png' },
      { name: 'Git', icon: '/assets/img/icons/git1.png' },
    ]
  },
  { 
    category: 'Languages', 
    icon: Languages,
    color: '#0F3557',
    items: [
      { name: 'English (C2)', flag: '🇬🇧' },
      { name: 'Hindi (Native)', flag: '🇮🇳' },
      { name: 'Urdu (Native)', flag: '🇵🇰' },
      { name: 'French (A1)', flag: '🇫🇷' },
    ]
  },
]

const researchInterests = [
  { name: 'Glaciology', icon: '🏔️' },
  { name: 'Cryosphere Science', icon: '❄️' },
  { name: 'Glacial Lake Outburst Floods (GLOF)', icon: '🌊' },
  { name: 'Remote Sensing', icon: '🛰️' },
  { name: 'Earth Observation', icon: '🌍' },
  { name: 'Climate Change', icon: '🌡️' },
  { name: 'Himalayan Hazards', icon: '⛰️' },
  { name: 'Disaster Risk Reduction', icon: '🛡️' },
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
          className="text-center mb-14"
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

        {/* ====== CENTERED PROFILE CARD ====== */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14"
        >
          <div className="bg-white rounded-2xl border border-[#D6ECFF] shadow-sm p-10 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              {/* Profile Image — truly centered */}
              <div className="relative mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-[#D6ECFF] group">
                  <img
                    src="/assets/img/profile.png"
                    alt="Suhail Khan — Cloud Geographer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full border border-[#D6ECFF] shadow-sm flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#2F8F9D]" />
                  <span className="text-[11px] text-[#334155] font-medium whitespace-nowrap">Saharanpur, India</span>
                </div>
              </div>

              {/* Name & Title */}
              <h3 className="text-2xl font-bold text-[#0F3557] mb-1">Suhail Khan</h3>
              <p className="text-base text-[#2F8F9D] font-mono mb-6">Cloud Geographer &amp; Data Analyst</p>

              {/* Info Chips */}
              <div className="flex flex-wrap justify-center gap-3">
                <div className="flex items-center gap-2 bg-[#F5FAFF] px-4 py-2.5 rounded-xl border border-[#E6EDF2]">
                  <GraduationCap className="w-4 h-4 text-[#4FA3D9]" />
                  <span className="text-sm text-[#334155]">B.Sc Geo-Informatics · CGPA 9.26</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F5FAFF] px-4 py-2.5 rounded-xl border border-[#E6EDF2]">
                  <Compass className="w-4 h-4 text-[#00B4D8]" />
                  <span className="text-sm text-[#334155]">PG Dip. Disaster Management</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F5FAFF] px-4 py-2.5 rounded-xl border border-[#E6EDF2]">
                  <Globe className="w-4 h-4 text-[#2F8F9D]" />
                  <span className="text-sm text-[#334155]">Born: 15 Feb 2003 · Indian</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ====== JOURNEY CARDS — 3-COLUMN GRID ====== */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
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
              className="flex"
            >
              <div className="bg-white p-7 rounded-2xl border border-[#D6ECFF] shadow-sm hover:shadow-md transition-all flex flex-col text-center h-full">
                <div className={`${bg} p-4 rounded-xl w-fit mx-auto mb-5`}>
                  <Icon className={`w-7 h-7 ${color}`} />
                </div>
                <h3 className="text-lg font-bold text-[#0F3557] mb-3">{title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ======================== TECHNICAL SKILLS ======================== */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-mono text-[#2F8F9D] tracking-[0.3em] uppercase mb-3">
              Tools &amp; Technologies
            </span>
            <h3 className="text-3xl font-bold text-[#0F3557]">
              Technical Skills
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                  <div className="bg-white p-8 rounded-2xl border border-[#D6ECFF] shadow-sm hover:shadow-lg hover:border-[#4FA3D9]/30 transition-all h-full group">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[#E6EDF2]">
                      <div 
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${skillGroup.color}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: skillGroup.color }} />
                      </div>
                      <h4 className="text-lg font-semibold text-[#0F3557]">
                        {skillGroup.category}
                      </h4>
                      <span className="ml-auto text-xs font-mono text-[#94a3b8] bg-[#F5FAFF] px-2.5 py-1 rounded-lg border border-[#E6EDF2]">
                        {skillGroup.items.length}
                      </span>
                    </div>

                    {/* Skill Tags with real logos — BIGGER */}
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-2.5 text-sm px-4 py-3 rounded-xl bg-[#F5FAFF] text-[#334155] border border-[#E6EDF2] hover:border-[#4FA3D9]/50 hover:text-[#0F3557] hover:bg-[#D6ECFF]/30 hover:shadow-sm transition-all duration-300 cursor-default font-medium"
                        >
                          {skill.icon ? (
                            <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain rounded-sm" />
                          ) : (
                            <span className="text-lg">{skill.flag}</span>
                          )}
                          {skill.name}
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
                key={interest.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.05 }}
                className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full bg-white border border-[#D6ECFF] text-[#0F3557] hover:border-[#4FA3D9] hover:shadow-md hover:bg-[#F5FAFF] transition-all duration-300 cursor-default font-medium"
              >
                <span>{interest.icon}</span>
                {interest.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
