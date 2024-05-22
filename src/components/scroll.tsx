'use client'
import { motion, useScroll, useSpring } from 'framer-motion'

function Scroll() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 h-1 origin-left bg-[#f0a06fd8] blur-[1px]  "
      style={{ scaleX: scrollYProgress }}
    />
  )
}

export default Scroll
