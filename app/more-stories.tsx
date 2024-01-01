import Link from 'next/link'
import Avatar from './avatar'
import DateComponent from './date'
import CoverImage from './cover-image'
import { Divide } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PostPreview from './post-preview'


export default function MoreStories({ morePosts }: { morePosts: any[] }) {


  return (
    <section className='pb-20'>
      <h2 className="mb-8 text-2xl font-semibold">
        Les autres articles
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