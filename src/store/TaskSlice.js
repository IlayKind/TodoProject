import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  Task : [],
  EditTask: {},
}

export const TaskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    addTaskStore: (state, action) => {
      state.Task.push(action.payload)
    }
}
})

export const {addTaskStore} = TaskSlice.actions;
export default TaskSlice.reducer;