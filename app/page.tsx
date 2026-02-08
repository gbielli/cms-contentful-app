import AllStories from "@/components/all-stories";
import HeaderCenter from "@/components/homepage/headerCenter";
import { LastArticles } from "@/components/homepage/lastArticles";
import Marquee from "@/components/homepage/marquee";
import Reassurance from "@/components/homepage/reassurance";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { getCategory, getHomepagePosts } from "../lib/api";

export const metadata: Metadata = {
  title: "Family Tribe - le blog des jeunes parents",
  description:
    "Découvrez nos avis sincères sur des produits pour toute la famille",
};

export default async function Page() {
  const { isEnabled } = await draftMode();
  const allPosts = await getHomepagePosts(isEnabled);
  const category = await getCategory();
  const morePosts = allPosts.slice(1, 4);

  return (
    <div className="mx-auto">
      <HeaderCenter />

      <Marquee />
      <Reassurance />

      <LastArticles morePosts={morePosts} />
      <h2 className="text-4xl leading-snug text-center font-medium">
        Tous nos articles
      </h2>
      <AllStories allPosts={allPosts} categoryList={category} />
    </div>
  );
}
