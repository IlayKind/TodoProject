import React from 'react';
import './Universe.scss'
import {NavLink} from "react-router-dom";
const UniverseMenu = ({menuActive}) => {
  return (
    <div className={!menuActive ? 'burger-menu-block' : 'burger-menu-block active'}>
      <span className='logo-title'>C<div className='logo'><img width='40px' height='40px' src='/img/logo.png'/></div>SMO</span>
      <div className='link-block'>
      <NavLink to='/TaskList'>
        <div className='onboard-taskbar'>
          Onboard taskbar
        </div>
    </NavLink>
    </div>
    </div>
  );
};

export default UniverseMenu;