import { draftMode } from "next/headers";
import Link from "next/link";

import Header from "@/app/_components/_homepage/header";
import { Button } from "@/app/_components/_ui/button";
import { Input } from "@/app/_components/_ui/input";
import { getAllPosts, getCategory } from "@/lib/api";
import { ArrowRightIcon, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { CarouselSize } from "./_components/_homepage/carrouselSize";
import Avatar from "./_components/avatar";
import Cat from "./_components/cat";
import CoverImage from "./_components/cover-image";
import Date from "./_components/date";

function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between py-5 px-8">
      <div className="flex gap-2 items-center">
        {/* <Image src="/images/icon.png" alt='le mec rasoir' width={32} height={32} /> */}
        <h1 className="text-2xl font-roundo font-medium md:pr-8">
          Le mec rasoir
        </h1>
      </div>
      <div className="rounded-full bg-black w-16 h-16 flex justify-center items-center">
        <Image src="/images/bars.svg" width={40} height={40} alt="bars" />
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
  const morePosts = allPosts.slice(1, 6);
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
            className="fill-primary text-white"
          />
          <p className="text-lg">Non sponsorisé</p>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2
            width={35}
            height={35}
            strokeWidth={1.2}
            className="fill-primary text-white"
          />
          <p className="text-lg">Produits testés</p>
        </div>
        <div className="flex gap-2 items-center justify-center my-3">
          <CheckCircle2
            width={35}
            height={35}
            strokeWidth={1.3}
            className="fill-primary text-white"
          />
          <p className="text-lg">Liens d'affiliation</p>
        </div>
        <div className="flex gap-2 items-center justify-center my-3">
          <CheckCircle2
            width={35}
            height={35}
            strokeWidth={1.3}
            className="fill-primary text-white"
          />
          <p className="text-lg">Transparence</p>
        </div>
      </div>
      <div>
        <Cat />
      </div>
      <div className="h-[300px] w-full my-20">
        <div className="bg-[url('/images/pattern.jpg')] h-full w-full rounded-2xl object-cover">
          <div className="w-full h-full flex flex-col gap-10 justify-center items-center">
            <h3 className="text-4xl text-white font-medium">
              Rejoignez ma newsletter pour ne rien manquer
            </h3>
            <div className="inline-flex w-1/3 gap-4">
              <Input
                className="h-12 w-full focus-visible:ring-blue-700 ring-offset-blue-700"
                type="email"
                placeholder="Email"
              />
              <Button className="h-12 rounded-lg">
                Je m'inscris
                <ArrowRightIcon className="ml-3 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto py-20">
        <CarouselSize morePosts={morePosts} />
      </div>
    </div>
  );
}
