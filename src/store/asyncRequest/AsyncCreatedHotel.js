import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {setHotel} from "../TourSlice";


export const getHotel = createAsyncThunk('task/getPost', async (action, {rejectWithValue, dispatch}) => {
 console.log(action)
  const {data} = await axios.get(`http://localhost:3001/${action}`);
  await dispatch(setHotel(data))
});



