'use client'

import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useRef } from 'react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechCorp Solutions',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Mahaworld transformed our entire digital infrastructure. Their expertise in cloud migration saved us 40% in operational costs while improving performance by 300%. The team is incredibly professional and delivered beyond our expectations.',
      project: 'Cloud Migration & Digital Transformation'
    },
    {
      name: 'Michael Chen',
      position: 'Founder & CEO',
      company: 'InnovateStartup',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Working with Mahaworld was a game-changer for our startup. They built our MVP in record time and helped us secure our first round of funding. Their innovative approach and technical excellence are unmatched.',
      project: 'MVP Development & AI Integration'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Head of Digital',
      company: 'Global Retail Inc.',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'The e-commerce platform Mahaworld developed for us increased our online sales by 250% in the first quarter. Their attention to detail and user experience expertise made all the difference.',
      project: 'E-Commerce Platform Development'
    },
    {
      name: 'David Thompson',
      position: 'IT Director',
      company: 'SecureBank',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Security is paramount in banking, and Mahaworld delivered a bulletproof solution. Their cybersecurity expertise and compliance knowledge gave us complete confidence in our digital transformation.',
      project: 'Cybersecurity Platform & Compliance'
    },
    {
      name: 'Lisa Wang',
      position: 'Product Manager',
      company: 'HealthTech Pro',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Mahaworld helped us build a revolutionary healthcare analytics platform. Their AI expertise and understanding of healthcare regulations made them the perfect partner for our mission.',
      project: 'Healthcare AI Analytics Platform'
    },
    {
      name: 'Robert Kim',
      position: 'Operations Director',
      company: 'SmartManufacturing',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'The IoT solution Mahaworld implemented revolutionized our manufacturing process. We achieved 35% efficiency improvement and real-time monitoring capabilities that were previously impossible.',
      project: 'IoT Manufacturing Solution'
    }
  ]

  return (
    <section ref={ref} id="testimonials" className="section-padding bg-white relative">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders and 
            successful businesses have to say about working with Mahaworld.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600">On-Time Delivery</div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-200">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Project Type */}
              <div className="mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                  {testimonial.project}
                </span>
              </div>

              {/* Client Info */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
          
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-300 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
              "Mahaworld didn't just build us a website – they built us a digital empire. 
              Their strategic approach, technical excellence, and unwavering commitment to 
              our success have made them our trusted technology partner for life."
            </blockquote>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xl">
                JS
              </div>
              <div>
                <div className="font-semibold text-xl">James Smith</div>
                <div className="text-blue-100">CEO, Digital Ventures</div>
                <div className="text-blue-200 text-sm">Fortune 500 Company</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Ready to join our success stories?
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 