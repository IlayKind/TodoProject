import React from 'react';
import './Authorization.scss'
import {NavLink, useNavigate} from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/AuthorizationUserSlice";
import InputField from "../InputField";
import {postValuesActiveUser} from "../../store/asyncRequest/AsyncCreatedUsers";
import {motion} from "framer-motion"


const objectValue = {
  email: '',
  password: ''
}

const AuthorizationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(objectValue);


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
        dispatch(postValuesActiveUser(value.email))
        navigate('/TaskList')
      })
      .catch(console.error)
  }

  return (
    <div className='form-container'>
      <div className='blackout'>
      </div>
      <motion.div
        initial={{ opacity: 0,  }}
        animate={{ opacity: 1,  }}
        transition={{ duration: 1, delay: 0.9, }}
        className='authorization-logo'
      >
        <span className='logo-title'>C<div className='logo'><img width='60px' height='60px' src='/img/logo.png'/></div>SMO</span>
      </motion.div>
      <div className='block-group'>
      <motion.div
        initial={{ y: -2000,  }}
        animate={{ y:0  }}
        transition={{ duration: 0.9, delay: 0, }}
        className='top-block'
      >
      </motion.div>
      <motion.div
        initial={{ y: 2000,  }}
        animate={{ y:0  }}
        transition={{ duration: 0.9, delay: 0, }}
        className='bottom-block'
      >
      </motion.div>
    </div>
    <motion.div initial={{ opacity: 0,  }}
                animate={{ opacity: 1,  }}
                transition={{ duration: 1, delay: 0.9, }} className='authorization__list'>
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
        Come
      </button>

      <NavLink to='/Registration' className='registration__link'>
        Create an account.
      </NavLink>
    </motion.div>
</div>
  );
};

export default AuthorizationForm;