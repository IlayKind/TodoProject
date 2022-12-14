import React from "react";
import {useDispatch} from "react-redux";
import {addTaskStore} from "../../../store/TaskSlice";
import './AddInputTask.scss'
import {publicationPost} from "../../../store/asyncRequest/AsyncCreated";
import { nanoid } from 'nanoid'
import InputField from "../../InputField";

const objectValue = {
  task: '',
  description: '',
  dataEnd: '',
  dataNext: ''
}

const AddInputTask = ({active, setActive}) => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(objectValue);
  const [statusTask, setStatusTask] = React.useState({
    newTask: true,
    scheduled: false
  });

  const addTask = () => {
    if (value.task === "" || value.description === '' || value.dataEnd === "" || value.dataNext === '') return
    const task = {
      id: nanoid() ,
      body: value.task,
      description: value.description,
      dataNext: value.dataNext,
      timer: '0:00:00',
      dataEnd: value.dataEnd,
      status: statusTask.newTask ? "newTask" : "scheduled",
      completed: false,
      progress: false,
      option: false,
      timeActive: false,
    }
    dispatch(addTaskStore(task))
    dispatch(publicationPost(task))
    setActive(!active)
    setValue(objectValue)
    setStatusTask({
      newTask: true,
      scheduled: false
    })
  };

  const closeModal = () => {
    setActive(false);
    setValue(objectValue)
  };

  const checked = () => {
    if (statusTask.newTask === true && statusTask.scheduled === false) {
      setStatusTask({
        newTask: false,
        scheduled: true
      })
    }
    if (statusTask.newTask === false && statusTask.scheduled === true) {
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
          <InputField
            label="Задача"
            obj={value}
            id='task'
            className='input__value'
            type='text'
            placeholder="Введите Имя задачи"
            value={value.task}
            setValue={setValue}
          />
        </div>
        <div className="text-field">
          <InputField
            label="Описание задачи"
            obj={value}
            id='description'
            className="input__value"
            type='text'
            placeholder="Введите описание задачи"
            value={value.description}
            setValue={setValue}/>
        </div>
        <div className="data-input">
          <div className="date-field">
            <InputField
              label="- Начало задачи"
              obj={value}
              id='dataNext'
              className="input__date"
              type='date'
              min='01-01-2000'
              max='01-01-2100'
              value={value.dataNext}
              setValue={setValue}/>
          </div>
          <div className="date-field">
            <InputField
              label="- Примерно окончание задачи"
              obj={value}
              id='dataEnd'
              className="input__date"
              type='date'
              min='01-01-2000'
              max='01-01-2100'
              value={value.dataEnd}
              setValue={setValue}/>
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