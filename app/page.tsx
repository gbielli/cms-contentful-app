import Link from 'next/link'
import { draftMode } from 'next/headers'

import Date from './date'
import CoverImage from './cover-image'
import Avatar from './avatar'
import MoreStories from './more-stories'
import { getAllPosts, getCategory } from '@/lib/api'
import NavigationItems from '@/components/naviguation-items'
import Header from '@/components/header';
import Category from '@/components/category';

function Intro() {


  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-5 pb-5 md:mb-12">
      <h1 className="text-4xl font-bold font-chillax md:pr-8">
        Le mec rasoir
      </h1>
      <div className='flex gap-12'>
        <NavigationItems />
      </div>
    </section>
  )
}

function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category
}: {
  title: string
  coverImage: any
  date: string
  excerpt: string
  author: any
  slug: string
  category: string
}) {
  return (
    <section>
      <div className='grid grid-cols-10 gap-5'>
      <div className="mb-8 md:mb-16 col-span-7">
        <CoverImage title={title} slug={slug} url={coverImage.url} width={1200} height={300} />
      </div>
      <div className='col-span-3 rounded-lg'>
        <img className='rounded-md' src="https://placeholder.co/600x600" alt="" />
      </div>

      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  )
}

export default async function Page() {
  const { isEnabled } = draftMode()
  const allPosts = await getAllPosts(isEnabled)
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const category = await getCategory();


  return (
    <div className="container mx-auto px-5">
      <Intro />
      <Header />
      <Category categoryList={category} />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
          category={heroPost.category}
        />
      )}
      <div>
        <h3 className='text-6xl font-bold'>Mes derniers articles</h3>
      </div>
      <MoreStories morePosts={morePosts} />
    </div>
  )
}




