// import { combineReducers } from "@reduxjs/toolkit";
// import { login, logout } from "./actions";
import { createSlice } from "@reduxjs/toolkit";
 

const initialState = {
  value: localStorage.getItem("token") || 0
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    getToken: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getToken } = tokenSlice.actions;
export default tokenSlice.reducer;

/** let state = {
  dataResponse: {
    token: localStorage.getItem("token"),
    message : localStorage.getItem("message"),
  }
};
*/
/** 
const userReducer = (state = {
  isLoggedIn: false,
  username: null,
}, action) => {
  switch (action) {
    case login.type:
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.username,
      };
    case logout.type:
      return {
        ...state,
        isLoggedIn: false,
        username: null,
      };
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
});
*/