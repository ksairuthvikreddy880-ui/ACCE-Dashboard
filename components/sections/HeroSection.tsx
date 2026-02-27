'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'

interface HeroSectionProps {
  onExploreApp: () => void
  showFullApp: boolean
}

export default function HeroSection({ onExploreApp, showFullApp }: HeroSectionProps) {
  return (
    <section className={`gradient-band px-6 transition-all duration-1000 ${showFullApp ? 'pt-16 pb-20' : 'pt-20 pb-32 min-h-screen flex items-center'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <motion.h1 
            className="font-heading text-4xl md:text-6xl font-semibold text-neutral-800 mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
          >
            Welcome to Your
            <span className="block text-primary-600">Professional Community</span>
          </motion.h1>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <p className="font-body text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Connect, collaborate, and grow with industry leaders. Access exclusive events, 
            resources, and networking opportunities designed for professionals like you.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          {!showFullApp ? (
            <motion.button
              onClick={onExploreApp}
              className="group inline-flex items-center gap-3 px-10 py-4 bg-primary-600 text-white font-medium text-lg rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles className="w-5 h-5" />
              Explore App
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </motion.button>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Events
              </motion.button>
              <motion.button
                className="px-8 py-3 border border-neutral-300 text-neutral-700 font-medium rounded-lg hover:bg-neutral-50 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Directory
              </motion.button>
            </div>
          )}
        </AnimatedSection>

        {!showFullApp && (
          <AnimatedSection delay={0.6}>
            <motion.div
              className="mt-16 text-neutral-400"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-sm font-medium tracking-wide">Discover what awaits you</p>
            </motion.div>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}