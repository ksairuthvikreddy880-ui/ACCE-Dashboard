'use client'

import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section className="gradient-band px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12 section-divider">
            <h2 className="font-heading text-3xl font-semibold text-neutral-800 mb-4">
              Get in Touch
            </h2>
            <p className="font-body text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Have questions or need assistance? We're here to help you make the most of your membership
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-6">
                Contact Information
              </h3>
              
              <motion.div
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors duration-200"
                whileHover={{ x: 4 }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-800 mb-1">Email</h4>
                  <p className="text-neutral-600 text-sm">info@association.org</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors duration-200"
                whileHover={{ x: 4 }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-800 mb-1">Phone</h4>
                  <p className="text-neutral-600 text-sm">(555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors duration-200"
                whileHover={{ x: 4 }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-800 mb-1">Address</h4>
                  <p className="text-neutral-600 text-sm">
                    123 Professional Way<br />
                    Business District, NY 10001
                  </p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-6">
                Quick Message
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}