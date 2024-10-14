import AllStories from "@/components/all-stories";
import { getCategory, getHomepagePosts } from "@/lib/api";
import { draftMode } from "next/headers";

const Page = async () => {
  const { isEnabled } = draftMode();
  const allPosts = await getHomepagePosts(isEnabled);
  const category = await getCategory();
  return (
    <div>
      <div className="py-10">
        <h1 className="sm:text-7xl text-[#001744] text-center text-balance md:text-6xl font-medium mb-8 md:mb-4">
          Nos articles pour jeunes parents.
        </h1>
        <p className="text-center text-xl mt-4 max-w-3xl mx-auto">
          Je vous partage mes avis sur les produits que j'ai testé, les
          différentes marques et mes tutoriels pour se raser comme un pro.
        </p>
      </div>
      <AllStories allPosts={allPosts} categoryList={category} />
    </div>
  );
};

export default Page;
