import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import PostPreview from "./post-preview";

export default function MoreStories({
  morePosts,
  asLink,
}: {
  morePosts: any[];
  asLink: boolean;
}) {
  return (
    <section className="pb-20">
      <h3 className="mb-8 text-3xl font-medium">
        Ces articles peuvent vous intéresser
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {morePosts.map((post) => {
          return (
            <PostPreview
              key={`${post.slug}`}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
              category={post.category}
            />
          );
        })}
      </div>
      {asLink && (
        <div className="text-center pb-20">
          <Button asChild size={"lg"} className="rounded-lg">
            <Link href="/articles">Voir tous les articles</Link>
          </Button>
        </div>
      )}
    </section>
  );
}
