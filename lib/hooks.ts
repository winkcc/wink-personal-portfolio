import { useActiveSectionContext } from '@/context/active-section-context'
import type { SectionNames } from '@/lib/types'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export function useSectionInView(sectionName: SectionNames, threshold: number = 0.75) {
  const { ref, inView } = useInView({
    threshold
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()
  useEffect(() => {
    inView && Date.now() - timeOfLastClick > 1000 && setActiveSection(sectionName)
  }, [inView, sectionName, timeOfLastClick, setActiveSection])

  return { ref }
}
