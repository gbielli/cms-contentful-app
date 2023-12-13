import React from 'react'
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <div className='block mx-auto py-10'>
        <div className='text-center flex gap-3 flex-col max-w-3xl mx-auto'>
        <h1 className='text-6xl'>Le blog pour les crânes rasés et les chauves</h1>
        <p className='text-xl'>Tu as la crâne rasé (ou presque) ? je te donne tous mes conseils, mes avis et mes tests sur les produits pour faire briller ton crâne comme jamais !</p>
        </div>
        <div className='text-center mt-3'>

        </div>
    </div>
  )
}

export default Header