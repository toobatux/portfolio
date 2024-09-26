import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tomkrusinski.com',
      lastModified: new Date(),
    },
    {
      url: 'https://tomkrusinski.com/backblog',
      lastModified: new Date(),
    },
  ]
}