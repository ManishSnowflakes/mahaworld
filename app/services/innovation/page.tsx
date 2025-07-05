import { Lightbulb, FileText, Users, CheckCircle, Sparkles, ArrowRight, Shield, Award, BookOpen, Globe, Target, Clock, TrendingUp, Zap, Search, Briefcase } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Innovation & Patent Services | Mahaworld',
  description: 'Transform your ideas into valuable patents. Expert innovation consulting, patent drafting, filing, and commercialization support for B.Tech, M.Tech, and PhD students.'
}

const faqs = [
  {
    q: 'What is the patent filing process?',
    a: 'Our comprehensive process includes prior art search, patentability assessment, patent drafting, and filing with patent offices. We guide you through each step with expert consultation and ensure your invention meets all legal requirements for patent protection.'
  },
  {
    q: 'Do you help with international patents?',
    a: 'Yes, we support both national and international patent filings, including PCT applications and foreign patent protection. We have expertise in filing patents in major jurisdictions including US, EU, India, China, and other countries.'
  },
  {
    q: 'How long does the patent process take?',
    a: 'The timeline varies by jurisdiction, but typically takes 12-18 months for initial filing and 2-5 years for full patent grant. We provide regular updates throughout the process and expedite when possible.'
  },
  {
    q: 'Can you help commercialize my invention?',
    a: 'Absolutely! We provide comprehensive guidance on patent commercialization, licensing strategies, and connecting inventors with potential partners or investors. Our network includes industry leaders and venture capitalists.'
  },
  {
    q: 'What types of inventions can be patented?',
    a: 'We can help patent various types of inventions including software, hardware, processes, chemical compositions, and business methods. We assess patentability based on novelty, non-obviousness, and utility requirements.'
  },
  {
    q: 'Do you provide patent infringement analysis?',
    a: 'Yes, we offer patent infringement analysis, freedom-to-operate studies, and patent landscape analysis to help you understand the competitive landscape and avoid potential conflicts.'
  }
]

const testimonials = [
  {
    name: 'Dr. Amit Patel',
    degree: 'PhD Researcher',
    text: 'Mahaworld helped me file my first patent and now I have multiple patents to my name. Their expertise in technical patent drafting is unmatched!',
    rating: 5
  },
  {
    name: 'Kavya Reddy',
    degree: 'M.Tech Student',
    text: 'The team made the complex patent process simple and understandable. They helped me commercialize my invention successfully.',
    rating: 5
  },
  {
    name: 'Prof. Rajesh Kumar',
    degree: 'University Professor',
    text: 'Their international patent filing expertise helped us protect our research globally. Highly recommended for academic inventors!',
    rating: 5
  }
]

const patentServices = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Innovation Consulting',
    description: 'Expert guidance to identify, develop, and refine your innovative ideas for maximum patent potential.',
    features: ['Idea Assessment', 'Innovation Workshops', 'Market Analysis', 'Patent Strategy']
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Prior Art Search',
    description: 'Comprehensive search of existing patents and publications to assess novelty and patentability.',
    features: ['Patent Databases', 'Academic Literature', 'Technical Analysis', 'Novelty Assessment']
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Patent Drafting',
    description: 'Professional patent specification drafting with detailed claims and technical descriptions.',
    features: ['Technical Specifications', 'Claim Drafting', 'Drawings & Diagrams', 'Legal Compliance']
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Patent Filing',
    description: 'Complete patent filing services for national and international patent offices.',
    features: ['National Filing', 'PCT Applications', 'International Filing', 'Office Communications']
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Patent Prosecution',
    description: 'Handling office actions, amendments, and responses throughout the patent examination process.',
    features: ['Office Action Responses', 'Claim Amendments', 'Examiner Interviews', 'Appeal Support']
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Commercialization Support',
    description: 'Strategic guidance for patent licensing, technology transfer, and commercialization.',
    features: ['Licensing Strategy', 'Technology Transfer', 'Investor Connections', 'Market Analysis']
  }
]

const industries = [
  { name: 'Technology', icon: '💻' },
  { name: 'Healthcare', icon: '🏥' },
  { name: 'Manufacturing', icon: '🏭' },
  { name: 'Energy', icon: '⚡' },
  { name: 'Agriculture', icon: '🌾' },
  { name: 'Biotechnology', icon: '🧬' },
  { name: 'Automotive', icon: '🚗' },
  { name: 'Aerospace', icon: '✈️' }
]

export default function InnovationServicePage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-50 via-orange-50 to-white py-20 border-b border-yellow-100 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-orange-200 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-300 rounded-full opacity-25 animate-ping"></div>
          </div>
          
          <div className="container-custom flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="flex-1">
              <div className="inline-flex items-center space-x-2 bg-yellow-100 border border-yellow-200 rounded-full px-4 py-2 mb-6 animate-fade-in">
                <Lightbulb className="w-5 h-5 text-yellow-600" />
                <span className="text-sm font-semibold text-yellow-700">Innovation & Patent Services</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
                Transform Ideas Into Valuable Patents
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
                Turn your innovative ideas into protected intellectual property. We offer comprehensive patent services including drafting, filing, and commercialization support for students and professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#cta" className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-600 to-yellow-700 text-white font-bold shadow-lg hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 transform hover:scale-105">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href="#services" className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-yellow-600 text-yellow-600 font-bold hover:bg-yellow-50 transition-all duration-300">
                  Explore Services
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="relative">
                    <Award className="w-40 h-40 text-yellow-400 animate-pulse" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center animate-bounce">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center animate-pulse">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in-up">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-yellow-100">Patents Filed</div>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-yellow-100">Success Rate</div>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-yellow-100">Countries</div>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-yellow-100">Expert Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Patent Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive patent services designed to protect your innovations and maximize their commercial value.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {patentServices.map((service, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="text-yellow-500 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 bg-gradient-to-b from-yellow-50 to-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industries We Serve</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {industries.map((industry, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="text-3xl mb-2">{industry.icon}</div>
                  <div className="font-semibold text-gray-900">{industry.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Patent Process</h2>
            <div className="grid md:grid-cols-6 gap-8">
              {[
                { icon: <Lightbulb className="w-6 h-6" />, title: 'Innovation Assessment', desc: 'Evaluating your idea for patentability and commercial potential' },
                { icon: <Search className="w-6 h-6" />, title: 'Prior Art Search', desc: 'Comprehensive search of existing patents and publications' },
                { icon: <CheckCircle className="w-6 h-6" />, title: 'Patentability Analysis', desc: 'Legal and technical assessment of patent potential' },
                { icon: <FileText className="w-6 h-6" />, title: 'Patent Drafting', desc: 'Professional drafting of patent specifications and claims' },
                { icon: <Globe className="w-6 h-6" />, title: 'Filing & Prosecution', desc: 'Filing with patent offices and handling examination' },
                { icon: <Award className="w-6 h-6" />, title: 'Patent Grant', desc: 'Successful patent grant and ongoing protection' }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                    <div className="text-yellow-600">{step.icon}</div>
                  </div>
                  <div className="font-semibold text-gray-900 mb-2">{step.title}</div>
                  <div className="text-sm text-gray-600">{step.desc}</div>
                  {idx < 5 && (
                    <div className="hidden md:block w-full h-0.5 bg-yellow-200 mt-8 relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Our Patent Services?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Users className="w-8 h-8" />, title: 'Expert Patent Attorneys', desc: 'Qualified attorneys with decades of patent experience' },
                { icon: <Shield className="w-8 h-8" />, title: 'Global Protection', desc: 'International patent filing and protection strategies' },
                { icon: <TrendingUp className="w-8 h-8" />, title: 'Commercial Success', desc: 'Focus on patents with commercial potential' },
                { icon: <Clock className="w-8 h-8" />, title: 'Fast Processing', desc: 'Expedited filing and prosecution services' }
              ].map((benefit, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-yellow-600">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-yellow-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="font-semibold text-yellow-700 mb-3 text-lg">{faq.q}</div>
                  <div className="text-gray-700 leading-relaxed">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
          <div className="container-custom max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <Users className="w-10 h-10 text-yellow-400 mr-4" />
                    <div>
                      <div className="text-lg font-semibold text-gray-900">{t.name}</div>
                      <div className="text-yellow-600 text-sm">{t.degree}</div>
                    </div>
                  </div>
                  <div className="text-gray-700 mb-4 leading-relaxed">"{t.text}"</div>
                  <div className="flex items-center">
                    {[...Array(t.rating)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Protect Your Innovation?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our patent services can protect your intellectual property and maximize its commercial value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-yellow-600 font-bold shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="tel:+1234567890" className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-white text-white font-bold hover:bg-white hover:text-yellow-600 transition-all duration-300">
                Call Us Now
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
} 