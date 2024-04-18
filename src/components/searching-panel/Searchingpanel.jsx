import React from 'react'
import './Searchingpanel.css';

export default function Searchingpanel() {
  return (
    <div>
        <input type="text" 
        className='form-control search-input' 
        placeholder='Найти сотрудника' />
    </div>
  )
}
