import React from 'react';
import LogOut from "../LogOut";
import '../TaskList.scss'
import {motion} from "framer-motion"

const HeaderNavigate = ({setAddModalForm}) => {
  return (
    <div className='header-navigate'>
      <div className='add__task'>
        <h1 className='add-title'>Add Task</h1>
        <button
          onClick={() => setAddModalForm(true)} className='add-btn'>
          <span>+</span>
        </button>
      </div>
      <LogOut/>
    </div>
  );
};

export default HeaderNavigate;