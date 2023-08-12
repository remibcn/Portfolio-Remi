import React from 'react'
import Projectitems from './Projectitems'
import Chargement from '../assets/chargement.png'
import Breizh from '../assets/5FB2DD1C-C255-449C-84D5-D811EDB2B16C.jpeg'

const Projects = () => {
  return (
    <div id='projects'className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[001b5e]'>Projets !</h1>
      <p className='text-center py-8'>
        Voici une présentation de mes projets réalisés ou en cours !
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <Projectitems img={Breizh} title='Breizh' link/>
        <Projectitems img={Chargement} title='En cours'/>
        <Projectitems img={Chargement} title='En cours'/>
        <Projectitems img={Chargement} title='En cours'/>
      </div>
    </div>
  )
}

export default Projects
