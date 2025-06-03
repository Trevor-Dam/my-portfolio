/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'

const inter = Inter({
  subsets: ["latin"]
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
        <meta name="viewport"
        content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>{children}</body>
      <footer id="footer">
        <div id="sm_links">
            <a id="sm_linkedin" href="skillreactor.io" title="LinkedIn">
                <Image src="/linkedin.png" alt="My LinkedIn Profile" width={50} height={50}/>
            </a>
        </div>
        
    </footer>
    </html>
  )
}
