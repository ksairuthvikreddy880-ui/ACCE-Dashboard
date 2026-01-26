'use client'

import { Users, Mail, Phone } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import { motion } from 'framer-motion'

const boardMembers = [
  {
    name: 'Sarah Johnson',
    title: 'President',
    company: 'Tech Innovations Inc.',
    image: '/api/placeholder/80/80'
  },
  {
    name: 'Michael Chen',
    title: 'Vice President',
    company: 'Global Solutions Ltd.',
    image: '/api/placeholder/80/80'
  },
  {
    name: 'Emily Rodriguez',
    title: 'Secretary',
    company: 'Strategic Partners',
    image: '/api/placeholder/80/80'
  }
]

export default function BoardSection() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12 section-divider">
            <h2 className="font-heading text-3xl font-semibold text-neutral-800 mb-4">
              Board of Directors
            </h2>
            <p className="font-body text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Meet the dedicated leaders guiding our association's vision and growth
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {boardMembers.map((member, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                className="text-center group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mx-auto flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <h3 className="font-heading text-lg font-semibold text-neutral-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium text-sm mb-1">
                  {member.title}
                </p>
                <p className="text-neutral-500 text-sm">
                  {member.company}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="bg-neutral-50 rounded-xl p-8 text-center">
            <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-4">
              Association Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 text-primary-600" />
                <span className="text-neutral-700">info@association.org</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 text-primary-600" />
                <span className="text-neutral-700">(555) 123-4567</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}