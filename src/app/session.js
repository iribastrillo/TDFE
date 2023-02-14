import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value : undefined
}

export const sessionSlice = createSlice ({
    name : 'session',
    initialState,
    reducers : {
        setLoggedInUser : (state, action) => {
            state.value = action.payload;
            localStorage.setItem ('user', JSON.stringify(state.value))
        },
        logOut : (state, action) => {
            state.value = undefined;
            localStorage.removeItem('user')
        }
    }
})

export const {setLoggedInUser} = sessionSlice.actions;
export const {logOut} = sessionSlice.actions;

export default sessionSlice.reducer;