'use client'

import { Calendar, MapPin, Users, Clock } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import EmptyState from '../ui/EmptyState'
import { motion } from 'framer-motion'

const upcomingEvents = [
  {
    id: 1,
    title: 'Annual Leadership Summit',
    date: 'March 15, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Grand Conference Center',
    attendees: 150,
    type: 'Conference'
  },
  {
    id: 2,
    title: 'Networking Mixer',
    date: 'March 22, 2024',
    time: '6:00 PM - 9:00 PM',
    location: 'Downtown Club',
    attendees: 75,
    type: 'Networking'
  }
]

export default function EventsSection() {
  const hasEvents = upcomingEvents.length > 0

  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12 section-divider">
            <h2 className="font-heading text-3xl font-semibold text-neutral-800 mb-4">
              Upcoming Events
            </h2>
            <p className="font-body text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Join us for exclusive events designed to advance your career and expand your network
            </p>
          </div>
        </AnimatedSection>

        {hasEvents ? (
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <AnimatedSection key={event.id} delay={index * 0.1}>
                <motion.div
                  className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-accent-100 text-accent-700 text-xs font-medium rounded-full">
                          {event.type}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-3">
                        {event.title}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-neutral-400" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-neutral-400" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-neutral-400" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-neutral-400" />
                          <span>{event.attendees} attending</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <motion.button
                        className="px-6 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Register
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection delay={0.2}>
            <EmptyState
              icon={<Calendar className="w-full h-full" />}
              title="No upcoming events"
              description="Check back soon for exciting new events and networking opportunities"
            />
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}