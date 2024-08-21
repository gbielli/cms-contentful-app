import AllStories from "@/components/all-stories";
import { getAllPosts, getCategory } from "@/lib/api";
import { draftMode } from "next/headers";

const Page = async () => {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);

  const category = await getCategory();
  return (
    <div>
      <div className="py-10">
        <h1 className="text-7xl font-roundo font-semibold text-center line-clamp-3 max-w-4xl mx-auto">
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
