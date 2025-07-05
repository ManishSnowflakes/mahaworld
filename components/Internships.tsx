'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Users, Clock, MapPin } from 'lucide-react'

const Internships = () => {
  const programs = [
    {
      title: 'Software Development',
      duration: '3-6 months',
      location: 'Remote/Hybrid',
      description: 'Work on real-world projects using cutting-edge technologies.',
      skills: ['JavaScript', 'React', 'Node.js', 'Python']
    },
    {
      title: 'Data Science & AI',
      duration: '4-8 months',
      location: 'Remote/Hybrid',
      description: 'Explore machine learning, data analytics, and AI applications.',
      skills: ['Python', 'TensorFlow', 'SQL', 'Statistics']
    },
    {
      title: 'Cloud & DevOps',
      duration: '3-6 months',
      location: 'Remote/Hybrid',
      description: 'Learn cloud infrastructure and deployment automation.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
    }
  ]

  return (
    <section id="internships" className="section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Internship <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Launch your career with hands-on experience in cutting-edge technologies 
            and real-world projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
              <p className="text-gray-600 mb-6">{program.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  {program.duration}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {program.location}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {program.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
          >
            Apply for Internship
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Internships 