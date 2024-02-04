import { draftMode } from "next/headers";
import Link from "next/link";

import Header from "@/components/header";
import { getAllPosts, getCategory } from "@/lib/api";
import { CheckCircle2 } from "lucide-react";
import Avatar from "./avatar";
import { CarouselSize } from "./carrouselSize";
import Cat from "./cat";
import CoverImage from "./cover-image";
import Date from "./date";
import MoreStories from "./more-stories";

function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between py-5 px-8">
      <div className="flex gap-2 items-center">
        {/* <Image src="/images/icon.png" alt='le mec rasoir' width={32} height={32} /> */}
        <h1 className="text-2xl font-roundo font-medium md:pr-8">
          Le mec rasoir
        </h1>
      </div>
      <div className="flex gap-12 w-32">
        <div className="p-0.5 h-12 w-full rounded-full">
          <div className="h-full w-full bg-slate-100 rounded-full flex justify-center items-center">
            <a href="">Menu</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroPost({
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
  category: string;
}) {
  return (
    <section>
      <div className="grid grid-cols-10 gap-5">
        <div className="mb-8 md:mb-16 col-span-7">
          <CoverImage
            title={title}
            slug={slug}
            url={coverImage.url}
            width={1200}
            height={300}
          />
        </div>
        <div className="col-span-3 rounded-lg">
          <img
            className="rounded-md"
            src="https://placeholder.co/600x600"
            alt=""
          />
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/articles/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  );
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1, 4);
  const category = await getCategory();

  return (
    <div className=" mx-auto px-5">
      <Intro />
      <Header />
      <div className="flex gap-20 justify-center my-3 py-20">
        <div className="flex items-center gap-2">
          <CheckCircle2
            width={35}
            height={35}
            strokeWidth={1.3}
            fill={"#7c80d9"}
          />
          <p className="text-lg">Non sponsorisé</p>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2
            width={35}
            height={35}
            strokeWidth={1.2}
            fill={"#7c80d9"}
          />
          <p className="text-lg">Produits testés</p>
        </div>
        <div className="flex gap-2 items-center justify-center my-3">
          <CheckCircle2
            width={35}
            height={35}
            strokeWidth={1.3}
            fill={"#7c80d9"}
          />
          <p className="text-lg">Liens d'affiliation</p>
        </div>

        <div className="flex gap-2 items-center justify-center my-3">
          <CheckCircle2
            width={35}
            height={35}
            strokeWidth={1.3}
            fill={"#7c80d9"}
          />
          <p className="text-lg">Transparence</p>
        </div>
      </div>
      <div>
        <Cat />
      </div>
      <div className="mx-auto py-20">
        <CarouselSize />
      </div>

      {/* <Hero /> */}
      {/* {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
          category={heroPost.category}
        />
      )} */}
      <MoreStories morePosts={morePosts} />
      {/* <Category categoryList={category} /> */}
    </div>
  );
}
