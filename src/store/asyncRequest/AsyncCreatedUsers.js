import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {activeUser, users} from "./LinkSection";
import {loadingImage, setUserServer} from "../AuthorizationUserSlice";


export const registrationPost = createAsyncThunk("user/registrationPost", async (action) => {
  await axios.post(users,action)
});

export const getValuesUser = createAsyncThunk("user/getValuesUser", async (action,{rejectWithValue,dispatch} ) => {
  const email = await axios.get(activeUser);
  const {data} = await axios.get(`${users}?email_like=${email.data.email}`)
  await dispatch(setUserServer(data))
});

export const postValuesActiveUser = createAsyncThunk("user/postValuesActiveUser", async (email) => {
  await axios.post(activeUser, {email});
});

export const postImageUser = createAsyncThunk("user/postImageUser", async (action, dispatch) => {
  const obj = {...action.item}
  obj.image = action.image
  await axios.put(`${users}/${action.id}`, {...obj});
});

export const getImageUser = createAsyncThunk("user/getImageUser", async (action, {rejectWithValue, dispatch}) => {
  const email = await axios.get(activeUser);
  const {data} = await axios.get(`${users}?email_like=${email.data.email}`);
  dispatch(loadingImage(data))
});