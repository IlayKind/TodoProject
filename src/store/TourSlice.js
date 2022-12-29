import {createSlice} from "@reduxjs/toolkit";
import {getImageUser} from "./asyncRequest/AsyncCreatedUsers";
import {getHotel} from "./asyncRequest/AsyncCreatedHotel";



const initialState = {
  image: "",
  descriptionTour: {
    title: "",
    description: "",
    included1: "",
    included2: "",
    included3: "",
  },
  hotel: [],
  countPriceHotel: {},
}

export const TourSlice = createSlice({
  name: "Tour",
  initialState: initialState,
  reducers: {
    addImage: (state, action) => {
      state.image = action.payload
    },
    addDescription: (state ,action) => {
      state.descriptionTour.title = action.payload.title;
      state.descriptionTour.description = action.payload.description;
      state.descriptionTour.included1 = action.payload.included1;
      state.descriptionTour.included2 = action.payload.included2;
      state.descriptionTour.included3 = action.payload.included3
    },
    setHotel: (state, action) => {
        state.hotel = action.payload
    },
    addCountPrice: (state,action) => {
      console.log(action.payload)
      state.countPriceHotel = action.payload
    }
  },
  extraReducers: {
    [getHotel.fulfilled]: () => console.log("fulfilled"),
    [getHotel.pending]: () => console.log("pending"),
    [getHotel.rejected]: () => console.log("rejected")
  }
})

export const {addImage, addDescription, setHotel, addCountPrice} = TourSlice.actions;
export default TourSlice.reducer;