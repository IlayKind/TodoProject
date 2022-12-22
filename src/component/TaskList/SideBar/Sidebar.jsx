import React from 'react';
import './SideBar.scss'
import {NavLink} from "react-router-dom";
const Sidebar = () => {
  return (
    <div className='sidebar__container'>
      <div className='sidebar-links'>
        <div className='sidebar__logo'>
          <span className='logo-title'>C<div className='logo'><img width='45px' height='45px' src='/img/logo.png'/></div>SMO</span>
        </div>
        <input
        className="input-sort"
        type="text"
        placeholder="...search"
        />
        <div className='links'>
          <NavLink className='link' to='/Universe'>
            Universe
          </NavLink>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;