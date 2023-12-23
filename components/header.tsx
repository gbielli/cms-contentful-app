import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='block mx-auto py-10'>
        <div className='text-center flex gap-3 flex-col max-w-3xl mx-auto'>
          <div className='inline-block'>
          <h1 className='text-6xl inline-block font-synonym'>Le blog pour les crânes rasés et les chauves</h1>
        <div className='bg-purple-500 h-14 w-28 rounded-full relative inline-block'>
        <Image className='absolute w-full h-full object-cover origin-left rounded-full' src="/images/rasoir-homme-h.png" alt='rasoir' width={60} height={60} />
        </div>
          </div>
        
        <p className='text-xl font-chillax'>Tu as la crâne rasé (ou presque) ? je te donne tous mes conseils, mes avis et mes tests sur les produits pour faire briller ton crâne comme jamais !</p>
        </div>
        <div className='text-center mt-3'>

        </div>
    </div>
  )
}

export default Header