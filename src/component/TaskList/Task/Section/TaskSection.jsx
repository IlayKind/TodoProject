import React from 'react';
import "../Task.scss";
import {useSelector} from "react-redux";
import {taskSelector} from "../../../../store/Selector";
import Task from "../Task";


const TaskSection = () => {
  const {newTask, scheduled, inProgress, completed} = useSelector(taskSelector);

  console.log(inProgress)
  console.log(inProgress)
  return (
    <>
    <table>
      <thead>
      <tr>
        <td className='title-section'><span>newTask {newTask.length}</span></td>
        <td className='title-section'><span>Scheduled {scheduled.length}</span></td>
        <td className='title-section'><span>inProgress {inProgress.length}</span></td>
        <td className='title-section'><span>Completed {completed.length}</span></td>
      </tr>
    </thead>
      <tbody>
      <tr className="task-string">
        <td className='task-section'>
          <div className='task-container'>
            <Task activeTask={newTask}/>
          </div>
        </td>
        <td className='task-section'>
          <div className='task-container'>
          <Task activeTask={scheduled}/>
          </div>
        </td>
        <td className='task-section'>
          <div className='task-container'>
          <Task activeTask={inProgress}/>
          </div>
        </td>
        <td className='task-section'>
          <div className='task-container'>
          <Task activeTask={completed}/>
          </div>
        </td>
      </tr>
    </tbody>
    </table>
    </>
  );
};

export default TaskSection;