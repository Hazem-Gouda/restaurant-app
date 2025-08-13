import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice";

const store = configureStore({
  reducer: {
    contact: contactReducer,
    // Add other slices here as your app grows
  },
});

export default store;
