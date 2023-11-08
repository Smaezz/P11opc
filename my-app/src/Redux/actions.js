// actions.js
import { createAction } from "@reduxjs/toolkit";

export const login = createAction("LOGIN", (username, password) => {
  return {
    username,
    password,
  };
});

export const logout = createAction("LOGOUT");


