import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import CoverImage from "./cover-image";
import DateComponent from "./date";

type Category = {
  name: string;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category,
}: {
  title: string;
  coverImage: any;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
  category: Category;
}) => {
  const reduceExcerpt = (text: string, n: number): string => {
    if (text.length <= n) {
      return text;
    } else {
      return text.slice(0, n) + "...";
    }
  };

  return (
    <div>
      <div className="mb-5">
        <CoverImage
          title={title}
          slug={slug}
          url={coverImage.url}
          width={1200}
          height={800}
          category={category.slug}
        />
      </div>
      <div className="text-sm mb-2 text-slate-700">
        {author.name}• <DateComponent dateString={date} />
      </div>
      <div className="flex gap-5 justify-between">
        <h3 className="text-xl leading-snug font-medium mb-2">
          <Link href={`/articles/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <div>
          <ArrowUpRight size={24} />
        </div>
      </div>
      <div className="text-lg"></div>
      <p className=" leading-relaxed mb-4">{reduceExcerpt(excerpt, 120)}</p>
      {category && (
        <div className="">
          <p className="border bg-blue-100 text-primary px-2 rounded-full inline">
            {category.name}
          </p>
        </div>
      )}
    </div>
  );
};
export default PostPreview;
