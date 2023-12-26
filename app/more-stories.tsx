import Link from 'next/link'
import Avatar from './avatar'
import DateComponent from './date'
import CoverImage from './cover-image'
import { Divide } from 'lucide-react'

type Category = {
  name: string;
  slug: string;

}

function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category,
}: {
  title: string
  coverImage: any
  date: string
  excerpt: string
  author: any
  slug: string
  category: Category
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} slug={slug} url={coverImage.url} width={1200} height={800} />
      </div>
      <h3 className="text-2xl leading-snug font-medium">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg">
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      {category && 
      <div className=''>
        <p className='border border-black px-3 py-1 rounded-full inline'>{category.name}</p>
      </div> }
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
    
  )
}

export default function MoreStories({ morePosts }: { morePosts: any[] }) {


  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-4xl font-bold tracking-tighter leading-tight">
        Mes derniers articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {morePosts.map((post) => {
        return(
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
          )})}
      </div>
    </section>
  )
}