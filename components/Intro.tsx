'use client'

import avatarImage from '@/public/avatar.png'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'

export default function Intro() {
  return (
    <section id="home" className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: 0.2
          }}
        >
          <Image
            src={avatarImage}
            alt="protrait"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
          ></Image>
          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7
            }}
          >
            👋
          </motion.span>
        </motion.div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 100 }}
      >
        Hello! My name is Wei kang. I&apos;m a backend developer with
        <span className="font-bold"> 2 years</span> of experience. I really enjoy the convenience
        that programming brings me. My programming focus is most on
        <span className="font-bold"> elegant code</span> and
        <span className="font-bold"> best performance</span>.
        <motion.div
          className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
          >
            Contact me here{' '}
            <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
          </Link>
          <a
            className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"
            href="/CV.pdf"
            download
          >
            Download CV
            <HiDownload className="group-hover:translate-y-0.3 opacity-60 transition" />
          </a>

          <a
            className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 shadow transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
            href="https://linkedin.com"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700 shadow transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
            href="https://github.com"
            target="_blank"
          >
            <BsGithub />
          </a>
        </motion.div>
      </motion.h1>
    </section>
  )
}
