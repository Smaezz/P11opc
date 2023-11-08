
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers";


//magasin Redux
const store = configureStore({
  reducer: userReducer,
});

export default store;

