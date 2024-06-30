'use client'

import SectionHeading from '@/components/Section-Heading'
import { motion } from 'framer-motion'
import React from 'react'

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Since I chose <span className="font-medium"> Computer Science and Technology</span> as my
        major, I decided to pursue my passion for programming. I have completed my undergraduate
        studies and learned <span className="font-medium">backend development</span>.{' '}
        <span className="italic">My favorite part of programming</span> is the problem-solving
        aspect. I <span className="underline">love</span> the feeling of finally figuring out a
        solution to a problem. My core stack is{' '}
        <span className="font-medium">Node.js, TypeScript, Nest.js and Java</span>. I am also
        familiar with PostgresSQL and Redis. I am currently looking for a{' '}
        <span className="font-medium">backend development </span>
        position in <span className="font-medium">Hangzhou</span>
      </p>
    </motion.section>
  )
}
