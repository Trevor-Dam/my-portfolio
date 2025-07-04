/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Trevor Damoyi's Portfolio",
  description: "The personal page of Trevor Damoyi, an aspiring " +
  "Software Engineer from South Africa. I always ensure that " + 
  "I deliver quality projects for my clients"
  
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Trevor Damoyi's Webpage</title>
        <meta charSet="UTF-8" />
        <meta name="description" 
        content="The personal page of Trevor Damoyi, an aspiring 
        Software Engineer from South Africa. I always ensure that 
        I deliver quality projects for my clients" />
        <meta name="keywords"
        content="HTML, CSS, JavaScript" />
        <meta name="author" content="Trevor Damoyi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>{children}</body>
      <footer className="text-center p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <p>&copy; {new Date().getFullYear()} Trevor Damoyi. All rights reserved.</p>
      </footer>
    </html>
  )
}
