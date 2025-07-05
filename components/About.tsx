'use client'

import { motion, useInView } from 'framer-motion'
import { Users, Award, Target, Zap, TrendingUp, Globe } from 'lucide-react'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: Users,
      number: '50+',
      label: 'Expert Developers',
      description: 'Skilled professionals'
    },
    {
      icon: Award,
      number: '100+',
      label: 'Awards & Recognition',
      description: 'Industry accolades'
    },
    {
      icon: Target,
      number: '500+',
      label: 'Projects Delivered',
      description: 'Successful implementations'
    },
    {
      icon: Zap,
      number: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock assistance'
    }
  ]

  const achievements = [
    { title: 'Innovation Excellence', value: '95%', color: 'from-green-500 to-green-600' },
    { title: 'Client Satisfaction', value: '98%', color: 'from-blue-500 to-blue-600' },
    { title: 'Project Success Rate', value: '99%', color: 'from-purple-500 to-purple-600' },
    { title: 'Team Performance', value: '97%', color: 'from-orange-500 to-orange-600' }
  ]

  return (
    <section ref={ref} id="about" className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6"
            >
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">About Mahaworld</span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              About <span className="gradient-text">Mahaworld</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded by passionate technologists, Mahaworld began as a vision to bridge the gap between innovation and real-world business needs. Our journey started with a small team and a big dream: to empower organizations with technology that truly makes a difference.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Today, we are a global force, delivering premium software, nurturing talent through internships, and driving research that shapes the future. Our mission is to empower organizations with cutting-edge software, exceptional internship opportunities, and groundbreaking research initiatives.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">What Sets Us Apart</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Client-first approach: We measure our success by your results.</li>
                <li>Innovation-driven culture: We embrace new ideas and technologies.</li>
                <li>Global expertise: Diverse team with experience across industries and continents.</li>
                <li>End-to-end solutions: From ideation to deployment and support.</li>
                <li>Commitment to quality and transparency in every project.</li>
              </ul>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-blue-200 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{item.number}</div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.description}</div>
                </motion.div>
              ))}
            </div>

            {/* Achievement Bars */}
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">{achievement.title}</span>
                    <span className="font-bold text-blue-600">{achievement.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: achievement.value } : {}}
                      transition={{ duration: 1, delay: 1 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${achievement.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Main Vision Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl"
            >
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg mb-6 leading-relaxed opacity-90">
                To be the leading force in software innovation, creating solutions that 
                shape the future of technology and empower businesses to achieve their 
                full potential.
              </p>
              <div className="space-y-3">
                {[
                  'Innovation-driven approach',
                  'Excellence in delivery',
                  'Client-centric solutions',
                  'Future-ready technology'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 