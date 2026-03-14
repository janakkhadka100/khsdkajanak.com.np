import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { toolLandingSlugs } from "@/data/toolLandings";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://khadkajanak.com.np";

  const routes = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.9 },
    { path: "/profile", priority: 0.9 },
    { path: "/impact", priority: 0.9 },
    { path: "/timeline", priority: 0.8 },
    { path: "/vision", priority: 0.8 },
    { path: "/projects", priority: 0.9 },
    { path: "/media", priority: 0.8 },
    { path: "/media/archive", priority: 0.8 },
    { path: "/media/photos", priority: 0.8 },
    { path: "/blog", priority: 0.9 },
    { path: "/public-desk", priority: 0.9 },
    { path: "/ai-tools", priority: 0.9 },
    { path: "/astrology", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
    { path: "/membership", priority: 0.8 },
  ];

  const main = routes.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
  }));

  const toolPages = toolLandingSlugs.map((slug) => ({
    url: `${base}/tools/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const customTools = [
    {
      url: `${base}/tools/nivedan-letter-architect`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${base}/tools/speech-program-desk`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
  ];

  const blogPosts = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...main, ...toolPages, ...customTools, ...blogPosts];
}
