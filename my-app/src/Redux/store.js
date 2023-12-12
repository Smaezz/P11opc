import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./sliceLogin";
import Logout from "./sliceLogout";
import firstNameSlice  from "./sliceFirstname";
import lastNameSlice from "./sliceLastname";
import usernameSlice from "./sliceUsername";

//magasin Redux
const store = configureStore({
    reducer: {
      tokenSlice,
      Logout,
      usernameSlice,
      firstNameSlice,
      lastNameSlice,
    }
  });

export default store; console.log(store);


