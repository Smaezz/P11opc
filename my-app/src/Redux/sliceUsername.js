import { createSlice } from "@reduxjs/toolkit";
 

const initialState = {
  value: ""
};

export const usernameSlice = createSlice({
  name: "userName",
  initialState,
  reducers: {
    getUserName: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getUserName } = usernameSlice.actions;
export default usernameSlice.reducer;