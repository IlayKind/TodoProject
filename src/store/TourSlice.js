import {createSlice} from "@reduxjs/toolkit";



const initialState = {
  image: "",

}

export const TourSlice = createSlice({
  name: "Tour",
  initialState: initialState,
  reducers: {
    addImage: (state, action) => {
      state.image = action.payload
    }
  }
})

export const {addImage} = TourSlice.actions;
export default TourSlice.reducer;