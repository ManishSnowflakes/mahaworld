'use client'

import { motion } from 'framer-motion'
import { Building, Cpu, ShoppingBag, Shield, HeartPulse, Newspaper, BookOpen, Globe } from 'lucide-react'

const clients = [
  { name: 'Acme Corp', icon: Building, color: 'bg-blue-100 text-blue-600' },
  { name: 'TechCorp', icon: Cpu, color: 'bg-indigo-100 text-indigo-600' },
  { name: 'Global Retail', icon: ShoppingBag, color: 'bg-green-100 text-green-600' },
  { name: 'SecureBank', icon: Shield, color: 'bg-teal-100 text-teal-600' },
  { name: 'HealthTech', icon: HeartPulse, color: 'bg-rose-100 text-rose-600' },
]

const awards = [
  { name: 'ISO 9001 Certified', icon: '🏅' },
  { name: 'Top Software Company 2024', icon: '🌟' },
  { name: 'Best Innovation Award', icon: '🚀' },
]

const press = [
  { name: 'TechCrunch', icon: Newspaper, color: 'bg-emerald-100 text-emerald-600' },
  { name: 'Forbes', icon: BookOpen, color: 'bg-slate-100 text-slate-600' },
  { name: 'Wired', icon: Globe, color: 'bg-violet-100 text-violet-600' },
]

const guarantees = [
  { icon: '✅', label: 'Satisfaction Guaranteed' },
  { icon: '🕒', label: '24/7 Support' },
  { icon: '🔒', label: '100% Secure' },
]

const TrustBar = () => {
  return (
    <section className="relative py-10 bg-gradient-to-b from-blue-50 to-white border-b border-blue-100">
      {/* SVG Wave Transition */}
      <div className="absolute -top-8 left-0 w-full overflow-hidden leading-none pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="#fff" />
        </svg>
      </div>
      <div className="container-custom flex flex-col gap-8 relative z-10">
        {/* Client Logos */}
        <div className="flex flex-wrap md:flex-row flex-col justify-center items-center gap-8">
          {clients.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
              aria-label={`Client: ${client.name}`}
            >
              <div className={`w-14 h-14 rounded-full ${client.color} flex items-center justify-center shadow`}>
                <client.icon className="w-8 h-8" />
              </div>
              <span className="mt-2 text-xs font-semibold text-gray-700">{client.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Awards/Certifications */}
        <div className="flex flex-wrap md:flex-row flex-col justify-center items-center gap-6">
          {awards.map((award, idx) => (
            <div key={award.name} className="flex items-center space-x-2 bg-white border border-blue-100 rounded-full px-4 py-2 shadow-sm">
              <span className="text-xl" aria-hidden="true">{award.icon}</span>
              <span className="text-sm font-semibold text-gray-700">{award.name}</span>
            </div>
          ))}
        </div>

        {/* Press Mentions */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-gray-500 text-sm mb-2">As seen in</span>
        <div className="flex flex-wrap md:flex-row flex-col justify-center items-center gap-8">
          {press.map((media, idx) => (
              <motion.div
              key={media.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
                className="flex flex-col items-center"
              aria-label={`Press: ${media.name}`}
            >
                <div className={`w-14 h-14 rounded-full ${media.color} flex items-center justify-center shadow`}>
                  <media.icon className="w-8 h-8" />
                </div>
                <span className="mt-2 text-xs font-semibold text-gray-700">{media.name}</span>
              </motion.div>
          ))}
          </div>
        </div>

        {/* Guarantees/Promises */}
        <div className="flex flex-wrap md:flex-row flex-col justify-center items-center gap-6 mt-2">
          {guarantees.map((g, idx) => (
            <div key={g.label} className="flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2">
              <span className="text-xl" aria-hidden="true">{g.icon}</span>
              <span className="text-sm font-semibold text-blue-700">{g.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar 