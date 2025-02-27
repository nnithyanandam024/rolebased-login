import React from 'react'
import { NavLink } from 'react-router-dom'

const FacNavbar = () => {
  return (
    <div className='FacNavbar'>
      <NavLink to='/faculty/remarks' className='nav-link'>
        Remarks
        </NavLink>
        <NavLink to='/faculty/uploads' className='nav-link'>
        Uploads
        </NavLink>
        <NavLink to='/faculty/timetable' className='nav-link'>
        Timetable
        </NavLink>
    </div>
  )
}

export default FacNavbar
