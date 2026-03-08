import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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
    >
      <div className="block group cursor-pointer overflow-hidden rounded-xl border border-[#D6ECFF] bg-white shadow-sm hover:shadow-lg transition-shadow aspect-[4/3]">
        <img
          src={item.url}
          alt={`Gallery image ${index + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
    <section id="media" className="relative z-10 py-8 bg-[#F5FAFF]">
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
            Fieldwork &amp; Research Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#0F3557]">
            Visual Chronicles
          </h2>
          <p className="text-[#64748b] text-lg sm:text-xl max-w-3xl mx-auto">
            Glimpses into high-altitude expeditions, data capturing, and GeoAI development
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <MediaCard key={item.url} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
