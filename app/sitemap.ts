import { MetadataRoute } from 'next';
import { SOLUTIONS_DATA } from '@/lib/data/solutionsData';
import { INDUSTRIES_DATA } from '@/lib/data/industriesData';
import { CASE_STUDIES_DATA } from '@/lib/data/projectsData';
import { INSIGHTS_DATA } from '@/lib/data/insightsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://upt-plus.com';
  const currentDate = new Date();

  // Core Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: currentDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/solutions`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/managed-services`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/partners`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/capabilities`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/insights`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Dynamic Solution Routes
  const solutionRoutes: MetadataRoute.Sitemap = Object.values(SOLUTIONS_DATA).map((sol) => ({
    url: `${baseUrl}/solutions/${sol.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Dynamic Industry Routes
  const industryRoutes: MetadataRoute.Sitemap = Object.values(INDUSTRIES_DATA).map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Dynamic Case Studies
  const projectRoutes: MetadataRoute.Sitemap = CASE_STUDIES_DATA.map((study) => ({
    url: `${baseUrl}/projects/${study.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Dynamic Insights
  const insightRoutes: MetadataRoute.Sitemap = INSIGHTS_DATA.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...solutionRoutes,
    ...industryRoutes,
    ...projectRoutes,
    ...insightRoutes,
  ];
}
