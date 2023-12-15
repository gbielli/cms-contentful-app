import React from 'react'
import { Button } from './ui/button'
import Logoamazon from '../public/logo-amazon.png';
import Image from 'next/image';

const avis = () => {
    return (
        <>
        <div className=' bg-slate-50 rounded-md max-w-2xl mx-auto my-20'>
            <div className="points p-5 flex flex-col gap-6">
                <div className="points-fort">


                    <h3 className='text-xl text-green-500 mb-3 font-semibold'>Ce que j'aime</h3>
                    <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-green-500 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <p>Pas de faceID</p>
                    </div>
                </div>
                <div className="points-faible">
                    <h3 className='text-xl text-red-500 mb-3 font-semibold'>Ce que j'aime moins</h3>
                    <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-red-500 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                        <p>Pas de faceID</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='max-w-2xl mx-auto'>
            <h2 className='text-2xl mb-5 font-semibold'>Les offres gilettes Match 3</h2>
        </div>
        <div className="affilate max-w-2xl mx-auto">
            <div className='flex items-center w-full justify-between mb-3 pb-4 border-b '>
                <div className="left flex h-6 items-center gap-3">
                <Image className='object-cover w-full h-full' src={Logoamazon} alt='amazon logo' />
                <h2 className='text-lg'>Amazon</h2>
                </div>
                <div className="right flex gap-10 items-center">
                <p className='text-lg'>59€</p>
                <Button className='bg-blue-500'>Voir l'offre</Button>
                </div>
                
         </div>
         <div className='flex items-center w-full justify-between mb-3 pb-4 border-b'>
                <div className="left flex h-6 items-center gap-3">
                <Image className='object-cover w-full h-full' src={Logoamazon} alt='amazon logo' />
                <h2 className='text-lg'>Amazon</h2>
                </div>
                <div className="right flex gap-10 items-center">
                <p className='text-lg'>59€</p>
                <Button className='bg-blue-500'>Voir l'offre</Button>
                </div>
                
         </div>
         
         
            </div>
        </>
    )
}

export default avis