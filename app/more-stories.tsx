import Link from 'next/link'
import Avatar from './avatar'
import DateComponent from './date'
import CoverImage from './cover-image'
import { Divide } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
})

{

  const reduceExcerpt = (text:string, n:number) : string => {
    if (text.length <= n) {
      return text;
    } else {
      return text.slice(0, n) + '...';
    }
  }


  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} slug={slug} url={coverImage.url} width={1200} height={800} />
      </div>
      <h3 className="text-2xl leading-snug font-medium">
        <Link href={`/articles/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg">
      </div>
      <p className="text-lg leading-relaxed mb-4">{reduceExcerpt(excerpt, 150)}</p>
      {category && 
      <div className=''>
        <p className='border border-black px-3 py-1 rounded-full inline'>{category.name}</p>
      </div> }
    </div>
    
  )
}

export default function MoreStories({ morePosts }: { morePosts: any[] }) {


  return (
    <section className='pb-20'>
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
      <div className='text-center py-10'>
        <Button size="lg">Voir tous les articles</Button>
      </div>
    </section>
  )
}