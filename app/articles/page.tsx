import React from 'react';
import { getAllPosts, getCategory } from '@/lib/api';
import { draftMode } from 'next/headers';
import MoreStories from '../more-stories';

const Page = async () => {
  const { isEnabled } = draftMode()
  const allPosts = await getAllPosts(isEnabled)
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1, 4)
  const category = await getCategory();
  return (
    <div>
      <MoreStories morePosts={morePosts} />
    </div>
  )
}

export default Page