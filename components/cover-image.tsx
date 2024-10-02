import ContentfulImage from "@/lib/contentful-image";
import Link from "next/link";

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CoverImage({
  title,
  url,
  slug,
  width,
  height,
  category,
}: {
  title: string;
  url: string;
  slug?: string;
  height: number;
  width: number;
  category?: string;
}) {
  const image = (
    <ContentfulImage
      alt={`${title}`}
      priority
      width={width}
      height={height}
      className={cn("shadow-small mx-auto object-cover w-full h-full", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
      src={url}
    />
  );

  return (
    <div className="sm:mx-0 aspect-video">
      {slug ? (
        <Link href={`/articles/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
