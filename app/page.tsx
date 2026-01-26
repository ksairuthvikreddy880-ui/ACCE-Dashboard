'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from '@/components/sections/HeroSection'
import EventsSection from '@/components/sections/EventsSection'
import CalendarSection from '@/components/sections/CalendarSection'
import BoardSection from '@/components/sections/BoardSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  const [showFullApp, setShowFullApp] = useState(false)

  const handleExploreApp = () => {
    setShowFullApp(true)
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      <HeroSection onExploreApp={handleExploreApp} showFullApp={showFullApp} />
      
      <AnimatePresence>
        {showFullApp && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
          >
            <EventsSection />
            <CalendarSection />
            <BoardSection />
            <ContactSection />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  )
}