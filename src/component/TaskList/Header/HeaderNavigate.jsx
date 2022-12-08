import React from 'react';
import LogOut from "../LogOut";
import '../TaskList.scss'

const HeaderNavigate = ({setAddModalForm}) => {
  return (
    <div className='header-navigate'>
      <div className='add__task'>
        <h1 className='add-title'>Add Task</h1>
        <button onClick={() => setAddModalForm(true)} className='add-btn'>
          +
        </button>
      </div>
      <LogOut/>
    </div>
  );
};

export default HeaderNavigate;