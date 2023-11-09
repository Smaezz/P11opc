import { combineReducers } from "@reduxjs/toolkit";
import { login, logout } from "./actions";


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