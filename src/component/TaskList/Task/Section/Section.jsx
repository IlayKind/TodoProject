import React from 'react';
import Task from "../Task";
import '../Task.scss'

const Section = ({activeStatus, title}) => {

  return (
    <>
      <div className='section-title'>
        <h3>{title}<span>{activeStatus.length}</span></h3>
      </div>
      <div className='section-content'>
        <Task activeTask={activeStatus} />
      </div>

    </>
  );
};

export default Section;