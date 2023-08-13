import React from 'react'
import PropTypes from 'prop-types'

const Workitem = ({year, titre, durée, détails}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
      <li className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>{year}</span>
          <span className='text-lg font-semibold text-[001b5e]'>{titre}</span>
          <span className='my-1 text-sm font-normal leading-none text-stone-400'>{durée}</span>
        </p>
        <p className='my-2 text-base font-normal text-stone-500'>{détails}</p>
      </li>
    </ol>
  )
}

export default Workitem;

Workitem.propTypes = {
  year: PropTypes.string,
  titre: PropTypes.string,
  durée: PropTypes.number,
  détails: PropTypes.string,
};