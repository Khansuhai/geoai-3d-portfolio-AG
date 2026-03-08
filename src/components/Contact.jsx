import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, Instagram, ExternalLink } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/Khansuhai', label: 'GitHub', color: 'hover:text-text-primary' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/suhailkhan143/', label: 'LinkedIn', color: 'hover:text-[#0077b5]' },
  { icon: Instagram, href: 'https://www.instagram.com/suhail.tiff/', label: 'Instagram', color: 'hover:text-warm-accent' },
  { icon: Twitter, href: 'https://twitter.com/suhailk49329508', label: 'Twitter / X', color: 'hover:text-glacier' },
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100010547910065', label: 'Facebook', color: 'hover:text-[#1877f2]' },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative z-10 py-8">
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
            // Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Let's Connect
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Open to research collaborations, thesis discussions, and geospatial projects
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'Ksuhail55555@gmail.com',
                href: 'mailto:Ksuhail55555@gmail.com',
                color: 'text-glacier',
                bgColor: 'bg-glacier/10',
              },
              {
                icon: Phone,
                label: 'Phone',
                value: '+91 9084407350',
                href: 'tel:+919084407350',
                color: 'text-cyan-neon',
                bgColor: 'bg-cyan-neon/10',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Saharanpur, UP, India',
                href: null,
                color: 'text-laser',
                bgColor: 'bg-laser/10',
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                {item.href ? (
                  <a href={item.href} className="block group">
                    <div className="glass-card p-5 text-center h-full">
                      <div className={`${item.bgColor} p-3 rounded-xl w-fit mx-auto mb-3`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <p className="text-xs text-text-muted mb-1">{item.label}</p>
                      <p className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="glass-card p-5 text-center h-full">
                    <div className={`${item.bgColor} p-3 rounded-xl w-fit mx-auto mb-3`}>
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <p className="text-xs text-text-muted mb-1">{item.label}</p>
                    <p className="text-sm font-medium text-text-secondary">{item.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-6 text-center"
          >
            <p className="text-xs font-mono text-text-muted tracking-wider uppercase mb-5">
              Connect on Social
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-2 glass px-4 py-2.5 rounded-xl text-text-muted ${link.color} transition-all duration-300 hover:-translate-y-0.5`}
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                  <span className="text-sm font-medium hidden sm:inline">{link.label}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-space-600/30 text-center"
        >
          <p className="text-xs text-text-muted">
            <span className="font-mono">©</span> {new Date().getFullYear()} Suhail Khan
            <span className="mx-2 text-space-500">•</span>
            <span className="gradient-text-warm font-medium">Cloud Geographer &amp; GeoAI Specialist</span>
          </p>
          <p className="text-[10px] text-text-muted/50 mt-2 font-mono">
            Built with React · Three.js · Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  )
}
