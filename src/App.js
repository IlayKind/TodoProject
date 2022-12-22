import React from "react";
import TaskList from "./component/TaskList/TaskList";
import {Route, Routes} from "react-router-dom";
import './App.scss'
import Registration from "./component/Authorization/Registration";
import AuthorizationForm from "./component/Authorization/AuthorizationForm";
import './firebase'
import Home from "./component/HomeList/Home";
import Universe from "./component/UniverseOfPossibilities/Universe";
import ShopTourist from "./component/ShopTourist/ShopTourist";


function App() {
  return (
    <div className="project-home">
      <Routes>
        <Route path='/AuthorizationForm' element={<AuthorizationForm/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path="/TaskList" element={<TaskList/>}/>
        <Route path="/Universe" element={<Universe/>}/>
        <Route path='/ShopTourist' element={<ShopTourist/>}/>
        <Route path="/" element={<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;
