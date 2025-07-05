import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mahaworld - Software Services & Innovation',
  description: 'Leading software services company providing internships, innovation, research, and cutting-edge technology solutions across all tech domains.',
  keywords: 'software services, internships, innovation, research, technology, Mahaworld',
  authors: [{ name: 'Mahaworld' }],
  creator: 'Mahaworld',
  publisher: 'Mahaworld',
  robots: 'index, follow',
  openGraph: {
    title: 'Mahaworld - Software Services & Innovation',
    description: 'Leading software services company providing internships, innovation, research, and cutting-edge technology solutions.',
    url: 'https://mahaworld.com',
    siteName: 'Mahaworld',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://mahaworld.com/mahaworld_banner.png',
        width: 1200,
        height: 630,
        alt: 'Mahaworld - Software Services & Innovation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahaworld - Software Services & Innovation',
    description: 'Leading software services company providing internships, innovation, research, and cutting-edge technology solutions.',
    images: ['https://mahaworld.com/mahaworld_banner.png'],
  },
  metadataBase: new URL('https://mahaworld.com'),
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0ea5e9',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/mahaworld_logo_light.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Mahaworld',
              url: 'https://mahaworld.com',
              logo: 'https://mahaworld.com/mahaworld_logo_light.png',
              sameAs: [
                'https://linkedin.com/company/mahaworld',
                'https://twitter.com/mahaworld',
                'https://github.com/mahaworld',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://mahaworld.com',
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
} 