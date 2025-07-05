'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'
import Link from 'next/link'
import Logo from './Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Logo 
              variant="dark" 
              size="md" 
              showText={true} 
              animated={false}
              className="mb-6"
            />
            <p className="text-dark-300 mb-6 leading-relaxed">
              Transforming businesses through innovative software solutions, 
              cutting-edge research, and exceptional internship opportunities. 
              We're committed to excellence in every project we undertake.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors">Custom Software</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors">AI & ML</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors">Cybersecurity</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors">Internships</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors">Research</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-dark-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary-400" />
              <span className="text-dark-300">hello@mahaworld.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary-400" />
              <span className="text-dark-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-primary-400" />
              <span className="text-dark-300">123 Innovation Street, Tech City</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-800 mt-8 pt-8 text-center">
          <p className="text-dark-400">
            © {currentYear} Mahaworld. All rights reserved. | 
            <Link href="/privacy-policy" className="text-primary-400 hover:text-primary-300 ml-2">Privacy Policy</Link> | 
            <Link href="/terms" className="text-primary-400 hover:text-primary-300 ml-2">Terms & Conditions</Link>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-500">
          <Link href="/privacy-policy" className="hover:text-blue-600 underline">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-blue-600 underline">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer 