import React from 'react';
import './Authorization.scss'
import {NavLink} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/AuthorizationUserSlice";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = React.useState({
    name: '',
    lastName: '',
    email: '',
    password: ''
  });

  const createUser = (lastName, name, email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, lastName, name, email, password)
      .then(({user}) => {
        console.log(user)
        dispatch(setUser({
          email: user.email,
          token: user.accessToken,
          id: user.uid
        }));
        navigate('/')
      })
    .catch(console.error)
  }

  return (
    <div className='registration__form'>
      <h3 className='registration__title'>Создайте аккаунт</h3>
      <InputField
        obj={value}
        id='name'
        type='text'
        value={value.name}
        placeholder='Name'
        setValue={setValue}
      />
      <InputField
        obj={value}
        id='lastName'
        type='text'
        value={value.lastName}
        placeholder='LastName'
        setValue={setValue}
      />
      <InputField
        obj={value}
        id='email'
        type='text'
        value={value.email}
        placeholder='Email'
        setValue={setValue}
      />
      <InputField
        obj={value}
        id='password'
        type='text'
        value={value.password}
        placeholder='Password'
        setValue={setValue}
      />
      <button onClick={() => createUser(value.email, value.password)}>
        Registration
      </button>
      <NavLink to='/' className='cansel__authorization'>
        Cansel
      </NavLink>
    </div>
  );
};

export default Registration;