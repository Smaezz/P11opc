import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./sliceLogin";
import firstNameSlice  from "./sliceFirstname";

//magasin Redux
const store = configureStore({
    reducer: {
      tokenSlice,
      firstNameSlice,
    }
  });

export default store; console.log(store);


