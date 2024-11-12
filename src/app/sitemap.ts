import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://nonick-js.com',
      lastModified: new Date(),
    },
    {
      url: 'https://nonick-js.com/tos',
      lastModified: new Date(),
    },
    {
      url: 'https://nonick-js.com/privacy-policy',
      lastModified: new Date(),
    },
  ];
}
