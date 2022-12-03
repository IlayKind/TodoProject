import React from 'react';
import {useSelector} from "react-redux";
import {taskSelector} from "../../store/Selector";
import "./Task.scss"
const Task = () => {
  const arrayTask = useSelector(taskSelector);

  return (
    <div className='task-info'>
      <h1 className='queue-title'>Queue</h1>
      <div className='queue-item'>
        {
          arrayTask.map(({id, body, description, dataNext, timer, dataEnd, status}) =>
            <div className='task-item'>
            <p>{id}</p>
            <div className='task-title'><h2>{body}.</h2><p>{description}.</p></div>
            <p>{dataNext}</p>
            <p>{timer}</p>
            <p>{dataEnd}</p>
            <p>{status}</p>
          </div>
          )
        }
      </div>
    </div>
  );
};

export default Task;