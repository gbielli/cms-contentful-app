import React from 'react'
import CoverImage from '@/app/cover-image'

type avantagesProps = {
    post: {
        productImage: 
        {
            url: string
        },
        stars: number
        avantages: {
            title: string
        }
    }
}



const Stars = ({ number, total }: { number: number, total: number }) => {

    const numberOfStars = number ;
    const totalStars = total ;

    if (isNaN(numberOfStars) || isNaN(totalStars) || numberOfStars < 0 || totalStars <= 0) {
        return null; // or handle the error in a way that makes sense for your application
    }

    // Render the stars based on the number and total
    const stars = Array.from({ length: totalStars }, (_, index) => {
        if (index < numberOfStars) {
            return <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 fill-blue-500 stroke-none ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg> // Filled star
        } else {
            return <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 fill-slate-200 stroke-none ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>// Empty star
        }
    });

    return (
        <div className="flex items-center">
            {stars}
        </div>
    )
}

export default function Avantages({post} : avantagesProps) {
   return (
   <div className='max-w-3xl mx-auto border p-4 rounded-md flex items-center gap-3 my-10 bg-white'>
    {post.productImage && <CoverImage url={post.productImage.url} width={180} height={180} title='poussette yoyo' /> }
        <div className=''>
      <h3 className='text-3xl mb-2'>Note pour {post.avantages.title}</h3>
      <div className='flex gap-3 items-center text-xl'>
        <Stars number={post.stars} total={5} />
        <p> {post.stars} / 5 </p>  
      </div>
    </div>
  </div>
  )
    
}
