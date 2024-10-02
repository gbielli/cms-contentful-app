import DateComponent from "@/components/date";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PostPreviewProps = {
  title: string;
  coverImage: {
    url: string;
  }; // Changé de 'any' à 'string' pour plus de précision
  date: string;
  excerpt: string;
  author: {
    name: string;
  };
  slug: string;
  category: {
    slug: string;
    name: string;
  };
};

export default function MoreStories({
  morePosts,
  asLink,
}: {
  morePosts: any[];
  asLink: boolean;
}) {
  return (
    <section className="pb-20 max-w-6xl mx-auto">
      <h3 className="mb-8 text-3xl font-medium">
        Ces articles peuvent vous intéresser
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5">
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

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category,
}: PostPreviewProps) => {
  return (
    <div>
      <Link href={`/articles/${slug}`} className="group">
        <div className="lg:col-span-1 aspect-video">
          <div className="mb-2 relative aspect-[4/3]">
            <Image
              src={coverImage.url}
              alt={title}
              width={700}
              height={300}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="text-sm mb-2 text-slate-700">
            {author.name}• <DateComponent dateString={date} />
          </div>

          <div className="flex gap-5 justify-between">
            <h3 className="text-xl leading-snug font-medium mb-2 group-hover:underline">
              {title}
            </h3>
            <div>
              <ArrowUpRight size={24} />
            </div>
          </div>

          {category && (
            <div className="">
              <p className="border bg-blue-100 text-primary px-2 rounded-full inline">
                {category.name}
              </p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};
