import { Users, GraduationCap, CheckCircle, Sparkles, ArrowRight, Zap, Award, BookOpen, Target, Clock, TrendingUp, Shield, Globe, Briefcase, Star, Heart } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Internship & Talent Development | Mahaworld',
  description: 'Industry-focused internships for B.Tech, M.Tech, and PhD students. Live projects, mentorship, certification, and placement assistance.'
}

const faqs = [
  {
    q: 'Who can apply for internships?',
    a: 'We welcome B.Tech, M.Tech, and PhD students from all engineering and technology disciplines. We also consider recent graduates and professionals looking to upskill. Our programs are designed for students at all levels of expertise.',
  },
  {
    q: 'What is the duration of internships?',
    a: 'Our internships typically range from 3-6 months, with flexible start dates and both part-time and full-time options available. We also offer short-term intensive programs and extended research internships for PhD students.',
  },
  {
    q: 'Do you provide certificates?',
    a: 'Yes, we provide industry-recognized certificates upon successful completion of the internship program. Our certificates are valued by leading tech companies and can significantly enhance your resume and career prospects.',
  },
  {
    q: 'Is there placement assistance?',
    a: 'Absolutely! We provide comprehensive placement assistance and connect our interns with our network of partner companies and clients. Our placement rate is over 80% with many interns receiving job offers from top companies.',
  },
  {
    q: 'What technologies will I learn?',
    a: 'You will learn cutting-edge technologies including AI/ML, cloud computing, web development, mobile app development, data science, and more. The curriculum is regularly updated to match industry demands.',
  },
  {
    q: 'Do you provide mentorship?',
    a: 'Yes, we provide one-on-one mentorship from industry experts throughout your internship. Our mentors have years of experience in leading tech companies and will guide you in your career development.',
  }
]

const testimonials = [
  {
    name: 'Priya Sharma',
    degree: 'B.Tech Student',
    text: 'My internship at Mahaworld gave me real-world experience and helped me land a great job. The mentorship was invaluable and the live projects were exactly what I needed!',
    rating: 5
  },
  {
    name: 'Rahul Verma',
    degree: 'M.Tech Student',
    text: 'Working on live projects with industry experts was an amazing learning experience. The placement assistance helped me secure a position at a top tech company.',
    rating: 5
  },
  {
    name: 'Anjali Patel',
    degree: 'PhD Student',
    text: 'The research internship program was exceptional. I gained practical experience in AI/ML and published my first research paper. Highly recommended!',
    rating: 5
  }
]

const internshipPrograms = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'AI/ML Internship',
    description: 'Hands-on experience in machine learning, deep learning, and artificial intelligence with real-world projects.',
    features: ['Python Programming', 'TensorFlow/PyTorch', 'Data Analysis', 'Model Deployment'],
    duration: '3-6 months',
    level: 'B.Tech/M.Tech/PhD'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Full-stack web development internship with modern technologies and frameworks.',
    features: ['React/Next.js', 'Node.js', 'Database Design', 'Cloud Deployment'],
    duration: '3-6 months',
    level: 'B.Tech/M.Tech'
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Research Internship',
    description: 'Research-focused internship for PhD students with publication opportunities.',
    features: ['Research Methodology', 'Paper Writing', 'Data Analysis', 'Publication Support'],
    duration: '6-12 months',
    level: 'PhD Students'
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Data Science',
    description: 'Comprehensive data science internship with statistical analysis and visualization.',
    features: ['Statistical Analysis', 'Data Visualization', 'Machine Learning', 'Business Intelligence'],
    duration: '3-6 months',
    level: 'B.Tech/M.Tech'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Cybersecurity',
    description: 'Cybersecurity internship focusing on network security and ethical hacking.',
    features: ['Network Security', 'Ethical Hacking', 'Security Tools', 'Incident Response'],
    duration: '3-6 months',
    level: 'B.Tech/M.Tech'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Mobile Development',
    description: 'Mobile app development internship for iOS and Android platforms.',
    features: ['React Native', 'Flutter', 'App Store Optimization', 'UI/UX Design'],
    duration: '3-6 months',
    level: 'B.Tech/M.Tech'
  }
]

const benefits = [
  { name: 'Live Projects', icon: '🚀' },
  { name: 'Industry Mentors', icon: '👨‍🏫' },
  { name: 'Certification', icon: '🏆' },
  { name: 'Placement Support', icon: '💼' },
  { name: 'Networking', icon: '🤝' },
  { name: 'Skill Development', icon: '📈' },
  { name: 'Research Opportunities', icon: '🔬' },
  { name: 'Career Guidance', icon: '🎯' }
]

export default function InternshipsPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-white py-20 border-b border-pink-100 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-rose-200 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-300 rounded-full opacity-25 animate-ping"></div>
          </div>
          
          <div className="container-custom flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="flex-1">
              <div className="inline-flex items-center space-x-2 bg-pink-100 border border-pink-200 rounded-full px-4 py-2 mb-6 animate-fade-in">
                <Users className="w-5 h-5 text-pink-600" />
                <span className="text-sm font-semibold text-pink-700">Internship & Talent Development</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
                Launch Your Tech Career with Real-World Experience
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
                Gain hands-on experience with industry experts, work on live projects, and build the skills that employers value. Perfect for B.Tech, M.Tech, and PhD students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#cta" className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-pink-600 to-pink-700 text-white font-bold shadow-lg hover:from-pink-700 hover:to-pink-800 transition-all duration-300 transform hover:scale-105">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href="#programs" className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-pink-600 text-pink-600 font-bold hover:bg-pink-50 transition-all duration-300">
                  Explore Programs
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="relative">
                    <GraduationCap className="w-40 h-40 text-pink-400 animate-pulse" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center animate-bounce">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center animate-pulse">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in-up">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-pink-100">Interns Placed</div>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div className="text-4xl font-bold mb-2">80%</div>
                <div className="text-pink-100">Placement Rate</div>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-pink-100">Partner Companies</div>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-pink-100">Mentor Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section id="programs" className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Internship Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our diverse range of internship programs designed to give you hands-on experience in cutting-edge technologies.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {internshipPrograms.map((program, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="text-pink-500 mb-4">{program.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-pink-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-pink-600 font-semibold">{program.duration}</span>
                    <span className="text-gray-500">{program.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What You'll Get</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="text-3xl mb-2">{benefit.icon}</div>
                  <div className="font-semibold text-gray-900">{benefit.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Internship Process</h2>
            <div className="grid md:grid-cols-6 gap-8">
              {[
                { icon: <Users className="w-6 h-6" />, title: 'Application', desc: 'Submit your application with resume and portfolio' },
                { icon: <CheckCircle className="w-6 h-6" />, title: 'Selection', desc: 'Technical assessment and interview process' },
                { icon: <GraduationCap className="w-6 h-6" />, title: 'Orientation', desc: 'Program introduction and mentor assignment' },
                { icon: <Zap className="w-6 h-6" />, title: 'Project Work', desc: 'Hands-on work on live industry projects' },
                { icon: <Award className="w-6 h-6" />, title: 'Certification', desc: 'Industry-recognized certification upon completion' },
                { icon: <Sparkles className="w-6 h-6" />, title: 'Placement', desc: 'Placement assistance and career guidance' }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4 group-hover:bg-pink-200 transition-colors duration-300">
                    <div className="text-pink-600">{step.icon}</div>
                  </div>
                  <div className="font-semibold text-gray-900 mb-2">{step.title}</div>
                  <div className="text-sm text-gray-600">{step.desc}</div>
                  {idx < 5 && (
                    <div className="hidden md:block w-full h-0.5 bg-pink-200 mt-8 relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-pink-400 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Our Internships?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Users className="w-8 h-8" />, title: 'Industry Experts', desc: 'Learn from professionals with years of experience' },
                { icon: <Shield className="w-8 h-8" />, title: 'Quality Assurance', desc: 'Rigorous quality standards and best practices' },
                { icon: <TrendingUp className="w-8 h-8" />, title: 'High Placement Rate', desc: '80% placement rate with top companies' },
                { icon: <Clock className="w-8 h-8" />, title: 'Flexible Schedule', desc: 'Part-time and full-time options available' }
              ].map((benefit, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-pink-600">{benefit.icon}</div>
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
                <div key={idx} className="bg-pink-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="font-semibold text-pink-700 mb-3 text-lg">{faq.q}</div>
                  <div className="text-gray-700 leading-relaxed">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
          <div className="container-custom max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">What Our Interns Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <Users className="w-10 h-10 text-pink-400 mr-4" />
                    <div>
                      <div className="text-lg font-semibold text-gray-900">{t.name}</div>
                      <div className="text-pink-600 text-sm">{t.degree}</div>
                    </div>
                  </div>
                  <div className="text-gray-700 mb-4 leading-relaxed">"{t.text}"</div>
                  <div className="flex items-center">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Career Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our internship program and gain the skills, experience, and connections you need to launch a successful tech career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-pink-600 font-bold shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="tel:+1234567890" className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-white text-white font-bold hover:bg-white hover:text-pink-600 transition-all duration-300">
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