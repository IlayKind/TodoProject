import React, {useState} from 'react';
import './Universe.scss'
import {motion} from "framer-motion"
import {NavLink} from "react-router-dom";
import UniverseMenu from "./UniverseMenu";

const Universe = () => {
  const [menuActive, setMenuActive] = useState(false);

  const menu = () => {
    setMenuActive(!menuActive)
  }
  console.log(menuActive)
  return (
    <div className='universe-container'>
      <div onClick={menu} className={!menuActive ? "burger-menu-icon" : "burger-menu-icon active"}>
        <img width='40px' height='40px' src="/img/burger.png"/>
      </div>
      <div onClick={menu} className={menuActive ? "burger-menu-icon" : "burger-menu-icon active"}>
        <img width='50px' height='50px' src="/img/cross.png"/>
      </div>
      <UniverseMenu menuActive={menuActive}/>
      <div className='menu-container'>
      <motion.div
        initial={{ scale: 0.8,  }}
        animate={{ scale: 1,  }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className='planet1'>
        <img  width='300px' height='300px' src='img/planet1.png'/>
        <div className="planet-description1">
          In developing
        </div>
      </motion.div>
        <NavLink to="/ShopTourist">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        initial={{opacity: 0, }}
        animate={{opacity: 1,  }}
        transition={{ delay: 0, duration: 0.5 }}
        className='planet2'>
        <img  width='280px' height='300px' src='img/planet2.png'/>
        <div className="planet-description2">
          In developing
        </div>
      </motion.div>
        </NavLink>
        <NavLink to="/TaskList">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        initial={{ x: 400,scale: 0  }}
        animate={{ x:0,scale: 1  }}
        transition={{ delay: 0.5 }}
        className='spaceship'>
        <img  width='700px' height='500px' src='img/cosmoK.png'/>
        <div className="spaceship-description3">
          Hello. On board this spaceship, you can use the onboard computer to write down all the tasks that you need to do in this universe.
        </div>
      </motion.div>
</NavLink>
    </div>
    </div>
  );
};

export default Universe;