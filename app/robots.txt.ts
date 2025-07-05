import { NextResponse } from 'next/server'

export async function GET() {
  const content = `User-agent: *\nAllow: /\nSitemap: https://mahaworld.com/sitemap.xml\n`;
  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
} 