import React, {useEffect, useState} from 'react';
import "./Task.scss"
import OptionTask from "./OptionTask";
import EditModal from "./EditTask/EditModal";
import {useDispatch} from "react-redux";
import {optionActive} from "../../../store/TaskSlice";
import { getPost } from "../../../store/asyncRequest/AsyncCreated";


const Task = ({activeTask}) => {
      const dispatch = useDispatch();
      const [edit, setEdit] = useState(false);

      useEffect(() => {
        dispatch(getPost())
      },[]);

      const activeOptions = (item) => {
        dispatch(optionActive(item))
      }
  return (
    <>
      {
        activeTask.map((item) => {
            const {id, body, description, dataNext, dataEnd, completed, option} = item;
            return <div key={id} className={!completed ? 'task-item' : "task-item-completed"}>
              <p className='task-date'>от-{dataNext}</p>
              <h3 className='task-title'>{body}</h3>
              <p className='task-description'>{description}</p>
              <p className='task-date'>до-{dataEnd}</p>
              <div onClick={() => activeOptions(item)} className='option'>
                <img width='20px' height='20px' src='/img/options.png'/>
              </div>
              {
                option ? <OptionTask setEdit={setEdit} item={item}/> : ''
              }
              <EditModal edit={edit} setEdit={setEdit} task={item}/>
            </div>
          }
        )
      }
    </>
  );
};

export default Task;