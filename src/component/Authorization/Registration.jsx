import React from 'react';
import './Authorization.scss'
import {NavLink} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../../store/AuthorizationUserSlice";
import { useNavigate } from "react-router-dom";
import {userSelector} from "../../store/Selector";

const Registration = () => {
  const {name} = useSelector(userSelector)
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
  console.log(name)
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