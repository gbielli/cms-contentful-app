import React from 'react'

type Category = {
    name:string,
    slug:string
}

const Category = ({categoryList} : {categoryList:Category[]}) => {
  return (
    <div className='py-12 flex gap-10 justify-center'>
         {categoryList.map((cat, index) => {
          return  (
          <div key={index} className="cards">
             <div className="card border rounded-md">
                <img className='rounded-t-md' src="https://placeholder.co/300x150" alt="" />
                <div className='p-4'>
                <h3 className="title text-xl font-semibold">{cat.name}</h3>
                </div>
        </div>
        </div>
            )
        })}
       </div>
  )
}

export default Category