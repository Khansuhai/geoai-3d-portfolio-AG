import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Image as ImageIcon } from 'lucide-react'

const mediaItems = [
  { url: '/assets/img/IMAGE%20-1%20.png' },
  { url: '/assets/img/IMAGE%20-%202.png' },
  { url: '/assets/img/IMAGE%20-%203.png' },
  { url: '/assets/img/IMAGE%20%20-%204.png' },
  { url: '/assets/img/IMAGE%20-5.png' },
  { url: '/assets/img/IMAGE%20-7.png' },
  { url: '/assets/img/IMAGE%20-8.png' },
  { url: '/assets/img/IMAGE%20-9.png' },
  { url: '/assets/img/IMAGE%20-10.png' },
  { url: '/assets/img/IMAGE%20-11.png' },
  { url: '/assets/img/hacker pic.jpg' },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

function MediaCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
      className="masonry-item mb-6"
    >
      <div className="block group cursor-pointer overflow-hidden rounded-xl border border-glacier/20 glass-card">
        <img
          src={item.url}
          alt={`Gallery image ${index + 1}`}
          className="w-full h-auto block transition-transform duration-700 group-hover:scale-105 filter contrast-[1.05] saturate-[1.05]"
          loading="lazy"
        />
      </div>
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
          <span className="inline-block text-xs font-mono text-cyan-neon tracking-[0.3em] uppercase mb-4">
            // Fieldwork &amp; Research Gallery
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="gradient-text">Visual Chronicles</span>
          </h2>
          <p className="text-text-secondary text-lg sm:text-xl max-w-3xl mx-auto">
            Glimpses into high-altitude expeditions, data capturing, and GeoAI development
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {mediaItems.map((item, index) => (
            <MediaCard key={item.url} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
