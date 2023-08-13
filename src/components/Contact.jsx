import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact </h1>
      <form action="https://getform.io/f/0e07c9e7-7f15-4cfd-a682-59d355131cff" method='POST' encType='multipart/form-data'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Nom</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name'></input>
            </div>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Numéro de téléphone</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300'type='text' name='name'></input>
            </div>
        </div>
        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Email</label>
            <input  className='border-2 rounded-lg p-3 flex border-gray-300'type='text' name='name'></input>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Sujet</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name'></input>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows="10" type='text' name='name'></textarea>
            </div>
            <button className='bg-[#001b5e] text-gray-100 w-full p-4 rounder-lg'>
                 Envoyer un message !
            </button>
      </form>
    </div>
  )
}

export default Contact
