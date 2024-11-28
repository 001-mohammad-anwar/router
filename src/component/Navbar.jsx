import React from 'react'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
  return (
    <nav>
        <ul className='navbar'>
            <NavLink  className={(e)=>{return e.isActive?"red":""}} to="/"><li>Home</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red":""}} to="/About"><li>About</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red":""}} to="/Contact"><li>Contact</li></NavLink>
        </ul>
    </nav>
  )
}

export default Navbar
