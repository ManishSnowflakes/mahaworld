'use client'

import { motion } from 'framer-motion'
import { BookOpen, Lightbulb, Brain, Code2, Users } from 'lucide-react'

  const services = [
    {
    title: 'Software & IT Product Development',
    icon: Code2,
    color: 'bg-green-100 text-green-600',
    description: 'Full-cycle software and IT product development for official clients. Web, mobile, and cloud solutions with robust architecture and agile delivery.'
  },
  {
    title: 'Research & Publication',
    icon: BookOpen,
    color: 'bg-blue-100 text-blue-600',
    description: 'Full research project guidance for B.Tech, M.Tech, and PhD students. From ideation to research paper publishing in top journals, including writing, editing, and compliance support.'
  },
  {
    title: 'Innovation & Patent Services',
    icon: Lightbulb,
    color: 'bg-yellow-100 text-yellow-600',
    description: 'Transform your ideas into patents. We offer innovation consulting, patent drafting, filing, and commercialization support for students and professionals.'
  },
  {
    title: 'AI & ML Solutions',
    icon: Brain,
    color: 'bg-purple-100 text-purple-600',
    description: 'Custom AI/ML model development, AI agents, automation, and advanced analytics for research and business. NLP, computer vision, and more.'
  },
 
  {
    title: 'Internship & Talent Development',
    icon: Users,
    color: 'bg-pink-100 text-pink-600',
    description: 'Industry-focused internships for B.Tech, M.Tech, and PhD students. Live projects, mentorship, certification, and placement assistance.'
  }
]

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Major Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering students, researchers, and businesses with world-class research, innovation, AI, software development, and career-building opportunities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.03, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center border border-gray-100 hover:border-blue-200"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md text-3xl ${service.color}`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {service.description}
              </p>
              {service.title === 'Research & Publication' ? (
                <a href="/services/research" className="mt-auto px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow hover:from-blue-600 hover:to-blue-700 transition-all duration-200">
                  Learn More
                </a>
              ) : service.title === 'Innovation & Patent Services' ? (
                <a href="/services/innovation" className="mt-auto px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow hover:from-blue-600 hover:to-blue-700 transition-all duration-200">
                  Learn More
                </a>
              ) : service.title === 'AI & ML Solutions' ? (
                <a href="/services/ai-ml" className="mt-auto px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow hover:from-blue-600 hover:to-blue-700 transition-all duration-200">
                  Learn More
                </a>
              ) : service.title === 'Software & IT Product Development' ? (
                <a href="/services/software-development" className="mt-auto px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow hover:from-blue-600 hover:to-blue-700 transition-all duration-200">
                  Learn More
                </a>
              ) : service.title === 'Internship & Talent Development' ? (
                <a href="/services/internships" className="mt-auto px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow hover:from-blue-600 hover:to-blue-700 transition-all duration-200">
                  Learn More
                </a>
              ) : (
                <button className="mt-auto px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow hover:from-blue-600 hover:to-blue-700 transition-all duration-200" disabled>
                  Learn More
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 