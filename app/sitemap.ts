import { MetadataRoute } from "next";
import { draftMode } from "next/headers";
import { getHomepagePosts } from "../lib/api";

const baseUrl = "http://familytribe.fr";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { isEnabled } = draftMode();
  const allPosts = await getHomepagePosts(isEnabled);

  const postEntries = allPosts.map((post) => ({
    url: `${baseUrl}/articles/${post.slug}`,
    lastModified: new Date(post.sys.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 1,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...postEntries,
  ];
}
