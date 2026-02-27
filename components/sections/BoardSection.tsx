'use client'

import { Users, Mail, Phone } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import { motion } from 'framer-motion'

const boardMembers = [
  {
    name: 'Er. Bheem Rao Jaligama',
    title: 'Chairman',
    phone: '9246502056',
    email: 'cruthidesigns@gmail.com'
  },
  {
    name: 'Er. S Mahender Reddy',
    title: 'Imm. Past Chairman',
    phone: '9246520410',
    email: 'asaconsultants.mahender@gmail.com'
  },
  {
    name: 'Er. C Ramesh',
    title: 'Vice Chairman',
    phone: '9849028573',
    email: 'info@rkengineers.co.in'
  },
  {
    name: 'Er. D S Jaya Prakash',
    title: 'Hon. Secretary',
    phone: '9849039491',
    email: 'primodesigns@rediffmail.com'
  },
  {
    name: 'Er. Rudra Amarnath Babu',
    title: 'Treasurer',
    phone: '9866085165, 9676060154',
    email: 'rudraamar@gmail.com'
  },
  {
    name: 'K. Raj Kumar',
    title: 'Vice President South',
    phone: '9949444442',
    email: 'rajkacharla@gmail.com'
  },
  {
    name: 'Er. A Kashiram',
    title: 'Secretary General (Elect)',
    phone: '9849601428',
    email: 'kashiadepu@gmail.com'
  }
]

const mcMembers = [
  {
    name: 'Er Chiluveru Purushotham',
    title: 'MC MEMBER',
    qualification: 'B.E. (Civil), M.Tech. (Geo-Tech)',
    company: 'M/S Saketha Rama Innovation Pvt Ltd',
    address: 'Plot no 118, Road no 44, CBI COLONY, Jubilee Hills, Hyderabad 500081',
    phone: '8096910234, 7075456321',
    email: 'chpm60@gmail.com'
  },
  {
    name: 'DR. V MALLIKARJUNA REDDY',
    title: 'MC MEMBER',
    qualification: 'M.Tech, Ph.D.',
    company: 'Gokaraju Rangaraju Institute of Engineering and Technology',
    phone: '9440596438',
    email: 'evmreddyin@yahoo.co.in'
  },
  {
    name: 'Er K V Ramanaiah',
    title: 'MC MEMBER',
    qualification: 'M Tech (Structures)',
    company: 'Gowthamy Engineering Service',
    phone: '9848046602',
    email: 'kv_r@yahoo.com'
  },
  {
    name: 'Er Sudhakar Akkala',
    title: 'MC MEMBER',
    qualification: 'B.E Civil (Osm), CCQM (NICMAR)',
    company: 'SAS Developers & Consultants',
    details: 'Building Contracts, Liaisoning, Consultancy services',
    phone: '9108364652, 7892284548',
    email: 'sudhakar.a@sasdev.co.in, info@sasdev.co.in'
  },
  {
    name: 'Er Thirunagari Srikanth',
    title: 'MC MEMBER',
    qualification: 'M. Tech (Structures)',
    company: 'M/s Essen Consultants Civil & Structural Engineers',
    phone: '9849797112',
    email: 'essenmail@gmail.com'
  },
  {
    name: 'Er Archana Kalyala',
    title: 'MC MEMBER',
    qualification: 'B. Tech',
    company: 'Sri Advaya engineering consultants, Structural Engineers',
    phone: '8885507939',
    email: 'archana@saec.in'
  }
]

export default function BoardSection() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12 section-divider">
            <h2 className="font-heading text-3xl font-semibold text-neutral-800 mb-4">
              Office Bearers of ACCE(I) Hyderabad Centre
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
                <h3 className="font-heading text-lg font-semibold text-neutral-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium text-sm mb-2">
                  {member.title}
                </p>
                {member.phone && (
                  <p className="text-neutral-600 text-sm mb-1">
                    {member.phone}
                  </p>
                )}
                {member.company && (
                  <p className="text-neutral-500 text-sm mb-1">
                    {member.company}
                  </p>
                )}
                {member.address && (
                  <p className="text-neutral-500 text-xs mb-1 leading-relaxed">
                    {member.address}
                  </p>
                )}
                {member.details && (
                  <p className="text-neutral-500 text-sm mb-1">
                    {member.details}
                  </p>
                )}
                <p className="text-neutral-700 text-sm mt-2">
                  {member.email}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center mb-12 section-divider">
            <h2 className="font-heading text-3xl font-semibold text-neutral-800 mb-4">
              MC Members of ACCE(I) Hyderabad Centre
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {mcMembers.map((member, index) => (
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
                <h3 className="font-heading text-lg font-semibold text-neutral-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium text-sm mb-2">
                  {member.title}
                </p>
                {member.qualification && (
                  <p className="text-neutral-600 text-sm mb-1">
                    {member.qualification}
                  </p>
                )}
                {member.company && (
                  <p className="text-neutral-500 text-sm mb-1">
                    {member.company}
                  </p>
                )}
                {member.address && (
                  <p className="text-neutral-500 text-xs mb-1 leading-relaxed">
                    {member.address}
                  </p>
                )}
                {member.details && (
                  <p className="text-neutral-500 text-sm mb-1">
                    {member.details}
                  </p>
                )}
                {member.phone && (
                  <p className="text-neutral-600 text-sm mb-1">
                    {member.phone}
                  </p>
                )}
                <p className="text-neutral-700 text-sm mt-2">
                  {member.email}
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
                <span className="text-neutral-700">info@accehyd.org</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 text-primary-600" />
                <span className="text-neutral-700">9849039491</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}