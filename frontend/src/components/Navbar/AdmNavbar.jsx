import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const AdmNavbar = () => {
  return (
    <div className='AdmNavbar'> 
      <NavLink to='/admin/facattendence' className='nav-link'>
        Faculty Attendence
        </NavLink>
      <NavLink to='/admin/stuattendence' className='nav-link'>
        Student Attendence
        </NavLink>  
    </div>
  )
}

export default AdmNavbar
