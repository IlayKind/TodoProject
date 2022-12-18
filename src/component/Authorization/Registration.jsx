import React from 'react';
import './Authorization.scss'
import {NavLink} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/AuthorizationUserSlice";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";
import {registrationPost} from "../../store/asyncRequest/AsyncCreatedUsers";
import {nanoid} from "nanoid";
import {motion} from "framer-motion"

const objectValue ={
  id: nanoid(),
  name: '',
  lastName: '',
  email: '',
  password: '',
  image: ""
}

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(objectValue);

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
        dispatch(registrationPost(value))
        navigate('/AuthorizationForm')
      })
    .catch(console.error)
  }

  return (
    <div className='form-container'>
      <div className='blackout'></div>
      <motion.div
        initial={{ opacity: 0,  }}
        animate={{ opacity: 1,  }}
        transition={{ duration: 1, }}

        className='registration-logo'
      >
        <span className='logo-title'>C<div className='logo'><img width='60px' height='60px' src='/img/logo.png'/></div>SMO</span>
      </motion.div>
    <motion.div
      initial={{ opacity: 0,  }}
      animate={{ opacity: 1,  }}
      transition={{ duration: 1 }}

      className='registration__form'
    >
      <InputField
        label='Name'
        obj={value}
        id='name'
        type='text'
        value={value.name}
        placeholder='Name'
        setValue={setValue}
        className='input-registration'
      />
      <InputField
        label='LastName'
        obj={value}
        id='lastName'
        type='text'
        value={value.lastName}
        placeholder='LastName'
        setValue={setValue}
        className='input-registration'
      />
      <InputField
        label='Email'
        obj={value}
        id='email'
        type='text'
        value={value.email}
        placeholder='Email'
        setValue={setValue}
        className='input-registration'
      />
      <InputField
        label='Password'
        obj={value}
        id='password'
        type='text'
        value={value.password}
        placeholder='Password'
        setValue={setValue}
        className='input-registration'
      />
      <div className='btn-group'>
        <NavLink to='/AuthorizationForm' className='cansel__authorization'>
          Cansel
        </NavLink>
      <button onClick={() => createUser(value.email, value.password)}>
        Registration
      </button>
    </div>
    </motion.div>
    </div>
  );
};

export default Registration;