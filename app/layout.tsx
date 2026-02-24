import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})
const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'The Reserve | Fort Worth\'s Premier Cigar Lounge',
  description:
    'Premium cigars, rare spirits, and refined company in Fort Worth\'s most distinguished lounge. Experience timeless elegance at The Reserve.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_playfair.variable} ${_inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
