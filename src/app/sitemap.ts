import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://acme.com',
      lastModified: new Date(),
    },
    {
      url: 'https://acme.com/tos',
      lastModified: new Date(),
    },
    {
      url: 'https://acme.com/privacy-policy',
      lastModified: new Date(),
    },
  ];
}
