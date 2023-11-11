import React from 'react'
import { Link } from 'react-router-dom'

function Hostel({ image, name, rooms }) {
  return (
    <Link to='/hostelProfile' state={{ name }} >
      <div className='flashcard xs:gap-5 gap-2'>
        <img className='image' src={image} />
        <p className='flash-items bgg md:text-lg text-[20px]'>{name}</p>
        <h3 className='flash-items'>Total Capacity: {rooms}</h3>
      </div>
    </Link>
  )
}

export default Hostel