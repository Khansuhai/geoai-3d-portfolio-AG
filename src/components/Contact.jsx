import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, Instagram, ExternalLink, Globe } from 'lucide-react'

const socialLinks = [
  { icon: Globe, href: 'https://khansuhai.github.io', label: 'Website', color: 'hover:text-[#4FA3D9]' },
  { icon: Github, href: 'https://github.com/Khansuhai', label: 'GitHub', color: 'hover:text-[#0F3557]' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/suhailkhan143/', label: 'LinkedIn', color: 'hover:text-[#00B4D8]' },
  { icon: Instagram, href: 'https://www.instagram.com/suhail.tiff/', label: 'Instagram', color: 'hover:text-[#2F8F9D]' },
  { icon: Twitter, href: 'https://twitter.com/suhailk49329508', label: 'Twitter / X', color: 'hover:text-[#4FA3D9]' },
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100010547910065', label: 'Facebook', color: 'hover:text-[#0F3557]' },
]

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Ksuhail55555@gmail.com',
    href: 'mailto:Ksuhail55555@gmail.com',
    color: 'text-[#4FA3D9]',
    bgColor: 'bg-[#4FA3D9]/15',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9084407350\n+91 9906378305',
    href: 'tel:+919084407350',
    color: 'text-[#00B4D8]',
    bgColor: 'bg-[#00B4D8]/15',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'H-205 Village Harpal\nSaharanpur – 247001, India',
    href: null,
    color: 'text-[#4FA3D9]',
    bgColor: 'bg-[#4FA3D9]/15',
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative z-10 py-24 bg-[#0F3557]">
      <div className="section-container" ref={ref}>

        {/* Section Header — centered */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-[#4FA3D9] tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-5">
            Let's Connect
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto text-center">
            Open to research collaborations, thesis discussions, and geospatial projects
          </p>
        </motion.div>

        {/* Contact Cards — 3 columns, equal height, fully centered */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {contactItems.map((item, index) => {
            const CardWrapper = item.href ? 'a' : 'div'
            const wrapperProps = item.href ? { href: item.href } : {}
            return (
              <motion.div
                key={item.label}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.12 }}
              >
                <CardWrapper
                  {...wrapperProps}
                  className="flex flex-col items-center justify-center text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-[#4FA3D9]/40 hover:bg-white/15 transition-all duration-300 h-full min-h-[180px] group"
                >
                  <div className={`${item.bgColor} p-4 rounded-xl mb-5`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <p className="text-xs font-mono text-[#94a3b8] tracking-widest uppercase mb-3">
                    {item.label}
                  </p>
                  <p className="text-base font-medium text-white/80 group-hover:text-white transition-colors leading-relaxed whitespace-pre-line">
                    {item.value}
                  </p>
                </CardWrapper>
              </motion.div>
            )
          })}
        </div>

        {/* Social Links — centered, bigger buttons */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="bg-white/5 backdrop-blur-md px-8 py-8 text-center rounded-2xl border border-white/10"
        >
          <p className="text-xs font-mono text-[#94a3b8] tracking-[0.25em] uppercase mb-6">
            Connect on Social
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-2.5 bg-white/10 px-5 py-3 rounded-xl text-[#94a3b8] ${link.color} transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 text-sm font-medium`}
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-sm text-[#94a3b8]">
            © {new Date().getFullYear()} Suhail Khan
            <span className="mx-2 text-white/20">·</span>
            <span className="text-[#4FA3D9] font-medium">Cloud Geographer &amp; GeoAI Specialist</span>
          </p>
          <p className="text-xs text-[#64748b] mt-2 font-mono">
            Built with React · Three.js · Framer Motion
          </p>
        </motion.div>

      </div>
    </section>
  )
}
