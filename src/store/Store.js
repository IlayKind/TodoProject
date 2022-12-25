import {configureStore} from "@reduxjs/toolkit";
import TaskSlice from "./TaskSlice"
import AuthorizationUserSlice from "./AuthorizationUserSlice";
import TourSlice from "./TourSlice";


export const Store = configureStore({
  reducer : {TaskSlice, AuthorizationUserSlice, TourSlice}
})