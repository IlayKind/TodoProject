import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {completed, inProgress, newTask, scheduled} from "./LinkSection";
import {loadingTask} from "../TaskSlice";

export const getPost = createAsyncThunk('task/getPost', async (_, {rejectWithValue, dispatch}) => {
  const newData = await axios.get(newTask);
  const scheduledData = await axios.get(scheduled);
  const inProgressData = await axios.get(inProgress);
  const completedData = await axios.get(completed);
  await dispatch(loadingTask({
    newData: newData.data,
    scheduledData: scheduledData.data,
    inProgressData: inProgressData.data,
    completedData: completedData.data,
  }))
});

export const publicationPost = createAsyncThunk("task/publicationPost", async (action) => {
  if(action.status === "newTask"){
    await axios.post(newTask,action)
  }else if(action.status === "scheduled"){
    await axios.post(scheduled,action)
  }else{
    await axios.post(completed,action)
  }
});

export const deletePost = createAsyncThunk("task/deletePost", async (action) => {
  if(action.status === "newTask"){
    await axios.delete(`${newTask}/${action.id}`)
  }else if(action.status === "scheduled"){
    await axios.delete(`${scheduled}/${action.id}`)
  }else if(action.status === "inProgress"){
    await axios.delete(`${inProgress}/${action.id}`)
  }else{
    await axios.delete(`${completed}/${action.id}`)
  }
});

export const editPost = createAsyncThunk("task/editPost", async (action) => {
  if(action.status === "newTask"){
    await axios.put(`${newTask}/${action.id}`,{...action})
  }else if(action.status === "scheduled"){
    await axios.put(`${scheduled}/${action.id}`,{...action})
  }else if(action.status === "inProgress"){
    await axios.put(`${inProgress}/${action.id}`,{...action})
  }else{
    await axios.put(`${completed}/${action.id}`,{...action})
  }
});