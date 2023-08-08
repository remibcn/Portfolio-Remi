import React from 'react'
import { AiOutlineMenu }  from 'react-icons/ai'

const Sidenav = () => {
  return (
    <div>
      <AiOutlineMenu className='absolute top-4 right-4 z-[99] md:hidden'/>
    </div>
  )
}

export default Sidenav
