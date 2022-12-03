import {configureStore} from "@reduxjs/toolkit";
import TaskSlice from "./TaskSlice"
import AuthorizationUserSlice from "./AuthorizationUserSlice";


export const Store = configureStore({
  reducer : {TaskSlice, AuthorizationUserSlice}
})