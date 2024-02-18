import { getAllPosts, getCategory } from "@/lib/api";
import { draftMode } from "next/headers";
import Image from "next/image";
import AllStories from "../_components/all-stories";

const Page = async () => {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const category = await getCategory();
  return (
    <div>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-10 py-5 px-8">
        <div className="flex gap-2 items-center">
          <Image
            src="/images/icon.png"
            alt="le mec rasoir"
            width={32}
            height={32}
          />
          <h1 className="text-2xl font-roundo font-medium md:pr-8">
            Le mec rasoir
          </h1>
        </div>
        <div className="flex gap-12 w-32">
          <div className="p-0.5 h-12 w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ">
            <div className="h-full w-full bg-slate-100 rounded-full flex justify-center items-center">
              <a href="">Menu</a>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="py-10">
        <h1 className="text-7xl font-roundo font-semibold text-center line-clamp-3 max-w-4xl mx-auto">
          Les articles pour les chauves par un chauve.
        </h1>
        <p className="text-center text-xl mt-4 max-w-3xl mx-auto">
          Je vous partage mes avis sur les produits que j'ai testé, les
          différentes marques et mes tutoriels pour se raser comme un pro.
        </p>
      </div> */}
      <AllStories allPosts={allPosts} categoryList={category} />
    </div>
  );
};

export default Page;
