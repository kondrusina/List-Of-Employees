import React from 'react'
import './Appfilter.css'

export default function Appfilter() {
  return (
    <div className='btn-group'>
        <button className="btn btn-light" type='button'>
            Все сотрудники
        </button>

        <button className="btn btn-outline-light" type='button'>
            На повышение
        </button>

        <button className="btn btn-outline-light" type='button'>
            З/П больше 1000$
        </button>
    </div>
  )
}
