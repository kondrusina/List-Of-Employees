import React from 'react'
import Employerslistitem from '../employer-list-item/Employerlistitem';
import './Employerslist.css'

export default function Employerslist({data}) {

  const elements = data.map(item=> {
    const {id, ...itemProps} = item;
    return (
      <Employerslistitem key={id} {...itemProps}/>
    )
  })

  return (
    <ul className="app-list list-rgoup">
      {elements}
    </ul>
  )
}
