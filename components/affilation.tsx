import React from 'react';
import logoAmazon from '@/public/images/logo-amazon.png';
import Image from 'next/image';
import { Button } from './ui/button';

const Affilation = () => {
  return (
    <div>
        <div className='max-w-2xl mx-auto mb-5'>
            <h2 className='text-2xl mb-5 font-semibold'>Les offres de la poussette Babyzen YOYO</h2>
            <div className='bg-blue-100 p-3 rounded-md'>
            <p className='text-blue-500'>🙏 En passant par ces liens, vous soutenez directement mon contenu</p>
            </div>
        </div>
        <div className="affilate max-w-2xl mx-auto">
            <div className='flex items-center w-full justify-between mb-3 pb-4 border-b '>
                <div className="left flex h-6 items-center gap-3">
                <Image className='object-cover w-full h-full' src={logoAmazon} alt='amazon logo' />
                <h2 className='text-lg'>Amazon</h2>
                </div>
                <div className="right flex gap-10 items-center">
                <p className='text-lg'>59€</p>
                <Button className='bg-blue-500'>Voir l'offre</Button>
                </div>
                
         </div>
         <div className='flex items-center w-full justify-between mb-3 pb-4 border-b'>
                <div className="left flex h-6 items-center gap-3">
                <Image className='object-cover w-full h-full' src={logoAmazon} alt='amazon logo' />
                <h2 className='text-lg'>Amazon</h2>
                </div>
                <div className="right flex gap-10 items-center">
                <p className='text-lg'>59€</p>
                <Button className='bg-blue-500'>Voir l'offre</Button>
                </div>
                
         </div>
            </div>
        </div>
  )
}

export default Affilation