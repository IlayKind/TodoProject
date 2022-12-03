import React from 'react';
import AddInputTask from "../InputAdd/AddInputTask";
import Task from "../Task/Task";
import './TaskList.scss'

const TaskList = () => {
  const [addModalForm, setAddModalForm] = React.useState(false);
  return (
    <div className='container'>
          <header>
            <h1 className='add-title'>Add Task</h1>
            <button onClick={() => setAddModalForm(true)} className='add-btn'>
              +
            </button>
          </header>
      <AddInputTask active={addModalForm} setActive={setAddModalForm}/>
      <Task/>
    </div>
  );
};

export default TaskList;