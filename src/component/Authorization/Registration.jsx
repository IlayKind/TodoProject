import React from 'react';
import './Authorization.scss'
import {NavLink} from "react-router-dom";

const Registration = () => {
  const [value, setValue] = React.useState({
    name: '',
    lastName: '',
    email: '',
    password: ''
  });

  const onChange = (e) => {
    const newValue = {...value}
    newValue[e.target.id] = e.target.value
    setValue(newValue)
  }
  return (
    <div className='registration__form'>
      <h3 className='registration__title'>Создайте аккаунт</h3>
      <input
        id='name'
        type='text'
        value={value.name}
        placeholder='Name'
        onChange={(e) => onChange(e)}
      />
      <input
        id='lastName'
        type='text'
        value={value.lastName}
        placeholder='LastName'
        onChange={(e) => onChange(e)}
      />
      <input
        id='email'
        type='text'
        value={value.email}
        placeholder='Email'
        onChange={(e) => onChange(e)}
      />
      <input
        id='password'
        type='text'
        value={value.password}
        placeholder='Password'
        onChange={(e) => onChange(e)}
      />
      <button>
        Registration
      </button>
      <NavLink to='/' className='cansel__authorization'>
        Cansel
      </NavLink>
    </div>
  );
};

export default Registration;