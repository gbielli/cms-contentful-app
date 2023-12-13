import React from 'react'

const avis = () => {
  return (
    <div className=' bg-slate-100 rounded-md max-w-2xl mx-auto'>
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
  )
}

export default avis