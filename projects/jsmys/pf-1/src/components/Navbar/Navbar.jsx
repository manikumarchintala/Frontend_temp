import React from 'react';
import './Navbar.css'
import logo from'../../assets/logo.svg' 
const Navbar = () => {
  return (
    <div className='gpt3_navbar'>
      <div className='gpt3__navbar-links'>
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt='logo'/>
        </div>
        <div className='gpt3__navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>What Gpt?</a></p>
          <p><a href='possibility'>Open Ai</a></p>
          <p><a href='features'></a>Case Studies</p>
          <p><a href='Blog'></a>Library</p>
        </div>
      </div>
      <div className='gpt__navbar-sign'>
        <p>Sign in</p>
        <button type='button'> Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar