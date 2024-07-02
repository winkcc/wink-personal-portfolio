'use client'

import { SectionNames } from '@/lib/types'
import React, { useContext, useState } from 'react'

type ActiveSectionContextProviderProps = {
  activeSection: SectionNames
  setActiveSection: React.Dispatch<React.SetStateAction<SectionNames>>
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}
// 上下文
export const ActiveSectionContext = React.createContext<ActiveSectionContextProviderProps | null>(
  null
)

// 提供者
export default function ActiveSectionContextProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionNames>('Home')
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

// 去空
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)

  if (context === null) {
    throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider')
  }

  return context
}
