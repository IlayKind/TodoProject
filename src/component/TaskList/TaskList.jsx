import React from 'react';
import AddInputTask from "./InputAdd/AddInputTask";
import './TaskList.scss';
import Sidebar from "./SideBar/Sidebar";
import HeaderNavigate from "./Header/HeaderNavigate";
import TaskSection from "./Task/Section/TaskSection";

const TaskList = () => {
  const [addModalForm, setAddModalForm] = React.useState(false);
  return (
    <div className='container'>
      <div className='blackout-fon'>
      </div>
      <Sidebar/>
      <div className='content__task'>
        <HeaderNavigate setAddModalForm={setAddModalForm}/>
        <AddInputTask active={addModalForm} setActive={setAddModalForm}/>
        <TaskSection/>
      </div>
    </div>
  );
};

export default TaskList;