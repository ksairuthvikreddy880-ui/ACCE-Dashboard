'use client'

import { Calendar, ChevronRight } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import { motion } from 'framer-motion'

const calendarHighlights = [
  {
    date: '15',
    month: 'MAR',
    title: 'Leadership Summit',
    type: 'Conference'
  },
  {
    date: '22',
    month: 'MAR',
    title: 'Networking Mixer',
    type: 'Social'
  },
  {
    date: '05',
    month: 'APR',
    title: 'Workshop Series',
    type: 'Education'
  }
]

export default function CalendarSection() {
  return (
    <section className="gradient-band px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12 section-divider">
            <h2 className="font-heading text-3xl font-semibold text-neutral-800 mb-4">
              Calendar Highlights
            </h2>
            <p className="font-body text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Stay updated with important dates and never miss an opportunity
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {calendarHighlights.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                className="bg-white border border-neutral-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex flex-col items-center">
                  <div className="bg-primary-50 rounded-lg p-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600 font-heading">
                        {item.date}
                      </div>
                      <div className="text-xs text-primary-500 font-medium tracking-wide">
                        {item.month}
                      </div>
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-neutral-800 mb-2">
                    {item.title}
                  </h3>
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
                    {item.type}
                  </span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <motion.button
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 text-neutral-700 font-medium rounded-lg hover:bg-neutral-50 transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-4 h-4" />
              View Full Calendar
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}