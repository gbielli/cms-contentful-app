import Link from "next/link";
import ContentfulImage from "../../lib/contentful-image";

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CoverImage({
  title,
  url,
  slug,
  width,
  height,
}: {
  title: string;
  url: string;
  slug?: string;
  height: number;
  width: number;
}) {
  const image = (
    <ContentfulImage
      alt={`${title}`}
      priority
      width={width}
      height={height}
      className={cn("shadow-small mx-auto", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
      src={url}
    />
  );

  return (
    <div className="sm:mx-0">
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
