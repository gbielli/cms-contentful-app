import Affilation from "@/app/components/affilation";
import CoverImage from "@/app/components/cover-image";
import DateComponent from "@/app/components/date";
import MoreStories from "@/app/components/more-stories";
import { getAllPosts, getPostAndMorePosts } from "@/lib/api";
import { Markdown } from "@/lib/markdown";
import { draftMode } from "next/headers";

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled);

  return {
    metadataBase: new URL("http://localhost:3000/articles"),
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/${post.slug}`,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage.url,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    articleSection: post.category.name,
    datePublished: "2015-09-20",
    dateModified: "2015-09-20",
    publisher: {
      "@type": "Organization",
      name: "Le mec rasoir",
      logo: {
        "@type": "ImageObject",
        url: "https://google.com/logo.jpg",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-5">
        <article className="mx-auto">
          <div className="text-center mb-10 flex items-center gap-3 justify-center mx-auto ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#6B7280"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            <div className="">
              <a className=" text-gray-500" href="/articles">
                Retour sur les articles
              </a>
            </div>
          </div>
          <div className="title max-w-3xl mx-auto">
            <div className="text-center py-4">
              <div className="max-w-2xl mx-auto border inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-500">
                {post.category && <p>{post.category.name}</p>}
              </div>
            </div>
            <h1 className="text-center text-5xl font-medium mb-4">
              {post.title}
            </h1>
            <p className="text-xl md:text-xl text-center font-archivo ">
              {post.excerpt && post.excerpt}
            </p>
          </div>

          <div className="flex justify-center gap-5 mt-10">
            <div className="flex gap-3 justify-center items-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-slate-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <p className="text-slate-500 text-center  italic">
                publié par{" "}
                <span className="font-semibold">{post.author.name}</span>
              </p>
            </div>
            <div className="flex gap-3 justify-center items-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-slate-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p className="text-slate-500 text-center  italic">
                {" "}
                mis à jour le{" "}
                <DateComponent dateString={post.sys.publishedAt} />
              </p>
            </div>
          </div>

          <div className="mb-8 md:mb-16 sm:mx-0 ">
            <CoverImage
              title={post.title}
              url={post.coverImage.url}
              width={800}
              height={800}
            />
          </div>

          {/* <Avantages post={post} /> */}

          <div className="max-w-3xl mx-auto ">
            <div className="prose">
              <Markdown post={post} />
            </div>
          </div>

          <Affilation post={post} />
        </article>
        <hr className="border-accent-2 my-10" />
        <MoreStories morePosts={morePosts} asLink={false} />
      </div>
    </>
  );
}
