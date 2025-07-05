import { BookOpen, FileText, Users, CheckCircle, Sparkles, ArrowRight, Target, Clock, TrendingUp, Shield, Award, Search, BarChart3, Globe, Zap, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Research & Publication Services | Mahaworld',
  description: 'Comprehensive research project guidance, paper writing, and publication support for B.Tech, M.Tech, and PhD students. Get published in top journals with Mahaworld.'
}

const faqs = [
  {
    q: 'Who can use this service?',
    a: 'Our research and publication services are designed for B.Tech, M.Tech, and PhD students, as well as academic professionals seeking publication support. We also assist researchers and faculty members with their research projects.'
  },
  {
    q: 'Do you guarantee publication?',
    a: 'We provide expert guidance and support to maximize your chances of publication, but final acceptance depends on the journal or conference. Our success rate is over 85% for properly prepared submissions.'
  },
  {
    q: 'Can you help with plagiarism checking?',
    a: 'Yes, we offer comprehensive plagiarism checking and ensure your work meets academic integrity standards. We use advanced tools to detect and eliminate any potential plagiarism issues.'
  },
  {
    q: 'What fields do you cover?',
    a: 'We support research in engineering, technology, science, management, and more. Our expertise spans computer science, mechanical engineering, electrical engineering, biotechnology, and business research.'
  },
  {
    q: 'How long does the research process take?',
    a: 'The timeline varies based on project complexity, typically 3-6 months for complete research projects. We provide regular updates and can expedite when needed for urgent deadlines.'
  },
  {
    q: 'Do you provide data analysis support?',
    a: 'Absolutely! We offer comprehensive data analysis services including statistical analysis, data visualization, and interpretation of results using advanced analytical tools and methodologies.'
  }
]

const testimonials = [
  {
    name: 'Priya Sharma',
    degree: 'PhD Scholar',
    text: 'Mahaworld helped me publish my first research paper in a top international journal. Their guidance was invaluable throughout the entire process!',
    rating: 5
  },
  {
    name: 'Rahul Verma',
    degree: 'M.Tech Student',
    text: 'The team made the research process smooth and stress-free. They helped me achieve publication in a high-impact journal within 6 months.',
    rating: 5
  },
  {
    name: 'Dr. Anjali Patel',
    degree: 'Assistant Professor',
    text: 'Their research methodology guidance and statistical analysis support helped me complete my research project successfully. Highly recommended!',
    rating: 5
  }
]

const researchServices = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Research Topic Selection',
    description: 'Expert guidance in selecting research topics that are novel, feasible, and have high publication potential.',
    features: ['Topic Analysis', 'Literature Gap Identification', 'Feasibility Assessment', 'Research Scope Definition']
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Literature Review',
    description: 'Comprehensive literature review and systematic analysis of existing research in your field.',
    features: ['Systematic Review', 'Meta-analysis', 'Citation Analysis', 'Research Gap Identification']
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Research Methodology',
    description: 'Design and implementation of robust research methodologies and experimental protocols.',
    features: ['Experimental Design', 'Data Collection Methods', 'Statistical Analysis', 'Validation Protocols']
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Data Analysis',
    description: 'Advanced statistical analysis, data visualization, and interpretation of research findings.',
    features: ['Statistical Analysis', 'Data Visualization', 'Result Interpretation', 'Statistical Validation']
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Paper Writing',
    description: 'Professional research paper writing with proper structure, formatting, and academic standards.',
    features: ['Manuscript Preparation', 'Journal Formatting', 'Abstract Writing', 'Reference Management']
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Publication Support',
    description: 'Complete publication support including journal selection, submission, and revision assistance.',
    features: ['Journal Selection', 'Submission Process', 'Revision Support', 'Publication Tracking']
  }
]

const researchAreas = [
  { name: 'Computer Science', icon: '💻' },
  { name: 'Mechanical Engineering', icon: '⚙️' },
  { name: 'Electrical Engineering', icon: '⚡' },
  { name: 'Biotechnology', icon: '🧬' },
  { name: 'Business Management', icon: '📊' },
  { name: 'Data Science', icon: '📈' },
  { name: 'Artificial Intelligence', icon: '🤖' },
  { name: 'Environmental Science', icon: '🌱' }
]

export default function ResearchServicePage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-20 border-b border-blue-100 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300 rounded-full opacity-25 animate-ping"></div>
          </div>
          
          <div className="container-custom flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="flex-1">
              <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 mb-6 animate-fade-in">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">Research & Publication</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
                Full Research Guidance & Publication Support
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
                Get expert help at every stage of your research journey—from topic selection to publishing in top international journals. We empower B.Tech, M.Tech, and PhD students to achieve academic excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#cta" className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href="#services" className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-50 transition-all duration-300">
                  Explore Services
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl flex items-center justify-center shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="relative">
                    <FileText className="w-40 h-40 text-blue-400 animate-pulse" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-200 rounded-full flex items-center justify-center animate-bounce">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center animate-pulse">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in-up">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Papers Published</div>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-blue-100">Acceptance Rate</div>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Research Areas</div>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Expert Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Research Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive research and publication services designed to help you achieve academic success and publish in top-tier journals.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchServices.map((service, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="text-blue-500 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Areas We Cover</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {researchAreas.map((area, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="text-3xl mb-2">{area.icon}</div>
                  <div className="font-semibold text-gray-900">{area.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Research Process</h2>
            <div className="grid md:grid-cols-6 gap-8">
              {[
                { icon: <BookOpen className="w-6 h-6" />, title: 'Topic Selection', desc: 'Identifying research gaps and selecting viable topics' },
                { icon: <FileText className="w-6 h-6" />, title: 'Proposal & Review', desc: 'Developing research proposals and literature review' },
                { icon: <Users className="w-6 h-6" />, title: 'Mentorship', desc: 'One-on-one guidance throughout the research process' },
                { icon: <CheckCircle className="w-6 h-6" />, title: 'Analysis & Writing', desc: 'Data analysis and manuscript preparation' },
                { icon: <Sparkles className="w-6 h-6" />, title: 'Editing & Compliance', desc: 'Quality editing and academic compliance' },
                { icon: <Globe className="w-6 h-6" />, title: 'Submission & Publication', desc: 'Journal submission and publication support' }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <div className="text-blue-600">{step.icon}</div>
                  </div>
                  <div className="font-semibold text-gray-900 mb-2">{step.title}</div>
                  <div className="text-sm text-gray-600">{step.desc}</div>
                  {idx < 5 && (
                    <div className="hidden md:block w-full h-0.5 bg-blue-200 mt-8 relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Our Research Services?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Users className="w-8 h-8" />, title: 'Expert Mentors', desc: 'Experienced researchers and academic professionals' },
                { icon: <Shield className="w-8 h-8" />, title: 'Quality Assurance', desc: 'Rigorous quality standards and plagiarism-free work' },
                { icon: <TrendingUp className="w-8 h-8" />, title: 'High Success Rate', desc: '85% publication success rate in top journals' },
                { icon: <Clock className="w-8 h-8" />, title: 'Timely Delivery', desc: 'On-time delivery with regular progress updates' }
              ].map((benefit, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-600">{benefit.icon}</div>
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
                <div key={idx} className="bg-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="font-semibold text-blue-700 mb-3 text-lg">{faq.q}</div>
                  <div className="text-gray-700 leading-relaxed">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">What Our Students Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <Users className="w-10 h-10 text-blue-400 mr-4" />
                    <div>
                      <div className="text-lg font-semibold text-gray-900">{t.name}</div>
                      <div className="text-blue-600 text-sm">{t.degree}</div>
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
        <section id="cta" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Publish Your Research?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our research and publication services can help you achieve academic success and publish in top-tier journals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-blue-600 font-bold shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="tel:+1234567890" className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-white text-white font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
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