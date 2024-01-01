import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const Hero = () => {
    return (
        <>
        <h3 className='mt-20 mb-6 text-2xl font-semibold'>Les articles récents</h3>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6 mb-20'>
            
            <div className="primary post col-span-1 max-xl:flex max-xl:gap-3">
                <div className="image">
                    <img className='object-cover w-full h-[368px]' src="https://images.ctfassets.net/ru283q6vzedl/7dU9Wgr77r6xdJOcR8XPJa/c552c8201865ff46517450f899a98416/Library_with_a_view?h=368" alt="" />
                </div>
                <div className="text flex flex-col">
                    <p className='text-sm mt-4 mb-2 text-slate-700'>Avis produits • 22 octobre 2023 </p>
                    <h3 className='text-2xl mb-1 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore id incidunt velit hic nesciunt! Corporis modi culpa nisi excepturi quasi rem cum deserunt, ducimus maxime.</p>
                    <div className='inline-flex gap-1 underline-offset-1 mt-5'>
                            <a className="" href="#">
                                Lire l'article
                            </a>
                            <ArrowUpRight />
                        </div>
                </div>
            </div>
            <div className='secondary post col-span-1 flex flex-col gap-6'>
                <div className='grid grid-cols-1 sm:grid-cols-7 gap-3 '>
                    <div className='col-span-3'>
                        <img className='max-xl:h-[250px] h-[160px] w-full object-cover' src="https://images.ctfassets.net/ru283q6vzedl/5YCd5mjVbOGncMriNZpaX3/fc12840626d8b07092f45b281eba5022/psyoyo.webp?h=250" alt="" />
                    </div>
                    <div className='col-span-4 flex flex-col gap-2 h-full justify-center'>
                    <p className='text-sm mt-4 mb-2 text-slate-700'>Avis produits • 22 octobre 2023 </p>
                        <h3 className='text-xl font-semibold'>Mon avis complet sur la possette Yoyo Babyzen 2023.</h3>

                        <div className='inline-flex gap-1 underline-offset-1 mt-2'>
                            <a className="" href="#">
                                Lire l'article
                            </a>
                            <ArrowUpRight />
                        </div>

                    </div>
                    

                </div>
                <div className='grid grid-cols-1 sm:grid-cols-7 gap-3'>
                    <div className='col-span-3'>
                    <img className='max-xl:h-[250px] h-[160px] w-full object-cover' src="https://images.ctfassets.net/ru283q6vzedl/5YCd5mjVbOGncMriNZpaX3/fc12840626d8b07092f45b281eba5022/psyoyo.webp?h=250" alt="" />
                    </div>
                    <div className='col-span-4 flex flex-col gap-2 h-full justify-center'>
                    <p className='text-sm mt-4 mb-2 text-slate-700'>Avis produits • 22 octobre 2023 </p>
                    <h3 className='text-xl font-semibold'>Mon avis complet sur la possette Yoyo Babyzen 2023.</h3>

                        <div className='inline-flex gap-1 underline-offset-1'>
                            <a className="" href="#">
                                Lire l'article
                            </a>
                            <ArrowUpRight />


                        </div>
                    </div>
                    

                </div>
                <div className='grid grid-cols-1 sm:grid-cols-7 gap-3'>
                    <div className='col-span-3'>
                    <img className='max-xl:h-[250px] h-[160px] w-full object-cover' src="https://images.ctfassets.net/ru283q6vzedl/5YCd5mjVbOGncMriNZpaX3/fc12840626d8b07092f45b281eba5022/psyoyo.webp?h=250" alt="" />
                    </div>
                    <div className='col-span-4 flex flex-col gap-2 h-full justify-center'>
                    <p className='text-sm mt-4 mb-2 text-slate-700'>Avis produits • 22 octobre 2023 </p>
                    <h3 className='text-xl font-semibold'>Mon avis complet sur la possette Yoyo Babyzen 2023.</h3>

                        <div className='inline-flex gap-1 underline-offset-1'>
                            <a className="" href="#">
                                Lire l'article
                            </a>
                            <ArrowUpRight />


                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
        </>
    )
}

export default Hero