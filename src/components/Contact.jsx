import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact </h1>
      <form action='' method='POST' encType='multipart/form-data'>
        <div>
            <div>
                <label>Nom</label>
                <input type='text' name='name'></input>
            </div>
            <div>
                <label>Numéro de téléphone</label>
                <input type='text' name='name'></input>
            </div>
        </div>
        <div>
                <label>Email</label>
                <input type='text' name='name'></input>
            </div>
            <div>
                <label>Sujet</label>
                <input type='text' name='name'></input>
            </div>
            <div>
                <label>Message</label>
                <textarea rows="10" type='text' name='name'></textarea>
            </div>
      </form>
    </div>
  )
}

export default Contact
