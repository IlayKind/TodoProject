import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../../store/Selector";
import { useNavigate } from 'react-router-dom'
import {loadingImage, removeUser} from "../../store/AuthorizationUserSlice";
import './TaskList.scss'
import {postImageUser} from "../../store/asyncRequest/AsyncCreatedUsers";


const LogOut = () => {
  const {id,email, name, lastName, image} = useSelector(userSelector);
  const item = useSelector(userSelector);
  const dispatch = useDispatch();
  const [windowProfile, setWindowProfile] = React.useState(false)
  const navigate = useNavigate();

  const exit = () => {
    dispatch(removeUser());
    navigate('/')
  }
  const windowProfileActive = () => {
    setWindowProfile(!windowProfile)
  }
  const handleChange = (e) => {
    dispatch(loadingImage([{
      image: e.target.files[0].name
    }]))
    dispatch(postImageUser({
      id:id,
      item: item,
      image: e.target.files[0].name
    }))
  }

  return (
    <div className='profile-container'>
      <div onClick={windowProfileActive} className='icon__profile'>
        {
          image === "" ? email[0] : <img src={`/img/${image}`}/>
        }
      </div>
      {
        windowProfile ? <div className='window-profile'>
          <div className='icon__profile'>
            {
              image === "" ? email[0] : <img src={`/img/${image}`}/>
            }
            <label className='file-field__style' htmlFor="input__file">
              +
            </label>
            <input
              id='input__file'
              onChange={handleChange}
              type='file'
              accept='image/*, .png, .jpg, .svg'
            />
          </div>
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