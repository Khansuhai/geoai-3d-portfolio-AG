import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Globe, FlaskConical, MapPin, Compass, Snowflake } from 'lucide-react'

const skills = [
  { category: 'Programming', items: ['Python', 'MATLAB', 'R', 'JavaScript', 'Google Earth Engine'] },
  { category: 'GIS & RS Software', items: ['QGIS', 'ArcGIS', 'ERDAS IMAGINE', 'ENVI', 'ESA-SNAP', 'PolSARpro'] },
  { category: 'Cloud Platforms', items: ['Google Earth Engine', 'HEC-RAS'] },
  { category: 'Research Areas', items: ['Cryosphere', 'GLOF Modeling', 'Remote Sensing', 'Climate Science', 'Disaster Management'] },
]

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
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            The Journey
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
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
              <div className="relative mb-6 rounded-xl overflow-hidden group">
                <img
                  src="/assets/img/profile.png"
                  alt="Suhail Khan — Cloud Geographer"
                  className="w-full aspect-[4/5] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass px-3 py-2 rounded-lg inline-flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-glacier" />
                    <span className="text-xs text-text-secondary">Saharanpur, India</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-1">Suhail Khan</h3>
              <p className="text-sm text-glacier font-mono mb-4">B.Sc. (Hons.) Geography</p>
              <div className="space-y-2.5 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-laser flex-shrink-0" />
                  <span>Amity University, Noida · CGPA 9.22/10</span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-cyan-neon flex-shrink-0" />
                  <span>PG Diploma in Disaster Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-aurora flex-shrink-0" />
                  <span>M.Sc. Earth Observation &amp; GeoAI (pursuing)</span>
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
        >
          <h3 className="text-xl font-bold text-text-primary mb-6 text-center">
            <span className="gradient-text-warm">Technical Arsenal</span>
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
                      className="text-xs px-2.5 py-1.5 rounded-md bg-space-600/50 text-text-secondary border border-space-500/30 hover:border-glacier/30 hover:text-glacier transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
