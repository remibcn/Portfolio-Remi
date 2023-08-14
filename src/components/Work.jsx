import React from 'react'
import Workitem from './Workitem'

const data = [
    {
    year: '2022/2023',
    titre: "Formation O'Clock",
    durée: '6 mois',
    détails: "Formation de 6 mois en developpement web (Javascript, React, Rtk, Php, Mysql) avec une spécialisation en Front d'un mois en utilisant React + réalisation d'un projet de 1 mois en groupe de 5 (2 fronts et 3 backs)",
    },
    {
        year: 'Eté 2022',
        titre: 'Manutention Si-Chim',
        durée: '2 mois',
        détails: 'remplissage de bidon, mise en carton, etiquettage et filmage de palette',
    },
    {
      year: '2022',
      titre: 'Bac STMG - Lycée Paul Doumer',
      durée: '2019/2022',
      détails: 'Bac obtenu avec la mention bien',
    }
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
