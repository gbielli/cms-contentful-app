"use client";

import PostPreview from "@/app/_components/post-preview";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Category = {
  name: string;
  slug: string;
};

type State = {
  isHover: boolean;
  index: number;
  title: string;
};

const AllStories = ({
  allPosts,
  categoryList,
}: {
  allPosts: any[];
  categoryList: any[];
}) => {
  const [isActive, setIsActive] = useState<State>({
    isHover: true,
    index: -1,
    title: "",
  });

  const router = useRouter();

  const filteredpost = (posts: any) => {
    if (isActive.index != -1) {
      return posts.filter(
        (post: any) =>
          post.category.name.toLowerCase() === isActive.title.toLowerCase()
      );
    } else {
      return posts;
    }
  };

  const createQueryString = (name: string, value: any) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  };

  const handleCategoryClick = (category: Category, index: number) => {
    setIsActive({ isHover: true, index: index, title: category.name });
    router.push(
      "/articles" +
        "?" +
        createQueryString("categorie", `${category.name.toLowerCase()}`),
      { scroll: false }
    );
  };

  const handleAllCategoryClick = () => {
    setIsActive({ isHover: true, index: -1, title: "Tous" });
    router.push("/articles", { scroll: false });
  };

  return (
    <div className="container">
      <div className="flex gap-3 pt-5 pb-10 justify-center border-b border-b-slate-300 mb-10">
        <button
          onClick={handleAllCategoryClick}
          className={`${
            isActive.isHover && isActive.index === -1
              ? "bg-black text-white"
              : ""
          } flex gap-3 border border-black px-10 py-4 rounded-full items-center`}
        >
          <span>Tous</span>
        </button>

        {categoryList.map((category, index) => {
          return (
            <button
              onClick={() => handleCategoryClick(category, index)}
              key={index}
              className={`${
                isActive.isHover && isActive.index == index
                  ? "bg-black text-white "
                  : ""
              } flex gap-3 border border-black px-10 py-4 rounded-full items-center`}
            >
              {category.name}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredpost(allPosts).map((post: any) => {
          return (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
              category={post.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllStories;
