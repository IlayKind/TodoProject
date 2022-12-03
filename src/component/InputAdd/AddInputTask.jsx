import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTaskStore} from "../../store/TaskSlice";
import {taskSelector} from "../../store/Selector";
import './AddInputTask.scss'

const AddInputTask = ({active, setActive}) => {
  const dispatch = useDispatch();
  const ArrayTask = useSelector(taskSelector)
  const [titleTask, setTitleTask] = React.useState('');
  const [descriptionTask, setDescriptionTask] = React.useState('');
  const [dataNextTask, setDataNextTask] = React.useState('');
  const [dataEndTask, setDataEndTask] = React.useState('');

  const addTask = () => {
    if (titleTask === "" || dataNextTask === '') return
    const task = {
      id: ArrayTask.length,
      body: titleTask,
      description: descriptionTask,
      dataNext: dataNextTask,
      timer: "0:00:00",
      dataEnd: dataEndTask,
      status: "development",
    }
    dispatch(addTaskStore(task))
    setDataEndTask('')
    setDescriptionTask('')
    setTitleTask('')
    setDataNextTask('')
  }

  const closeModal = () => {
    setActive(false)
    setDataEndTask('')
    setDescriptionTask('')
    setTitleTask('')
    setDataNextTask('')
  }
  return (
    <div className={active ? "modal active" : 'modal'} onClick={closeModal}>
      <div className='modal__content' onClick={(e) => e.stopPropagation()}>
      <input className='input__title' type='text' placeholder="Введите Имя задачи" value={titleTask}
             onChange={(e) => setTitleTask(e.target.value)}/>
      <input className="input__description" type='text' placeholder="Введите описание задачи" value={descriptionTask}
             onChange={(e) => setDescriptionTask(e.target.value)}/>
      <div className="data-input">
        <p>Дата начала задачи</p>
        <input className="input__next" type='text' placeholder="00/00/0000" value={dataNextTask}
               onChange={(e) => setDataNextTask(e.target.value)}/>
        <p> - </p>
        <input className="input__end" type='text' placeholder="00/00/0000" value={dataEndTask}
               onChange={(e) => setDataEndTask(e.target.value)}/>
        <p>Примерная дата окончания задачи</p>
      </div>
      <button onClick={addTask}>
        Add
      </button>
    </div>
    </div>
  );
};

export default AddInputTask;