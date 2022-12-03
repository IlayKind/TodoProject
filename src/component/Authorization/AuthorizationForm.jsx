import React from 'react';
import './Authorization.scss'
import {NavLink} from "react-router-dom";


const AuthorizationForm = () => {
  const [value, setValue] = React.useState({
    name: '',
    password: ''
  });

  const onChange = (e) => {
    const newValue = {...value}
    newValue[e.target.id] = e.target.value
    setValue(newValue)
  }

  return (
    <div className='authorization__list'>
      <h3 className='authorization__title'>Войдите в аккаунт</h3>
      <input
        className='authorization__name'
        id='name'
        type='text'
        placeholder='login'
        value={value.name}
        onChange={(e) => onChange(e)}
      />
      <input
        className='authorization__password'
        id='password'
        type='text'
        placeholder='password'
        value={value.password}
        onChange={(e) => onChange(e)}
      />
      <button className='authorization__btn'>
        Войти
      </button>

      <NavLink to='/Registration' className='registration__btn'>
        Регистрация аккаунта
      </NavLink>
    </div>
  );
};

export default AuthorizationForm;