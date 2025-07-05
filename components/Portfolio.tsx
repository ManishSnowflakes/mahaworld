'use client'

import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Star, Users, Calendar } from 'lucide-react'
import { useRef } from 'react'
import Image from 'next/image'

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with AI-powered recommendations and advanced analytics.',
      image: '/api/placeholder/400/300',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      rating: 4.9,
      clients: 50,
      duration: '3 months',
      clientLogo: '/api/placeholder/client1',
      clientName: 'Acme Corp',
      caseStudy: 'This project helped Acme Corp increase online sales by 30% in 6 months. [Add more details here about the challenge, solution, and results.]',
      link: '#',
      github: '#'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence platform with predictive analytics and custom reporting.',
      image: '/api/placeholder/400/300',
      category: 'AI & ML',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      rating: 4.8,
      clients: 25,
      duration: '4 months',
      link: '#',
      github: '#'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
      image: '/api/placeholder/400/300',
      category: 'Mobile Development',
      technologies: ['React Native', 'Node.js', 'Firebase', 'Stripe'],
      rating: 4.9,
      clients: 100,
      duration: '6 months',
      link: '#',
      github: '#'
    },
    {
      title: 'Cloud Migration Solution',
      description: 'Enterprise cloud migration with zero downtime and automated scaling capabilities.',
      image: '/api/placeholder/400/300',
      category: 'Cloud & DevOps',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      rating: 4.7,
      clients: 15,
      duration: '2 months',
      link: '#',
      github: '#'
    },
    {
      title: 'Cybersecurity Platform',
      description: 'Comprehensive security monitoring and threat detection system for enterprises.',
      image: '/api/placeholder/400/300',
      category: 'Cybersecurity',
      technologies: ['Python', 'Elasticsearch', 'React', 'Redis'],
      rating: 4.8,
      clients: 30,
      duration: '5 months',
      link: '#',
      github: '#'
    },
    {
      title: 'IoT Smart Home System',
      description: 'Connected home automation system with voice control and energy optimization.',
      image: '/api/placeholder/400/300',
      category: 'IoT',
      technologies: ['Python', 'MQTT', 'React', 'MongoDB'],
      rating: 4.6,
      clients: 75,
      duration: '4 months',
      link: '#',
      github: '#'
    }
  ]

  const categories = ['All', 'Web Development', 'AI & ML', 'Mobile Development', 'Cloud & DevOps', 'Cybersecurity', 'IoT']

  return (
    <section ref={ref} id="portfolio" className="section-padding bg-gray-50 relative">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses 
            transform their digital presence with innovative solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                category === 'All' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
              aria-label={`Show ${category} projects`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden flex items-center justify-center">
                <Image src={project.image} alt={`${project.title} screenshot`} fill style={{objectFit:'cover'}} className="rounded-t-2xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-700" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="View project on GitHub"
                  >
                    <Github className="w-4 h-4 text-gray-700" />
                  </motion.button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                {project.clientLogo && (
                  <div className="flex items-center mb-2">
                    <Image src={project.clientLogo} alt={`${project.clientName} logo`} width={32} height={32} className="w-8 h-8 rounded-full mr-2" />
                    <span className="text-sm text-gray-700 font-semibold">{project.clientName}</span>
                  </div>
                )}
                {project.caseStudy && (
                  <div className="mb-4 p-3 bg-blue-50 border-l-4 border-blue-400 text-blue-900 text-sm rounded">
                    <strong>Case Study:</strong> {project.caseStudy}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" aria-label="Project rating" />
                      <span>{project.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" aria-label="Number of clients" />
                      <span>{project.clients}+</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" aria-label="Project duration" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <span>View All Projects</span>
            <ExternalLink className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio 