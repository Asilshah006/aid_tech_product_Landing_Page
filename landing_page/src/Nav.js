import React from 'react'
import logo from './logo.png'
const Nav = () => {
  return (
    <>
    <header>
        <img src={logo} alt="" />
       <ul>
        <li><p>Home</p></li>
        <li>Menu</li>
        <li>What's New</li>
        <li>About</li>
       </ul>
    </header>
    <div className='circle'>
        
        </div>
    </>
  )
}

export default Nav