import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, CheckCircle2 } from 'lucide-react'

const certificationsData = [
  {
    organization: 'NASA ARSET',
    domain: 'nasa.gov',
    certs: [
      'Satellite Observations for Analyzing Natural Hazards on Small Island Nations',
      'Monitoring Coastal & Estuarine Water Quality: Transitioning From MODIS to VIIRS',
      'Satellite Remote Sensing Measuring Urban Heat Islands and Constructing Heat Vulnerability Indices',
      'Monitoring Aquatic Vegetation With Remote Sensing',
      'Connecting Citizen Science With Remote Sensing',
      'Assessing the Impacts of Fires on Watershed Health',
      'Monitoring Water Quality of Inland Lakes Using Remote Sensing',
      'Drought Monitoring, Prediction, and Projection using NASA Earth System Data'
    ]
  },
  {
    organization: 'ESRI',
    domain: 'esri.com',
    certs: [
      'Going Places With Spatial Analysis',
      'Cartography',
      'DO-IT-Yourself Geo Apps',
      'Spatial Data Science: The New Frontier in Analytics',
      'Imagery In Action'
    ]
  },
  {
    organization: 'Geo-University',
    domain: 'geo.university',
    certs: [
      'Hyperspectral Thermal Image Unmixing',
      'Introduction to LaTex',
      'Tutorial on CloudSigma Online Platform',
      'Remote Sensing & Satellite Image Processing with the EOS Platform',
      'Sentinel Hub Webinar Series',
      'Introduction to Cloudeo\u2019s Geospatial Solutions',
      'Orthorectification Of Aerial Imagery Through OrthoPhoto.io',
      'Introduction to Remote Sensing',
      'Coordinate Reference System, Projection & Spatial Data Representation',
      'Digital Image Processing With OpenCV in Python',
      'Learn the FOSS4g Stack: QGIS 3 Desktop'
    ]
  },
  {
    organization: 'Geological Survey of India (GSI)',
    domain: 'gsi.gov.in',
    certs: [
      'Fundamental of GIS',
      'Application of Remote Sensing in Mineral Exploration',
      'Fundamental of Mapping Techniques in Tertiary Terrain'
    ]
  },
  {
    organization: 'ISRO',
    domain: 'isro.gov.in',
    certs: [
      'Applications of Satellite Altimetry for Inland Water Bodies'
    ]
  },
  {
    organization: 'IIT Roorkee',
    domain: 'iitr.ac.in',
    certs: [
      'Global Navigation Satellite System & Application'
    ]
  },
  {
    organization: 'Copernicus & Mercator Ocean',
    domain: 'copernicus.eu',
    certs: [
      'The Workshop of "WEkEO for Forest Monitoring"'
    ]
  },
  {
    organization: 'APECS & IPRN',
    domain: 'apecs.is',
    certs: [
      'Impact of Climate Change on Polar Regions'
    ]
  },
  {
    organization: 'EU / DLR / Europlanet',
    domain: 'europlanet-society.org',
    certs: [
      'GMAP Planetary Geological Mapping Winter School (2023)'
    ]
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Awards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="awards" className="relative z-10 py-8 bg-[#E6EDF2]/30">
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
            Professional Development
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#0F3557]">
            Certifications
          </h2>
          <p className="text-[#64748b] text-lg sm:text-xl max-w-3xl mx-auto">
            Specialized training and courses completed across leading geospatial organizations.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificationsData.map((group, index) => (
            <motion.div
              key={group.organization}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }}
              className="flex"
            >
              <div className="bg-white p-6 border border-[#D6ECFF] rounded-2xl shadow-sm hover:shadow-lg hover:border-[#4FA3D9]/40 transition-all w-full flex flex-col group/card h-full">
                {/* Organization Header */}
                <div className="flex items-center gap-4 mb-5 pb-5 border-b border-[#E6EDF2]">
                 <div className="w-12 h-12 rounded-lg bg-[#F5FAFF] flex items-center justify-center overflow-hidden flex-shrink-0 border border-[#D6ECFF]">
                    <img 
                      src={`https://logo.clearbit.com/${group.domain}`} 
                      alt={`${group.organization} logo`}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <Award className="w-6 h-6 text-[#4FA3D9] hidden" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F3557] leading-tight">
                    {group.organization}
                  </h3>
                </div>

                {/* Certificates List */}
                <div className="flex-grow">
                  <ul className="space-y-3">
                    {group.certs.map((cert, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00B4D8] mt-0.5 flex-shrink-0 opacity-70 group-hover/card:opacity-100 transition-opacity" />
                        <span className="text-[13px] leading-relaxed text-[#334155] group-hover/card:text-[#0F3557] transition-colors">
                          {cert}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
