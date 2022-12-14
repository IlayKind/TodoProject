import React from 'react';
import Countdown from "react-countdown";

const Timer = ({timer}) => {
  return (
    <div className='timer-item'>
      <Countdown date={timer}>

      </Countdown>
    </div>
  );
};

export default Timer;