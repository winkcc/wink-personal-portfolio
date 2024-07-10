import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ActiveSectionContextProvider from '@/context/active-section-context'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wink | Personal Portfolio',
  description:
    'Wink is a Backend Developer with 2 years of experience in building scalable and secure web applications.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // scroll-smooth 滚动条平滑导航
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gary-50 relative h-[4100px] pt-28 text-gray-950 sm:pt-36`}
      >
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
