'use client'

import { motion } from 'framer-motion'
import { Lightbulb, TrendingUp, Rocket, Target } from 'lucide-react'

const Innovation = () => {
  const innovations = [
    {
      icon: Lightbulb,
      title: 'AI & Machine Learning',
      description: 'Pioneering AI solutions for business automation and intelligent decision-making.',
      progress: 85
    },
    {
      icon: TrendingUp,
      title: 'Blockchain Technology',
      description: 'Developing secure, transparent blockchain solutions for various industries.',
      progress: 70
    },
    {
      icon: Rocket,
      title: 'IoT & Smart Systems',
      description: 'Creating connected ecosystems for smart homes and industrial automation.',
      progress: 90
    },
    {
      icon: Target,
      title: 'Quantum Computing',
      description: 'Exploring quantum algorithms for complex computational problems.',
      progress: 60
    }
  ]

  return (
    <section id="innovation" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Innovation & <span className="gradient-text">Research</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pushing the boundaries of technology through cutting-edge research and 
            innovative solutions that shape the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {innovations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-semibold text-blue-600">{item.progress}%</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
          >
            Explore Research
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Innovation 