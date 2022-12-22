import React from 'react';
import '../ShopTourist.scss'
import {NavLink} from "react-router-dom";
const HeaderShop = () => {
  return (
    <div className='header _container'>
      <div className='nav-bar'>
        <div className='header-logo'>
          <span className='logo-title'>C<div className='logo'><img width='60px' height='60px' src='/img/logo.png'/></div>SMO</span>
        </div>
        <div className='nav'>
          <NavLink to='#'>Place</NavLink>
          <NavLink to='#'>Hotel</NavLink>
          <NavLink to='#'>Tours</NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeaderShop;