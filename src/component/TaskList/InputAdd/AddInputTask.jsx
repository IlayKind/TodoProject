import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTaskStore} from "../../../store/TaskSlice";
import {taskSelector} from "../../../store/Selector";
import './AddInputTask.scss'
import {publicationPost} from "../../../store/asyncRequest/AsyncCreated";


const AddInputTask = ({active, setActive}) => {
  const dispatch = useDispatch();
  const {newTask} = useSelector(taskSelector);
  const [value, setValue] = React.useState({
    task: '',
    description: '',
    dataEnd: '',
    dataNext: ''
  });
  const [statusTask, setStatusTask] = React.useState({
    newTask: true,
    scheduled: false
  });


  const onChange = (e) => {
    const newValue = {...value}
    newValue[e.target.id] = e.target.value
    setValue(newValue)
  };



  const addTask = () => {
    if (value.task === "" || value.description === '' || value.dataEnd === "" || value.dataNext === '') return
    const task = {
      id: newTask.length,
      body: value.task,
      description: value.description,
      dataNext: value.dataNext,
      timer: '0:00:00',
      dataEnd: value.dataEnd,
      status: statusTask.newTask ? "newTask" : "Scheduled",
      completed: false,
      option: false,
    }
    dispatch(addTaskStore(task))
    dispatch(publicationPost(task))
    setActive(!active)
    setValue({
      task: '',
      description: '',
      dataEnd: '',
      dataNext: ''
    })
    setStatusTask({
      newTask: true,
      scheduled: false
    })
  };



  const closeModal = () => {
    setActive(false);
    setValue({
      task: '',
      description: '',
      dataEnd: '',
      dataNext: ''
    })
  };

  const checked = () => {
    if(statusTask.newTask === true && statusTask.scheduled === false){
      setStatusTask({
        newTask: false,
        scheduled: true
      })
    }
    if(statusTask.newTask === false && statusTask.scheduled === true){
      setStatusTask({
        newTask: true,
        scheduled: false
      })
    }
  };

  return (
    <div className={active ? "modal active" : 'modal'} onClick={closeModal}>
      <div className='modal__content' onClick={(e) => e.stopPropagation()}>
        <div className="text-field">
          <label>Задача</label>
          <input
            id='task'
            className='input__value'
            type='text'
            placeholder="Введите Имя задачи"
            value={value.task}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="text-field">
          <label>Описание задачи</label>
          <input
            id='description'
            className="input__value"
            type='text'
            placeholder="Введите описание задачи"
            value={value.description}
            onChange={(e) => onChange(e)}/>
        </div>
      <div className="data-input">
        <div className="date-field">
          <label>- Начало задачи</label>
          <input
            id='dataNext'
            className="input__date"
            type='date'
            min='01-01-2000'
            max='01-01-2100'
            value={value.dataNext}
            onChange={(e) => onChange(e)}/>
        </div>
        <div className="date-field">
          <label>- Примерно окончание задачи</label>
          <input
            id='dataEnd'
            className="input__date"
            type='date'
            min='01-01-2000'
            min='01-01-2100'
            value={value.dataEnd}
            onChange={(e) => onChange(e)}/>
        </div>
      </div>
        <div className='status__active'>
          <div className='checked-field'>
            <input onClick={checked} type='radio' checked={statusTask.newTask}/>
            <label>Актуальная задача</label>
          </div>
          <div className='checked-field'>
            <input onClick={checked} type='radio' checked={statusTask.scheduled}/>
            <label>Задача на будущее</label>
          </div>
        </div>
      <button onClick={addTask}>
        Add
      </button>
    </div>
    </div>
  );
};

export default AddInputTask;