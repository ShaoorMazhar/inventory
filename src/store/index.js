import { configureStore } from "@reduxjs/toolkit";
import Store from "./storeSlice";

const store = configureStore({
  reducer: {
    store: Store.reducer
  }
});

export default store;
