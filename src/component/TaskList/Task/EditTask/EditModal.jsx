import React from 'react';
import '../../InputAdd/AddInputTask.scss'
import {useDispatch} from "react-redux";
import {saveEditTask} from "../../../../store/TaskSlice";
import {editPost} from "../../../../store/asyncRequest/AsyncCreated";
import InputField from "../../../InputField";

const EditModal = ({edit, setEdit, task}) => {
  const dispatch = useDispatch();
  const {id, body, description, dataNext, dataEnd, status} = task;
  const [value, setValue] = React.useState({
    task: body,
    description: description,
    dataEnd: dataEnd,
    dataNext: dataNext
  });

  const closeModal = () => {
    setEdit(false);
    setValue({
      task: body,
      description: description,
      dataEnd: dataEnd,
      dataNext: dataNext
    })
  };

  const saveEdit = () => {
    if (value.task === '' ||
      value.description === '' ||
      value.dataEnd === '' ||
      value.dataNext === '') return
    const item = {
      id: id,
      body: value.task,
      description: value.description,
      dataEnd: value.dataEnd,
      dataNext: value.dataNext,
      status: status,
    }
    dispatch(saveEditTask(item));
    dispatch(editPost(item))
    setEdit(false)
  }
  return (
    <div className={edit ? "modal active" : 'modal'} onClick={closeModal}>
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
        <button onClick={saveEdit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditModal;