import { draftMode } from "next/headers";

import { getAllPosts, getCategory } from "@/lib/api";
import Cat from "./components/cat";
import Form from "./components/form/form";
import { CarouselSize } from "./components/homepage/carrouselSize";
import HeaderDestructive from "./components/homepage/headerDestructive";
import Reassurance from "./components/homepage/reassurance";

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1, 6);
  const category = await getCategory();

  return (
    <div className="mx-auto">
      <HeaderDestructive />
      <Reassurance />
      <CarouselSize morePosts={morePosts} />
      <Form />
      <Cat />
    </div>
  );
}
