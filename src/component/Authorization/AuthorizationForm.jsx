import React from 'react';
import './Authorization.scss'
import {NavLink, useNavigate} from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/AuthorizationUserSlice";
import InputField from "../InputField";


const AuthorizationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = React.useState({
    email: '',
    password: ''
  });

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user)
        dispatch(setUser({
          email: user.email,
          token: user.accessToken,
          id: user.uid
        }));
        navigate('/TaskList')
      })
      .catch(console.error)
  }

  return (
    <div className='authorization__list'>
      <h3 className='authorization__title'>Войдите в аккаунт</h3>
      <InputField
        obj={value}
        className='authorization__name'
        id='email'
        type='text'
        placeholder='login'
        value={value.email}
        setValue={setValue}
      />
      <InputField
        obj={value}
        className='authorization__password'
        id='password'
        type='password'
        placeholder='password'
        value={value.password}
        setValue={setValue}
      />
      <button onClick={() => handleLogin(value.email, value.password)} className='authorization__btn'>
        Войти
      </button>

      <NavLink to='/Registration' className='registration__link'>
        Создать аккаунт
      </NavLink>
    </div>
  );
};

export default AuthorizationForm;