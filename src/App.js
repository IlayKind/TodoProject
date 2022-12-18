import React from "react";
import TaskList from "./component/TaskList/TaskList";
import {Route, Routes} from "react-router-dom";
import './App.scss'
import Registration from "./component/Authorization/Registration";
import AuthorizationForm from "./component/Authorization/AuthorizationForm";
import './firebase'
import Home from "./component/HomeList/Home";


function App() {
  return (
    <div className="project-home">
      <Routes>
        <Route path='/AuthorizationForm' element={<AuthorizationForm/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path="/TaskList" element={<TaskList/>}/>
        <Route path="/" element={<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;
