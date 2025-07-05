import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://mahaworld.com'
  const urls = [
    '',
    '/services',
    '/portfolio',
    '/about',
    '/team',
    '/internships',
    '/innovation',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms',
  ]
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map(
      (url) => `<url><loc>${baseUrl}${url}</loc></url>`
    )
    .join('')}
</urlset>`
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
} 