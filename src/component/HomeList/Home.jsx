import React from 'react';
import './Home.scss'
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion"

const Home = () => {
  return (
    <div className='home-container'>
      <div className='blackout-fon'>
      <div className='home-content'>
        <div className='greetings-content'>
          <div className='header-content'>
            <motion.div
              initial={{ opacity: 0,  }}
            animate={{ opacity: 1,  }}
              transition={{ duration: 0.5, }}
              className='header-logo'
            >
              <span className='logo-title'>C<div className='logo'><img width='60px' height='60px' src='/img/logo.png'/></div>SMO</span>
            </motion.div>
          </div>
            <motion.div
              className='greeting-block'
             initial={{ opacity: 0,  }}
            animate={{ opacity: 1,  }}
              transition={{ duration: 1 }}
            >
              <span className='greeting-text'>Hello user!<br/>
              <br/>
              This product is for informational purposes only.<br/>
              It is a collection of applications I have created.<br/>
              It happens that I use it for my own purposes and I really hope that you will like the way it is made.<br/>
              I wish you a pleasant use!<br/>
              <br/>
              ( You can start using the product by clicking on the <span className='open-text'>OPEN</span> button )
              </span>
            </motion.div>
          <motion.div
            className='contacts'
            initial={{ opacity: 0,  }}
            animate={{ opacity: 1,  }}
            transition={{ duration: 2 }}
          >
            <span className='navbar-title'>
              Contacts
            </span>
            <div className='contact-link'>
              <a href="https://t.me/Ilay_kind">
                <img width='30px' height='30px' src='/img/telegram.png'/>
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox">
                <img width='30px' height='30px' src='/img/gmail.png'/>
              </a>
            </div>
          </motion.div>
        </div>
        <div className='transition-content'>
          <motion.div
            initial={{ opacity: 0,  }}
            animate={{ opacity: 1,  }}
            transition={{ duration: 3 }}
            className="position-block"
          >
            <div className='click-table' >
              <span>click on me<br/><NavLink to='/AuthorizationForm'><h1>OPEN</h1></NavLink></span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;