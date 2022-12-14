import React from 'react';
import './SideBar.scss'
import {NavLink} from "react-router-dom";
const Sidebar = () => {
  return (
    <div className='sidebar__container'>
      <div className='sidebar-links'>
        <div className='sidebar__logo'>
          <img width='22px' height='22px' src='/img/plant.png'/>
          <h1 className='sidebar__logo-text'>Freya.</h1>
        </div>
        <input
        className="input-sort"
        type="text"
        placeholder="...search"
        />
        <div className='links'>
          <NavLink className='link' to='/TaskList'>
            Доска задач
          </NavLink>
          <NavLink className='link' to='/TaskList'>
            Доска задач
          </NavLink>
          <NavLink className='link' to='/TaskList'>
            Доска задач
          </NavLink>
          <NavLink className='link' to='/TaskList'>
            Доска задач
          </NavLink>
          <NavLink className='link' to='/TaskList'>
            Доска задач
          </NavLink>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;