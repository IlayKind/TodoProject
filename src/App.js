import React from "react";
import TaskList from "./component/TaskList/TaskList";
import {Route, Routes} from "react-router-dom";
import './App.scss'
import Registration from "./component/Authorization/Registration";
import AuthorizationForm from "./component/Authorization/AuthorizationForm";


function App() {
  return (
    <div className="project-home">
      <Routes>
        <Route path='/' element={<AuthorizationForm/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path="/TaskList" element={<TaskList/>}/>
    </Routes>
    </div>
  );
}

export default App;
