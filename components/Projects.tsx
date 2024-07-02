'use client'

import SectionHeading from '@/components/Section-Heading'
import { projectsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.2)

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
      <div>
        <SectionHeading>My projects</SectionHeading>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project}></Project>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

// 可以单独放到组件中, 这样可以去除 use client
function Project({ title, description, tags, imageUrl }: (typeof projectsData)[number]) {
  const ref = useRef<HTMLDivElement>(null)
  // offset: [ 滚动条从0到1, 1.33表示超出0.33 才算做1]
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })
  // project  缩放 透明度变换
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <motion.div
      className="group mb-3 last:mb-0 sm:mb-8"
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
    >
      <section className="relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 sm:h-[20rem] sm:pr-8 sm:group-even:pl-8 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
        <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition
            group-even:-left-40
            group-even:right-[initial]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            group-hover:scale-[1.04]
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2 sm:block"
        />
      </section>
    </motion.div>
  )
}
