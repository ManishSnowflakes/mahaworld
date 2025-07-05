import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://mahaworld.com'
  const posts = [
    {
      title: 'The Future of AI in Software Development',
      description: 'Exploring how artificial intelligence is revolutionizing the way we build and deploy software applications.',
      date: '2024-12-15',
      url: `${baseUrl}/blog/ai-software-development`,
    },
    {
      title: 'Building Scalable Cloud Architecture',
      description: 'Best practices for designing and implementing cloud-native applications that scale with your business.',
      date: '2024-12-12',
      url: `${baseUrl}/blog/cloud-architecture`,
    },
    {
      title: 'Cybersecurity Trends for 2025',
      description: 'Stay ahead of emerging threats with our comprehensive guide to cybersecurity best practices.',
      date: '2024-12-10',
      url: `${baseUrl}/blog/cybersecurity-trends-2025`,
    },
  ]

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Mahaworld Blog</title>
    <description>Latest insights, trends, and innovations from Mahaworld</description>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${posts
      .map(
        (post) => `
    <item>
      <title>${post.title}</title>
      <description>${post.description}</description>
      <link>${post.url}</link>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>${post.url}</guid>
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
} 