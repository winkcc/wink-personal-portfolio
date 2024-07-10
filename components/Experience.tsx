'use client'

import SectionHeading from '@/components/Section-Heading'
import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function Experience() {
  const { ref } = useSectionInView('Experience')
  const variants = {
    left: {
      hidden: { x: -200, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
    },
    right: {
      hidden: { x: 200, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
    }
  }

  return (
    <section id="experience" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="#e9e9ea">
        {experiencesData.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={variants[index % 2 === 0 ? 'right' : 'left']}
            className="mb-20"
          >
            <VerticalTimelineElement
              position={index % 2 === 0 ? 'left' : 'right'}
              visible={true}
              contentStyle={{
                background: '#f3f4f6',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem'
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid #9ca3af'
              }}
              date={item.date}
              icon={<>{item.icon}</>}
              iconStyle={{
                background: 'white',
                fontSize: '1.5rem'
              }}
            >
              <h3 className="font-bold capitalize">{item.title}</h3>
              <p className="!mt-0 font-normal">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </motion.div>
        ))}
      </VerticalTimeline>
    </section>
  )
}
