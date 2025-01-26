import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tomkrusinski.com',
      lastModified: new Date(),
    },
    {
      url: 'https://tomkrusinski.com/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://tomkrusinski.com/backblog',
      lastModified: new Date(),
    },
    {
      url: 'https://tomkrusinski.com/goyangi',
      lastModified: new Date(),
    },
    {
      url: 'https://tomkrusinski.com/watchtower',
      lastModified: new Date(),
    },
    {
      url: 'https://tomkrusinski.com/studypal',
      lastModified: new Date(),
    },
  ]
}