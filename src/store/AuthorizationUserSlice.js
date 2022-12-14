import {createSlice} from "@reduxjs/toolkit";
import {getImageUser} from "./asyncRequest/AsyncCreatedUsers";


const initialState = {
  name: "",
  lastName: "",
  email: "",
  image: "",
  token: null,
  id: '',
}

export const AuthorizationUserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loadingImage: (state, action) => {
      const obj = action.payload.map((item) => item.image);
      state.image = obj[0]
    },
    setUserServer: (state, action) => {
      const obj = action.payload[0]
      state.name = obj.name
      state.lastName = obj.lastName
      state.email = obj.email
      state.id = obj.id
    },
    setUser: (state, action) => {
        state.token = action.payload.token
        state.id = action.payload.id
    },
    removeUser: (state) => {
      state.email = ""
      state.token = null
      state.id = ''
    }
  },
  extraReducers: {
    [getImageUser.fulfilled]: () => console.log("fulfilled"),
    [getImageUser.pending]: () => console.log("pending"),
    [getImageUser.rejected]: () => console.log("rejected")
  }
})

export const {setUser, removeUser, setUserServer, loadingImage} = AuthorizationUserSlice.actions;
export default AuthorizationUserSlice.reducer;