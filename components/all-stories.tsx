"use client";

import PostPreview from "@/components/post-preview";
import React, { useState } from "react";

const ALL_CATEGORIES = "all";

type Category = {
  name: string;
  slug: string;
};

type Post = {
  slug: string;
  title: string;
  coverImage: {
    url: string;
  };
  sys: {
    firstPublishedAt: string;
  };
  author: {
    name: string;
  };
  excerpt: string;
  category: Category;
};

type AllStoriesProps = {
  allPosts: Post[];
  categoryList: Category[];
};

const AllStories: React.FC<AllStoriesProps> = ({ allPosts, categoryList }) => {
  const [activeCategory, setActiveCategory] = useState<string>(ALL_CATEGORIES);

  const availableCategories = categoryList.filter((category) =>
    allPosts.some(
      (post) => post.category.name.toLowerCase() === category.name.toLowerCase()
    )
  );

  const filteredPosts =
    activeCategory === ALL_CATEGORIES
      ? allPosts
      : allPosts.filter(
          (post) =>
            post.category.name.toLowerCase() === activeCategory.toLowerCase()
        );

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName.toLowerCase());
  };

  return (
    <div className="container mb-10">
      <div className="flex flex-wrap gap-3 pt-5 pb-10 justify-center border-b border-b-slate-300">
        <CategoryButton
          name="Tous"
          key="all-category"
          isActive={activeCategory === ALL_CATEGORIES}
          onClick={() => handleCategoryClick(ALL_CATEGORIES)}
        />
        {availableCategories.map((category) => (
          <CategoryButton
            key={category.slug}
            name={category.name}
            isActive={activeCategory === category.name.toLowerCase()}
            onClick={() => handleCategoryClick(category.name)}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {filteredPosts.map((post) => (
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
        ))}
      </div>
    </div>
  );
};

type CategoryButtonProps = {
  name: string;
  isActive: boolean;
  onClick: () => void;
};

const CategoryButton: React.FC<CategoryButtonProps> = ({
  name,
  isActive,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`
      flex gap-3 border px-10 py-4 rounded-full items-center transition-colors
      ${
        isActive
          ? "bg-primary border-primary text-white"
          : "border-black hover:bg-gray-100"
      }
    `}
  >
    {name}
  </button>
);

export default AllStories;
