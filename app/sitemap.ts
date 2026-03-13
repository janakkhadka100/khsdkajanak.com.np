import type { MetadataRoute } from "next";
import { toolLandingSlugs } from "@/data/toolLandings";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://khadkajanak.com.np";

  const routes = [
    "",
    "/about",
    "/vision",
    "/projects",
    "/media",
    "/blog",
    "/ai-tools",
    "/astrology",
    "/contact",
    "/membership",
  ];

  const main = routes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const toolPages = toolLandingSlugs.map((slug) => ({
    url: `${base}/tools/${slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...main, ...toolPages];
}
