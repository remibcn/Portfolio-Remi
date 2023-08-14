import React from 'react'
import PropTypes from 'prop-types'
const Projectitems = ({img, title}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
      <img src={img} alt='/' className='rounded-xl group-hover:opacity-10'/>
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
            {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'> React</p>
        <a href="http://breizh-littoral.surge.sh">
            <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'> Plus d&apos;infos !</p>
        </a>
      </div>
    </div>
  )
}

export default Projectitems

Projectitems.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,

};