import { Brain, Cpu, Database, CheckCircle, Sparkles, ArrowRight, Zap, Globe, Target, BarChart3, Eye, MessageSquare, TrendingUp, Shield, Clock, Users, Award } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'AI & ML Solutions | Mahaworld',
  description: 'Custom AI/ML model development, AI agents, automation, and advanced analytics for research and business. NLP, computer vision, and more.'
}

const faqs = [
  {
    q: 'What types of AI/ML solutions do you offer?',
    a: 'We offer custom AI/ML models, natural language processing, computer vision, predictive analytics, AI agents, and automation solutions tailored to your specific needs. Our expertise spans from simple machine learning models to complex deep learning architectures.'
  },
  {
    q: 'Do you help with data preparation?',
    a: 'Yes, we provide comprehensive data preprocessing, cleaning, feature engineering, and data augmentation to ensure your AI models perform optimally. We handle structured and unstructured data from various sources.'
  },
  {
    q: 'Can you integrate AI into existing systems?',
    a: 'Absolutely! We specialize in integrating AI solutions into your existing workflows and systems with minimal disruption. We provide APIs, microservices, and cloud-based solutions that seamlessly connect with your current infrastructure.'
  },
  {
    q: 'What industries do you serve?',
    a: 'We serve healthcare, finance, retail, manufacturing, education, and research sectors with custom AI solutions. Each industry has unique challenges, and we tailor our approach accordingly.'
  },
  {
    q: 'How do you ensure AI model accuracy?',
    a: 'We use rigorous testing methodologies, cross-validation, and continuous monitoring to ensure model accuracy. Our models undergo extensive validation on diverse datasets before deployment.'
  },
  {
    q: 'Do you provide ongoing AI model maintenance?',
    a: 'Yes, we offer comprehensive maintenance services including model retraining, performance monitoring, and updates to ensure your AI solutions remain effective and up-to-date.'
  }
]

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    company: 'HealthTech Pro',
    text: 'Mahaworld built an AI-powered diagnostic system that improved our accuracy by 40%. Their expertise in healthcare AI is exceptional!',
    rating: 5
  },
  {
    name: 'Rajesh Kumar',
    company: 'FinTech Solutions',
    text: 'The AI automation they implemented saved us 60% in operational costs. Their understanding of financial regulations was impressive.',
    rating: 5
  },
  {
    name: 'Maria Rodriguez',
    company: 'Retail Analytics Inc.',
    text: 'Their predictive analytics solution transformed our inventory management. Sales increased by 25% while reducing waste by 30%.',
    rating: 5
  }
]

const aiServices = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'Custom AI Model Development',
    description: 'Tailored machine learning and deep learning models designed specifically for your business needs and data characteristics.',
    features: ['Neural Networks', 'Deep Learning', 'Transfer Learning', 'Model Optimization']
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Natural Language Processing',
    description: 'Advanced text analysis, sentiment analysis, chatbots, and language understanding systems.',
    features: ['Text Classification', 'Sentiment Analysis', 'Chatbots', 'Language Translation']
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: 'Computer Vision',
    description: 'Image and video analysis, object detection, facial recognition, and visual AI solutions.',
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analysis']
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Predictive Analytics',
    description: 'Data-driven insights and forecasting models to predict trends and make informed decisions.',
    features: ['Time Series Analysis', 'Regression Models', 'Forecasting', 'Risk Assessment']
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'AI Automation',
    description: 'Intelligent process automation, workflow optimization, and robotic process automation.',
    features: ['Process Automation', 'Workflow Optimization', 'RPA Integration', 'Smart Scheduling']
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'AI Agents & Assistants',
    description: 'Intelligent virtual assistants and autonomous agents for customer service and business operations.',
    features: ['Virtual Assistants', 'Customer Service Bots', 'Autonomous Agents', 'Smart Recommendations']
  }
]

const technologies = [
  { name: 'TensorFlow', icon: '🤖' },
  { name: 'PyTorch', icon: '🔥' },
  { name: 'Scikit-learn', icon: '📊' },
  { name: 'OpenAI GPT', icon: '🧠' },
  { name: 'Computer Vision', icon: '👁️' },
  { name: 'NLP Libraries', icon: '💬' },
  { name: 'Cloud AI', icon: '☁️' },
  { name: 'Edge AI', icon: '⚡' }
]

export default function AIMLServicePage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-white py-20 border-b border-purple-100 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-300 rounded-full opacity-25 animate-ping"></div>
          </div>
          
          <div className="container-custom flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="flex-1">
              <div className="inline-flex items-center space-x-2 bg-purple-100 border border-purple-200 rounded-full px-4 py-2 mb-6 animate-fade-in">
                <Brain className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-semibold text-purple-700">AI & ML Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
                Advanced AI & Machine Learning Solutions
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
                Transform your business with cutting-edge AI and machine learning. From custom models to intelligent automation, we deliver solutions that drive innovation, efficiency, and competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#cta" className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold shadow-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href="#services" className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-purple-600 text-purple-600 font-bold hover:bg-purple-50 transition-all duration-300">
                  Explore Services
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="relative">
                    <Brain className="w-40 h-40 text-purple-400 animate-pulse" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center animate-bounce">
                  <Cpu className="w-8 h-8 text-yellow-600" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center animate-pulse">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in-up">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-purple-100">AI Models Deployed</div>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-purple-100">Accuracy Rate</div>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-purple-100">Industries Served</div>
              </div>
              <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-purple-100">AI Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our AI & ML Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI and machine learning solutions designed to transform your business operations and drive innovation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="text-purple-500 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
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
        <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our AI Development Process</h2>
            <div className="grid md:grid-cols-6 gap-8">
              {[
                { icon: <Brain className="w-6 h-6" />, title: 'Requirement Analysis', desc: 'Understanding your business needs and AI objectives' },
                { icon: <Database className="w-6 h-6" />, title: 'Data Preparation', desc: 'Cleaning, preprocessing, and feature engineering' },
                { icon: <Cpu className="w-6 h-6" />, title: 'Model Development', desc: 'Building and training custom AI models' },
                { icon: <CheckCircle className="w-6 h-6" />, title: 'Testing & Validation', desc: 'Rigorous testing and performance validation' },
                { icon: <Zap className="w-6 h-6" />, title: 'Deployment', desc: 'Seamless integration and deployment' },
                { icon: <Sparkles className="w-6 h-6" />, title: 'Monitoring & Optimization', desc: 'Continuous monitoring and model improvement' }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <div className="text-purple-600">{step.icon}</div>
                  </div>
                  <div className="font-semibold text-gray-900 mb-2">{step.title}</div>
                  <div className="text-sm text-gray-600">{step.desc}</div>
                  {idx < 5 && (
                    <div className="hidden md:block w-full h-0.5 bg-purple-200 mt-8 relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Our AI Solutions?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Target className="w-8 h-8" />, title: 'Custom Solutions', desc: 'Tailored AI models designed specifically for your business needs' },
                { icon: <Shield className="w-8 h-8" />, title: 'Secure & Compliant', desc: 'Enterprise-grade security with industry compliance standards' },
                { icon: <TrendingUp className="w-8 h-8" />, title: 'Scalable Architecture', desc: 'AI solutions that grow with your business requirements' },
                { icon: <Clock className="w-8 h-8" />, title: 'Fast Implementation', desc: 'Quick deployment with minimal disruption to operations' }
              ].map((benefit, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-purple-600">{benefit.icon}</div>
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
                <div key={idx} className="bg-purple-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="font-semibold text-purple-700 mb-3 text-lg">{faq.q}</div>
                  <div className="text-gray-700 leading-relaxed">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
          <div className="container-custom max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <Brain className="w-10 h-10 text-purple-400 mr-4" />
                    <div>
                      <div className="text-lg font-semibold text-gray-900">{t.name}</div>
                      <div className="text-purple-600 text-sm">{t.company}</div>
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
        <section id="cta" className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and machine learning solutions can drive innovation and efficiency in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-purple-600 font-bold shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="tel:+1234567890" className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-white text-white font-bold hover:bg-white hover:text-purple-600 transition-all duration-300">
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