import { configureStore } from "@reduxjs/toolkit";
import NavReducer from "./Features/NavBars/NavSlice";

export const Store = configureStore({
  reducer: {
    NavBar: NavReducer,
  },
});
