// RootLayout.js
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Navbar/page'
import Footer from './Footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Google Test App',
  description: 'Created By Azfar Suhail',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='pt-16 bg-gradient-to-r from-slate-300 to-slate-500'>
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

