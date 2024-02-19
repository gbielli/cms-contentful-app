import React from 'react'

const LinkItem = ({children, href} : {children: React.ReactNode, href: string}) => {
  return (
  
      <a href={href} className='hover:bg-slate-100 rounded-md flex px-2 py-2 items-center cursor-pointer'>{children}</a>

  )
}

export default LinkItem