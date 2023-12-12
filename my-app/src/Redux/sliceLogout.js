import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: "",
}
    
const Logout = createSlice({
    name: 'logout',
    initialState,
    // reducers permet de définir les actions et le reducer
    reducers: {
        toggle: (state) => {
            return state === 'logout' ? 'login' : 'logout'
        },
        set: (state, action) => {
            return action.payload
        },
    },
});

export default Logout.reducer;