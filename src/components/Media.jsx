import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Instagram, Play, Image } from 'lucide-react'

const mediaItems = [
  {
    url: 'https://www.instagram.com/p/DAEnGruTXv2/?img_index=1',
    type: 'image',
    title: 'Glacier Fieldwork Documentation',
    description: 'High-altitude field research and glacier monitoring',
    gradient: 'from-glacier/30 to-cyan-neon/20',
  },
  {
    url: 'https://www.instagram.com/p/DAEnGruTXv2/?img_index=3',
    type: 'image',
    title: 'Remote Sensing Data Visualization',
    description: 'Satellite imagery analysis & geospatial mapping',
    gradient: 'from-laser/30 to-warm-accent/20',
  },
  {
    url: 'https://www.instagram.com/p/DPrw3e7E3sf/?img_index=1',
    type: 'image',
    title: 'GeoAI Research Insights',
    description: 'Earth observation and geospatial AI applications',
    gradient: 'from-cyan-neon/30 to-aurora/20',
  },
  {
    url: 'https://www.instagram.com/p/DPrw3e7E3sf/?img_index=3',
    type: 'image',
    title: 'Cryosphere Monitoring',
    description: 'Tracking glacial retreat and ice dynamics',
    gradient: 'from-glacier/20 to-laser/30',
  },
  {
    url: 'https://www.instagram.com/p/DKo3yzPtwkK/?img_index=1',
    type: 'image',
    title: 'Topographic Analysis',
    description: 'DEM-based terrain modeling and analysis',
    gradient: 'from-aurora/20 to-glacier/30',
  },
  {
    url: 'https://www.instagram.com/p/DQrqeRIE3qY/?img_index=1',
    type: 'image',
    title: 'Climate Change Research',
    description: 'Environmental monitoring and impact assessment',
    gradient: 'from-warm-accent/20 to-laser/30',
  },
  {
    url: 'https://www.instagram.com/p/DQrqeRIE3qY/?img_index=2',
    type: 'image',
    title: 'Satellite Data Processing',
    description: 'Multi-spectral satellite imagery workflow',
    gradient: 'from-laser/20 to-cyan-neon/30',
  },
  {
    url: 'https://www.instagram.com/p/DK1OQM5vTJv/?img_index=1',
    type: 'image',
    title: 'GIS Mapping Projects',
    description: 'Geospatial information system cartography',
    gradient: 'from-glacier/30 to-aurora/20',
  },
  {
    url: 'https://www.instagram.com/p/DK1OQM5vTJv/?img_index=3',
    type: 'image',
    title: 'Earth Observation Gallery',
    description: 'Capturing Earth from satellite perspective',
    gradient: 'from-cyan-neon/20 to-glacier/30',
  },
  {
    url: 'https://www.instagram.com/reel/DM3onXIzluJ/',
    type: 'reel',
    title: 'Field Research Reel',
    description: 'Behind the scenes of glacier field expeditions',
    gradient: 'from-warm-accent/30 to-laser/20',
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

function MediaCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const isReel = item.type === 'reel'
  const heights = ['h-52', 'h-64', 'h-56', 'h-60', 'h-48', 'h-72', 'h-56', 'h-64', 'h-52', 'h-68']

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
      className="masonry-item"
    >
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className={`glass-card overflow-hidden relative ${heights[index % heights.length]}`}>
          {/* Gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />

          {/* Content pattern overlay */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(56,189,248,0.3) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(167,139,250,0.3) 0%, transparent 50%)`,
            }}
          />

          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            {isReel ? (
              <div className="w-16 h-16 rounded-full bg-space-900/60 backdrop-blur-md flex items-center justify-center border border-warm-accent/30 group-hover:scale-110 group-hover:border-warm-accent/50 transition-all duration-500">
                <Play className="w-7 h-7 text-warm-accent ml-1" />
              </div>
            ) : (
              <div className="w-14 h-14 rounded-xl bg-space-900/40 backdrop-blur-md flex items-center justify-center border border-glacier/20 group-hover:scale-110 group-hover:border-glacier/40 transition-all duration-500 opacity-60 group-hover:opacity-100">
                <Image className="w-6 h-6 text-glacier" />
              </div>
            )}
          </div>

          {/* Bottom info */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-space-900/90 to-transparent">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-0.5 line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-text-muted line-clamp-1">{item.description}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-text-muted flex-shrink-0 group-hover:text-glacier transition-colors mt-0.5" />
            </div>
          </div>

          {/* Instagram badge */}
          <div className="absolute top-3 right-3">
            <div className="glass px-2 py-1 rounded-md flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
              <Instagram className="w-3 h-3 text-warm-accent" />
              <span className="text-[10px] font-mono text-text-muted">
                {isReel ? 'Reel' : 'Post'}
              </span>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  )
}

export default function Media() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="media" className="relative z-10 py-8">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-warm-accent tracking-[0.3em] uppercase mb-3">
            // Media Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Visual Chronicles</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Field expeditions, research visualizations, and GeoAI insights — captured and shared
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {mediaItems.map((item, index) => (
            <MediaCard key={item.url} item={item} index={index} />
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/suhail.tiff/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full hover:border-warm-accent/30 transition-all group"
          >
            <Instagram className="w-4 h-4 text-warm-accent group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
              Follow @suhail.tiff
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
