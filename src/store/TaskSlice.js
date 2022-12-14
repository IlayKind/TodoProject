import {createSlice} from "@reduxjs/toolkit";
import {nanoid} from "nanoid";



const initialState = {
  newTask: [],
  scheduled: [],
  inProgress: [],
  completed: [],
  editTask: {},
}





export const TaskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    loadingTask: (state, action) => {
        state.newTask = action.payload.newData;
        state.scheduled = action.payload.scheduledData;
        state.inProgress = action.payload.inProgressData;
        state.completed = action.payload.completedData;
    },
    addTaskStore: (state, action) => {
      if(action.payload.status === "newTask") {
        state.newTask.push(action.payload)
      }else{
        state.scheduled.push(action.payload)
      }
    },
    deleteTaskItem: (state, action) => {
      if(action.payload.status === "scheduled"){
        state.scheduled = state.scheduled.filter((item) => item.id !== action.payload.id && item.status === action.payload.status);
      }else if(action.payload.status === "newTask"){
        state.newTask = state.newTask.filter((item) => item.id !== action.payload.id && item.status === action.payload.status);
      }else if(action.payload.status === "inProgress"){
        state.inProgress = state.inProgress.filter((item) => item.id !== action.payload.id && item.status === action.payload.status);
      }else{
        state.completed = state.completed.filter((item) => item.id !== action.payload.id && item.status === action.payload.status);
      }
    },
    optionActive: (state, action) => {
      const obj = {...action.payload};
      obj.option = !obj.option;
      state.newTask = state.newTask.map((item) => item.id === obj.id && item.status === obj.status ? obj : item);
      state.scheduled = state.scheduled.map((item) => item.id === obj.id && item.status === obj.status ? obj : item);
      state.inProgress = state.inProgress.map((item) => item.id === obj.id && item.status === obj.status ? obj : item);
      state.completed = state.completed.map((item) => item.id === obj.id && item.status === obj.status ? obj : item);
    },
    editTaskItem: (state, action) => {
      state.editTask = action.payload;
    },
    clearEditTaskItem: (state) => {
      state.editTask = {}
    },
    saveEditTask: (state, action) => {
      state.editTask = action.payload
      state.newTask = state.newTask.map((item) => item.id === action.payload.id && item.status === action.payload.status ? action.payload : item);
      state.scheduled = state.scheduled.map((item) => item.id === action.payload.id && item.status === action.payload.status ? action.payload : item);
    },
    checkTask: (state, action) => {
      const obj = {...action.payload}
      obj.completed = true;
      obj.id = nanoid();
      obj.status = "completed";
      obj.option = false;
      state.completed.push(obj);
      if(action.payload.status === "newTask"){
        state.newTask = state.newTask.filter((item) => item.id !== action.payload.id && item.status === action.payload.status);
      }else{
        state.scheduled = state.scheduled.filter((item) => item.id !== action.payload.id && item.status === action.payload.status);
      }
    },
    progressTaskItem: (state, action) => {
      state.inProgress.push(action.payload)
    },
},
  extraReducers: {
    // [getPost.fulfilled]: () => console.log("fulfilled"),
    // [getPost.pending]: () => console.log("pending"),
    // [getPost.rejected]: () => console.log("rejected")
  }
})

export const {
  addTaskStore,
  optionActive,
  deleteTaskItem,
  editTaskItem,
  saveEditTask,
  checkTask,
  loadingTask,
  clearEditTaskItem,
  progressTaskItem} = TaskSlice.actions;
export default TaskSlice.reducer;
