import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: null,
  id: null,
}

export const AuthorizationUserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
        state.email = action.payload.email
        state.token = action.payload.token
        state.id = action.payload.id
    },
    removeUser: (state) => {
      state.email = null
      state.token = null
      state.id = null
    }
  }
})

export const {setUser, removeUser} = AuthorizationUserSlice.actions;
export default AuthorizationUserSlice.reducer;