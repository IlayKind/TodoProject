import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../../store/Selector";
import { useNavigate } from 'react-router-dom'
import {removeUser} from "../../store/AuthorizationUserSlice";
import './TaskList.scss'


const LogOut = () => {
  const {email, name, lastName} = useSelector(userSelector);
  const dispatch = useDispatch();
  const [windowProfile, setWindowProfile] = React.useState(false)
  const navigate = useNavigate();

  const exit = () => {
    dispatch(removeUser());
    navigate('/')
  }

  return (
    <div className='profile-container'>
      <h3 onClick={() => setWindowProfile(!windowProfile)} className='icon__profile'>{email[0]}</h3>
      {
        windowProfile ? <div className='window-profile'>
          <p className='user-profile'>{name} {lastName}</p>
          <button className='exit-profile' onClick={exit}>
            Log Out
          </button>
        </div> : ""
      }
    </div>
  )
};

export default LogOut;