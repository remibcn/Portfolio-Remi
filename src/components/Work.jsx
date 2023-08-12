import React from 'react'
import Workitem from './Workitem'

const data = [
    {
        year: '2021',
        titre: 'Manutention',
        durée: '2 mois',
        détails: 'remplissage de bidon, mise en carton ect...',
    },
    {
        year: '2022/2023',
        titre: 'Formation O Clock',
        durée: '6 mois',
        détails: 'Formation de 6 mois en developpement web (Javascript, React, Rtk, Php, Mysql)',
    },
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px]m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]' />
      {data.map((item, id) => (
        <Workitem 
        key={id}
        year={item.year}
        titre={item.titre} 
        durée={item.durée}
        détails={item.détails}/>
      ))}
    </div>
  )
}

export default Work
