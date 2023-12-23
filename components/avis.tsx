import React from 'react'
import { Button } from './ui/button'
import Logoamazon from '../public/images/logo-amazon.png';
import Image from 'next/image';
import Positive from '@/public/images/positive.svg'
import Negative from '@/public/images/negative.svg'


type avis = {
    title: string, 
    like:string[],
    dislike: string[]
}

const avis = ({avis}:{avis: avis}) => {
    return (
        <>
        <div className='border rounded-md max-w-2xl mx-auto my-20'>
            <div className="points p-5 flex flex-col gap-6">
                <div className="points-fort">

                    {avis &&
                    <>
                     <h3 className='text-xl text-green-500 mb-3 font-semibold'>ce que j'aime avec {avis.title}</h3>
                     {avis.like.map((item, index) => {
                     return <div className='flex gap-2 mb-2' key={index}>
                         <Image src={Positive} alt='point positif' width={24} className='text-blue-500 ' />
                         <p>{item}</p>
                     </div>

                     }
                     )}
                     </>
                    }
                   

                </div>
                <div className="points-faible">
                    <h3 className='text-xl text-red-500 mb-3 font-semibold'>Ce que j'aime moins avec {avis.title}</h3>

                    {avis &&
                    <>
                     {avis.dislike.map((item, index) => {
                     return <div className='flex gap-2 mb-2' key={index}>
                    <Image src={Negative} alt='point positif' width={24} className='text-blue-500 ' />
                         <p>{item}</p>
                     </div>

                     }
                     )}
                     </>
                    }
                </div>
            </div>
        </div>
        
        </>
    )
}

export default avis