import React from 'react'
import { Link } from 'react-router-dom'

function Hall() {
    return (
        <Link to='/hostelList'>
            <div className='hall cursor-pointer  '>
                <h2 className='text-xs font-poppins'>Hostel List</h2>
            </div>
        </Link>
    )
}

export default Hall