import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Globe, FlaskConical, MapPin, Compass, Snowflake } from 'lucide-react'

const skills = [
  { category: 'GIS & RS Software', items: ['QGIS', 'ArcMap', 'ArcGIS Pro', 'ESA SNAP', 'ILWIS', 'Google Earth Pro', 'Google Earth Studio', 'J-MARS', 'SEA-DAS'] },
  { category: 'Cloud Platforms', items: ['Google Earth Engine', 'Sentinel Hub EO', 'MS Planetary Computer', 'EOS Platform', 'ArcGIS Online'] },
  { category: 'Programming & Tools', items: ['Python', 'HTML', 'CSS', 'JavaScript', 'Git'] },
  { category: 'Languages', items: ['English (C2)', 'Hindi (Native)', 'Urdu (Native)', 'French (A1)'] },
]

const researchInterests = ['Glaciology', 'Cryosphere Science', 'Glacial Lake Outburst Floods (GLOF)', 'Remote Sensing', 'Earth Observation', 'Climate Change', 'Himalayan Hazards', 'Disaster Risk Reduction']


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative z-10 py-8">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-glacier tracking-[0.3em] uppercase mb-3">
            // About Me
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold gradient-text mb-6">
            The Journey
          </h2>
          <p className="text-text-secondary text-lg sm:text-xl max-w-3xl mx-auto">
            From geography classrooms to high-altitude glaciers — tracing the path of a Cloud Geographer
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Profile Card */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-6 h-full">
              <div className="relative mb-6 rounded-xl overflow-hidden group shadow-lg shadow-cyan-neon/10">
                <img
                  src="/assets/img/profile.png"
                  alt="Suhail Khan — Cloud Geographer"
                  className="w-full aspect-[4/5] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105 filter contrast-[1.1] saturate-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-space-900/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass px-3 py-2 rounded-lg inline-flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-glacier" />
                    <span className="text-xs text-text-secondary">Saharanpur, India</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-1">Suhail Khan</h3>
              <p className="text-sm text-glacier font-mono mb-4">Cloud Geographer &amp; Data Analyst</p>
              <div className="space-y-2.5 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-laser flex-shrink-0" />
                  <span>B.Sc Geo-Informatics, Amity Univ · CGPA 9.26</span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-cyan-neon flex-shrink-0" />
                  <span>PG Dip. Disaster Management, Univ of Ladakh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-aurora flex-shrink-0" />
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
                color: 'text-glacier',
                bg: 'bg-glacier/10',
                title: 'Cryosphere & GLOF Research',
                desc: 'Focused on high-altitude Glacial Lake Outburst Flood (GLOF) modeling in Ladakh, combining satellite remote sensing with hydrological analysis to assess glacial hazards in the Himalayas.',
                delay: 0.3,
              },
              {
                icon: Globe,
                color: 'text-cyan-neon',
                bg: 'bg-cyan-neon/10',
                title: 'Earth System Science',
                desc: 'In-depth study of cryosphere dynamics, physical oceanography, atmospheric science, climate change, and geomorphology — bridging physical geography with cutting-edge geospatial technology.',
                delay: 0.4,
              },
              {
                icon: FlaskConical,
                color: 'text-laser',
                bg: 'bg-laser/10',
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
                className="glass-card p-6 flex gap-5"
              >
                <div className={`${bg} p-3 rounded-xl h-fit flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            <span className="gradient-text">Technical Arsenal</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skillGroup, i) => (
              <div key={skillGroup.category} className="glass-card p-5">
                <h4 className="text-xs font-mono text-glacier tracking-wider uppercase mb-3">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-2 rounded-md bg-space-600/50 text-text-secondary border border-space-500/30 hover:border-glacier/30 hover:text-glacier hover:bg-space-600/80 transition-all duration-300 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Research Interests */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-bold text-text-primary mb-6 text-center">
            <span className="gradient-text">Research Interests</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {researchInterests.map((interest) => (
              <span
                key={interest}
                className="text-sm px-4 py-2 rounded-full glass border border-cyan-neon/20 text-text-primary hover:border-cyan-neon/60 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300 cursor-default"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
