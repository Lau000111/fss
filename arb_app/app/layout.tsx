import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Inter as FontSans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontSans.variable}>

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            </ThemeProvider>

            
            </body>
    </html>
  )
}


