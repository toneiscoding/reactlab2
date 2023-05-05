import React from 'react'
import NavbarButton from './NavbarButton'


const Navbar = () => {
  return (
    <div>
        <NavbarButton text={"Home"} />
        <NavbarButton text={"About"} />
        <NavbarButton text={"Contact"} />
        <NavbarButton text={"Profile"} />
        
    </div>
  )
}

export default Navbar