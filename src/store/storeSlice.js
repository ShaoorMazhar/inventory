import { createSlice } from "@reduxjs/toolkit";
// import Axios from 'axios'
const storeValidation = createSlice({
  name: "store",
  initialState: {
    arr: []
  },
  reducers: {
    AddStore(state, action) {
      const temp = action.payload;
      state.arr = temp;
    }
  }
});

export const storeAction = storeValidation.actions;
export default storeValidation;
