import { draftMode } from "next/headers";

import Header from "@/app/components/homepage/header";
import { getAllPosts, getCategory } from "@/lib/api";
import Image from "next/image";
import Cat from "./components/cat";
import Form from "./components/form/form";
import { CarouselSize } from "./components/homepage/carrouselSize";
import Reassurance from "./components/homepage/reassurance";

function Intro() {
  return (
    <section className="bg-white">
      <div className="container flex-col md:flex-row flex items-center md:justify-between py-5 px-8  ">
        <div className="flex gap-2 items-center">
          {/* <Image src="/images/icon.png" alt='le mec rasoir' width={32} height={32} /> */}
          <h1 className="text-2xl font-roundo font-medium md:pr-8">
            Le mec rasoir
          </h1>
        </div>
        <div className="rounded-full bg-black w-16 h-16 flex justify-center items-center">
          <Image src="/images/bars.svg" width={40} height={40} alt="bars" />
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
    <div className=" mx-auto">
      <Intro />
      <Header />
      <Reassurance />
      <Form />
      <Cat />
      <CarouselSize morePosts={morePosts} />
    </div>
  );
}
