import React from 'react'
import { Link } from 'react-router-dom'

function QueryBtn() {
  return (
    <Link to='/query'>
      <div className='query cursor-pointer  btn-container '>
        <h2 className='btn font-poppins'>Create Your Query</h2>
      </div>
    </Link>
  )
}

export default QueryBtn