import React, {useState} from 'react';
import {deletePost, publicationPost} from "../../../../store/asyncRequest/AsyncCreated";
import {deleteTaskItem, progressTaskItem} from "../../../../store/TaskSlice";
import {useDispatch} from "react-redux";
import '../Task.scss'


const TimerModal = ({item, time, setTime}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('')
  const closeModal = () => {
    setTime(false);
  };

  const progressPush = () => {
    console.log(item)
    const obj = {...item}
    obj.status = "inProgress";
    obj.option = false;
    obj.progress = true;
    obj.timer = `${value}T00:00:00`
    dispatch(publicationPost(obj))
    dispatch(deletePost(item))
    dispatch(deleteTaskItem(item))
    dispatch(progressTaskItem(obj))
    closeModal()
  }
  console.log(value)
  return (
    <div className={time ? "modal-time active" : 'modal-time'} onClick={closeModal}>
      <div className='modal__content-time' onClick={(e) => e.stopPropagation()}>
        <div className="text-field">
          <label>Выбирите примерное число окончания задачи</label>
          <input
            className='input__value'
            type='date'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button className='btn-time-active' onClick={progressPush}>
          Подтвердить
        </button>
      </div>
    </div>
  );
};

export default TimerModal;