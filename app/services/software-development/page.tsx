import { Code2, Smartphone, Globe, CheckCircle, Sparkles, ArrowRight, Zap, Shield, Database, Server, Cloud, Lock, Users, Award, Clock, TrendingUp, Settings } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Software & IT Product Development | Mahaworld',
  description: 'Full-cycle software and IT product development for official clients. Web, mobile, and cloud solutions with robust architecture and agile delivery.'
}

const faqs = [
  {
    q: 'What types of software do you develop?',
    a: 'We develop web applications, mobile apps, desktop software, cloud solutions, APIs, and enterprise systems tailored to your business needs. Our expertise covers frontend, backend, and full-stack development.'
  },
  {
    q: 'Do you provide ongoing support?',
    a: 'Yes, we offer comprehensive maintenance, updates, and support services to ensure your software continues to perform optimally. This includes bug fixes, feature updates, and performance optimization.'
  },
  {
    q: 'What is your development methodology?',
    a: 'We follow agile methodologies with regular client communication, iterative development, and continuous testing for quality assurance. We use Scrum and Kanban frameworks for project management.'
  },
  {
    q: 'Can you work with existing systems?',
    a: 'Absolutely! We specialize in integrating new solutions with existing systems and can modernize legacy applications. We ensure seamless integration with minimal disruption to your operations.'
  },
  {
    q: 'What technologies do you use?',
    a: 'We use modern technologies including React, Angular, Node.js, Python, Java, .NET, and cloud platforms like AWS, Azure, and Google Cloud. We choose the best stack for your specific requirements.'
  },
  {
    q: 'How do you ensure code quality?',
    a: 'We follow industry best practices including code reviews, automated testing, CI/CD pipelines, and comprehensive documentation. Our code is maintainable, scalable, and follows security standards.'
  }
]

const testimonials = [
  {
    name: 'Emily Rodriguez',
    company: 'Global Retail Inc.',
    text: 'Mahaworld built our e-commerce platform that increased sales by 250%. Their expertise and professionalism are outstanding!',
    rating: 5
  },
  {
    name: 'David Thompson',
    company: 'SecureBank',
    text: 'The banking software they developed is secure, scalable, and user-friendly. Highly recommended for enterprise solutions!',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    company: 'TechStartup',
    text: 'They delivered our MVP in record time and helped us scale to 100K users. The team is incredibly talented!',
    rating: 5
  }
]

const developmentServices = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Web Application Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.',
    features: ['React/Next.js', 'Progressive Web Apps', 'SEO Optimization', 'Performance Tuning']
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with intuitive user interfaces.',
    features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization']
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: 'Backend Development',
    description: 'Robust server-side applications, APIs, and microservices with scalable architecture and high performance.',
    features: ['Node.js/Python', 'RESTful APIs', 'Microservices', 'Database Design']
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'Cloud Solutions',
    description: 'Cloud-native applications and migration services for AWS, Azure, and Google Cloud platforms.',
    features: ['AWS/Azure/GCP', 'Serverless Architecture', 'Containerization', 'DevOps']
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Database & Analytics',
    description: 'Database design, optimization, and business intelligence solutions for data-driven decision making.',
    features: ['SQL/NoSQL', 'Data Warehousing', 'Business Intelligence', 'Data Analytics']
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'System Integration',
    description: 'Seamless integration of new software with existing systems and third-party applications.',
    features: ['API Integration', 'Legacy Modernization', 'Third-party APIs', 'Data Migration']
  }
]

const technologies = [
  { name: 'React/Next.js', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'Java', icon: '☕' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Kubernetes', icon: '⚓' },
  { name: 'PostgreSQL', icon: '🐘' }
]

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-white py-20 border-b border-green-100 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-emerald-200 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-300 rounded-full opacity-25 animate-ping"></div>
          </div>
          
          <div className="container-custom flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="flex-1">
              <div className="inline-flex items-center space-x-2 bg-green-100 border border-green-200 rounded-full px-4 py-2 mb-6 animate-fade-in">
                <Code2 className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-green-700">Software & IT Product Development</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
                Custom Software Solutions for Modern Businesses
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
                Transform your business with custom software solutions. We deliver robust, scalable, and innovative applications that drive growth, efficiency, and competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#cta" className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-green-600 to-green-700 text-white font-bold shadow-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href="#services" className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-green-600 text-green-600 font-bold hover:bg-green-50 transition-all duration-300">
                  Explore Services
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl flex items-center justify-center shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="relative">
                    <Code2 className="w-40 h-40 text-green-400 animate-pulse" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center animate-bounce">
                  <Smartphone className="w-8 h-8 text-blue-600" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center animate-pulse">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in-up">
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-green-100">Projects Delivered</div>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-green-100">Uptime Guarantee</div>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-green-100">Technologies</div>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-green-100">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Development Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive software development services designed to meet your business needs and drive digital transformation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {developmentServices.map((service, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="text-green-500 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16 bg-gradient-to-b from-green-50 to-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technologies We Use</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {technologies.map((tech, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <div className="font-semibold text-gray-900">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Development Process</h2>
            <div className="grid md:grid-cols-6 gap-8">
              {[
                { icon: <Code2 className="w-6 h-6" />, title: 'Discovery & Planning', desc: 'Understanding requirements and creating detailed project roadmap' },
                { icon: <Globe className="w-6 h-6" />, title: 'Design & Prototyping', desc: 'Creating wireframes, mockups, and interactive prototypes' },
                { icon: <Smartphone className="w-6 h-6" />, title: 'Development', desc: 'Agile development with regular iterations and feedback' },
                { icon: <CheckCircle className="w-6 h-6" />, title: 'Testing & QA', desc: 'Comprehensive testing including unit, integration, and user testing' },
                { icon: <Zap className="w-6 h-6" />, title: 'Deployment', desc: 'Seamless deployment with zero-downtime and rollback capabilities' },
                { icon: <Sparkles className="w-6 h-6" />, title: 'Support & Maintenance', desc: 'Ongoing support, updates, and performance optimization' }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <div className="text-green-600">{step.icon}</div>
                  </div>
                  <div className="font-semibold text-gray-900 mb-2">{step.title}</div>
                  <div className="text-sm text-gray-600">{step.desc}</div>
                  {idx < 5 && (
                    <div className="hidden md:block w-full h-0.5 bg-green-200 mt-8 relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-b from-green-50 to-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Our Development Services?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Users className="w-8 h-8" />, title: 'Expert Team', desc: 'Experienced developers with deep technical expertise' },
                { icon: <Shield className="w-8 h-8" />, title: 'Secure & Reliable', desc: 'Enterprise-grade security and reliability standards' },
                { icon: <TrendingUp className="w-8 h-8" />, title: 'Scalable Solutions', desc: 'Architecture designed to grow with your business' },
                { icon: <Clock className="w-8 h-8" />, title: 'Fast Delivery', desc: 'Agile methodology for quick time-to-market' }
              ].map((benefit, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-green-600">{benefit.icon}</div>
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
                <div key={idx} className="bg-green-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="font-semibold text-green-700 mb-3 text-lg">{faq.q}</div>
                  <div className="text-gray-700 leading-relaxed">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-green-50 to-white">
          <div className="container-custom max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <Code2 className="w-10 h-10 text-green-400 mr-4" />
                    <div>
                      <div className="text-lg font-semibold text-gray-900">{t.name}</div>
                      <div className="text-green-600 text-sm">{t.company}</div>
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
        <section id="cta" className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Software Solution?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our custom software development services can transform your business and drive digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-green-600 font-bold shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="tel:+1234567890" className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-white text-white font-bold hover:bg-white hover:text-green-600 transition-all duration-300">
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