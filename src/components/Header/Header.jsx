import React from 'react'
import logo from '../../imgs/houser.png'

const Header = () => {
  return (
    <nav>
      <div className='nav-container'>
        <img className='houser-logo' src={logo} alt="Houser"/>
        <div className='houser'>Houser</div>
      </div>
    </nav>
  );
}

export default Header