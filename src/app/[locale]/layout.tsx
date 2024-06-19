import ThemeSwitch from '@/components/ThemeTwich'
import WidgetWrapper from '@/components/WidgetWrapper'
import Article from '@/components/article'
import Header from '@/components/header'
import Scroll from '@/components/scroll'
import ThemeContextProvider from '@/context/theme-context'
import type { Metadata } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wink | Personal Portfolio',
  description: 'Learn from Joy'
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-gray-50`}>
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#8bc4e5ff] blur-[10rem] sm:w-[68.75rem] dark:bg-[#5b3b3c]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#433f68]"></div>
        <NextIntlClientProvider messages={messages}>
          <ThemeContextProvider>
            <Scroll />
            <Header />
            <Article />
            {children}
            <WidgetWrapper>
              <ThemeSwitch />
            </WidgetWrapper>
          </ThemeContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
