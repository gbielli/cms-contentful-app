"use client";

import PostPreview from "@/components/post-preview";
import { useState } from "react";

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

  const handleActiveCategory = (categoryName: string, index: any) => {
    setIsActive({
      isHover: true,
      index: index,
      title: categoryName.toLowerCase(),
    });
  };

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

  const handleAllCategoryClick = () => {
    setIsActive({ isHover: true, index: -1, title: "Tous" });
  };

  return (
    <div className="container mb-10">
      <div className="flex gap-3 pt-5 pb-10 justify-center border-b border-b-slate-300 ">
        <button
          onClick={handleAllCategoryClick}
          className={`${
            isActive.isHover && isActive.index === -1
              ? "bg-primary border-primary text-white"
              : ""
          } flex gap-3 border border-black px-10 py-4 rounded-full items-center`}
        >
          <span>Tous</span>
        </button>

        {categoryList.map((category, index) => {
          return (
            <button
              onClick={() => handleActiveCategory(category.name, index)}
              key={index}
              className={`${
                isActive.isHover && isActive.index == index
                  ? "bg-primary border-primary text-white "
                  : ""
              } flex gap-3 border border-black  px-10 py-4 rounded-full items-center`}
            >
              {category.name}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {filteredpost(allPosts).map((post: any) => {
          return (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.sys.firstPublishedAt}
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
