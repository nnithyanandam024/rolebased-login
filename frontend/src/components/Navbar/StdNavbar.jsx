import React from 'react'
import { NavLink } from 'react-router-dom'

const StdNavbar = () => {
  return (
    <div className='StdNavbar'>
      <NavLink to='/student/academics' className='nav-link'>Academics</NavLink>
<NavLink to='/student/acheivements' className='nav-link'>Acheivements</NavLink>

      <NavLink to='/student/fa' className='nav-link'>
      FA
      </NavLink>
      <NavLink to='/student/marks' className='nav-link'>
        Marks
      </NavLink>

    </div>
  )
}

export default StdNavbar
