import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./sliceUser";

export const store = configureStore({
    reducer: {
      user: userReducer,
    },
  });