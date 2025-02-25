import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tomkrusinski.com',
      lastModified: new Date(),
    },
    {
      url: 'https://tomkrusinski.com/work',
      lastModified: new Date(),
    },
    {
      url: 'https://tomkrusinski.com/work/backblog',
      lastModified: new Date(),
    },
    {
      url: 'https://tomkrusinski.com/work/goyangi',
      lastModified: new Date(),
    },
    {
      url: 'https://tomkrusinski.com/work/watchtower',
      lastModified: new Date(),
    },
    {
      url: 'https://tomkrusinski.com/work/studypal',
      lastModified: new Date(),
    },
  ]
}