'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import Internships from '@/components/Internships'
import Innovation from '@/components/Innovation'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import LiveChat from '@/components/LiveChat'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <Portfolio />
      <Testimonials />
      <About />
      <Internships />
      <Innovation />
      <Blog />
      <Contact />
      <Newsletter />
      <Footer />
      <LiveChat />
    </main>
  )
} 