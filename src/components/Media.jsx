import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/* 11 images total — IMAGE 4 and IMAGE 6 don't exist on disk.
   Grouped by similar aspect ratio so each row looks balanced. */
const mediaItems = [
  /* ROW 1 — landscape & field photos */
  { url: '/assets/img/IMAGE%20-1%20.png' },
  { url: '/assets/img/IMAGE%20-%202.png' },
  { url: '/assets/img/IMAGE%20-%203.png' },
  /* ROW 2 — expeditions */
  { url: '/assets/img/IMAGE%20-5.png' },
  { url: '/assets/img/IMAGE%20-7.png' },
  { url: '/assets/img/IMAGE%20-8.png' },
  /* ROW 3 — mountain & nature */
  { url: '/assets/img/IMAGE%20-9.png' },
  { url: '/assets/img/IMAGE%20-10.png' },
  { url: '/assets/img/IMAGE%20-11.png' },
  /* ROW 4 — dev & hacker */
  { url: '/assets/img/IMAGE%2012.png' },
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
      <div className="block group cursor-pointer overflow-hidden rounded-xl border border-[#D6ECFF] bg-white shadow-sm hover:shadow-lg transition-shadow">
        <img
          src={item.url}
          alt={`Gallery image ${index + 1}`}
          className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
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
    <section id="media" className="relative z-10 py-16 bg-[#F5FAFF]">
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

        {/* Image Grid — no cropping, full images */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {mediaItems.map((item, index) => (
            <MediaCard key={item.url} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
