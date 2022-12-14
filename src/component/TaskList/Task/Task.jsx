import React, {useEffect,useState} from 'react';
import "./Task.scss"
import OptionTask from "./OptionTask";
import EditModal from "./EditTask/EditModal";
import {useDispatch} from "react-redux";
import {optionActive} from "../../../store/TaskSlice";
import { getPost } from "../../../store/asyncRequest/AsyncCreated";
import {getImageUser, getValuesUser} from "../../../store/asyncRequest/AsyncCreatedUsers";
import Timer from "./Timer/Timer";
import TimerModal from "./Timer/TimerModal";


const date = new Date("Jan 1 2023 00:00:00")
const count = () => {
  const now = new Date();
  const gap = date - now;
  return gap
};



const Task = ({activeTask}) => {
      const dispatch = useDispatch();
      const [edit, setEdit] = useState(false);


      useEffect(() => {
        dispatch(getPost())
        dispatch(getValuesUser())
        dispatch(getImageUser())
      },[]);

      const activeOptions = (item) => {
        dispatch(optionActive(item))
      }


  return (
    <>
      {
        activeTask.map((item) => {
            const {id, body, description, dataNext, dataEnd, completed, option, progress, timer} = item;
            return <div key={id} className={!completed ? 'task-item' : "task-item-completed"}>
              <p className='task-date'>от-{dataNext}</p>
              <h3 className='task-title'>{body}</h3>
              <p className='task-description'>{description}</p>
              <div className='bottom-part'>
                <p className='task-date'>до-{dataEnd}</p>
                {progress ? <Timer timer={timer}/> : ""}
              </div>
              <div onClick={() => activeOptions(item)} className='option'>
                <img width='20px' height='20px' src='/img/options.png'/>
              </div>
              {option ? <OptionTask setEdit={setEdit} item={item}/> : ''}
              <EditModal edit={edit} setEdit={setEdit} task={item}/>
            </div>
          }
        )
      }
    </>
  );
};

export default Task;