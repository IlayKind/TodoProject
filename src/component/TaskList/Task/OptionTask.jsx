import React, {useState} from 'react';
import {checkTask, deleteTaskItem, editTaskItem, progressTaskItem} from "../../../store/TaskSlice";
import {useDispatch, useSelector} from "react-redux";
import {deletePost, publicationPost} from "../../../store/asyncRequest/AsyncCreated";
import {nanoid} from "nanoid";
import {taskSelector} from "../../../store/Selector";
import TimerModal from "./Timer/TimerModal";


const OptionTask = ({item, setEdit}) => {
  const {inProgress} = useSelector(taskSelector);
  const [time, setTime] = useState(false)
  const {id, status, completed, progress} = item;
  const dispatch = useDispatch();
  const deleteTask = (status, id) => {
    dispatch(deleteTaskItem({
      status: status,
      id: id
    }))
    dispatch(deletePost({
      status: status,
      id: id
    }))
  }

  const editTask = (action) => {
    setEdit(true)
    dispatch(editTaskItem(action))
  }

  const check = (item) => {
    const obj = {...item}
    obj.completed = true;
    obj.id = nanoid();
    obj.status = "completed";
    obj.option = false;
    dispatch(checkTask(item))
    dispatch(publicationPost(obj))
    console.log(obj)
    dispatch(deletePost(item))
    console.log(item)
  }

  const progressOption = () => {
    setTime(true)
  }

  console.log(inProgress)
  return (
    <div className={!completed ? 'option-nav' : "option-nav-completed"}>
      <button className='btn-option' onClick={() => deleteTask(status, id)}>
        <img width='22px' height='22px' src='/img/delete.png'/>
      </button>
      {
        !completed && !progress ? <>
          <button className='btn-option' onClick={() => editTask(item)}><img width='16px' height='16px' src='/img/edit.png'/></button>
          <button className='btn-option' onClick={() => check(item)}><img width='16px' height='16px' src='/img/check.png'/></button>
          <button className='btn-option' onClick={() => progressOption(item)} ><img width='17px' height='17px' src='/img/time.png'/></button>
        </> : ""
      }
      <TimerModal item={item} time={time} setTime={setTime}/>
    </div>
  );
};

export default OptionTask;