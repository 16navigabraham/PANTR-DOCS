import type { Metadata } from 'next'
import { Outfit, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { Layout, Navbar, Footer } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Pantr Docs',
    template: '%s | Pantr Docs',
  },
  description: 'Technical documentation for Pantr — a Telegram-first AI trading assistant for Solana and Base.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-snippet': -1,
      'max-image-preview': 'none',
    },
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pageMap = await getPageMap()

  return (
    <html
      lang="en"
      dir="ltr"
      className={`${outfit.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Layout
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/16navigabraham/PANTR-DOCS/tree/main/content"
          nextThemes={{ defaultTheme: 'dark' }}
          navbar={
            <Navbar
              logo={
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.25rem' }}>Pantr Docs</span>
                </span>
              }
              projectLink="https://github.com/16navigabraham/pantr-server"
            />
          }
          footer={
            <Footer>
              <span>
                {new Date().getFullYear()} Pantr — Built by{' '}
                <a href="mailto:ZeLabsS365@gmail.com" target="_blank" rel="noopener">ZeLabs</a>
              </span>
            </Footer>
          }
          feedback={{ content: null }}
          editLink={null}
        >
          {children}
        </Layout>
        <Analytics />
      </body>
    </html>
  )
}
