import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='block mx-auto py-10 mt-10'>
        <div className='text-center flex gap-3 flex-col max-w-3xl mx-auto'>
          <div className='inline-block'>
          <h1 className='text-6xl inline-block font-semibold '>Le blog pour les  <span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent'>chauves </span> et les cranes rasés</h1>
          </div>
        
        <p className='text-xl font-chillax'>Tu as le crâne rasé (ou presque) ? je te donne tous mes conseils, mes avis et mes tests sur les produits pour faire briller ton crâne comme jamais !</p>
        </div>
        <div className='flex gap-5 justify-center mt-5'>
        <Button size='lg' > <a href="/articles">Voir les articles</a></Button>
        <Button size='lg' variant='outline'>Me contacter</Button>
          
        </div>
        <div className='text-center mt-3'>

        </div>
    </div>
  )
}

export default Header