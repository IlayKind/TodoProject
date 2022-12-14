import React from 'react';
import "../Task.scss";
import {useSelector} from "react-redux";
import {taskSelector} from "../../../../store/Selector";
import Section from "./Section";

const TaskSection = () => {
  const {newTask, scheduled, inProgress, completed} = useSelector(taskSelector);

  return (
    <div className='task__section'>
      <div className='section'>
      <Section activeStatus={newTask} title={'New task'}/>
    </div>
      <div className='section'>
        <Section activeStatus={scheduled} title={'Scheduled'}/>
      </div>
      <div className='section'>
        <Section activeStatus={inProgress} title={'In progress'}/>
      </div>
      <div className='section-end'>
        <Section activeStatus={completed} title={'Completed'}/>
      </div>
    </div>
  );
};

export default TaskSection;