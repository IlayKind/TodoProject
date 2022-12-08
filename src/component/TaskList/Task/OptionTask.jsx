import React from 'react';
import {checkTask, deleteTaskItem, editTaskItem} from "../../../store/TaskSlice";
import {useDispatch, useSelector} from "react-redux";
import {deletePost, publicationPost} from "../../../store/asyncRequest/AsyncCreated";
import {taskSelector} from "../../../store/Selector";


const OptionTask = ({item, setEdit}) => {
  const {id, status, completed} = item;
  const dispatch = useDispatch();
  const arr = useSelector(taskSelector)
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
    obj.id = arr.completed.length;
    obj.status = "completed";
    obj.option = false;
    dispatch(checkTask(item))
    dispatch(publicationPost(obj))
    dispatch(deletePost(item))
  }
  return (
    <div className={!completed ? 'option-nav' : "option-nav-completed"}>
      <button onClick={() => deleteTask(status, id)}>
        <img width='22px' height='22px' src='/img/delete.png'/>
      </button>
      {
        !completed ? <>
          <button onClick={() => editTask(item)}><img width='16px' height='16px' src='/img/edit.png'/></button>
          <button onClick={() => check(item)}><img width='16px' height='16px' src='/img/check.png'/></button>
        </> : ""
      }
    </div>
  );
};

export default OptionTask;