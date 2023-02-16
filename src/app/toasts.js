import { createSlice } from "@reduxjs/toolkit"

const successToastState = false

const initialState = {
    value : successToastState
}

export const toastSlice = createSlice ({
    name : 'toast',
    initialState,
    reducers : {
        notifySuccess : (state, action) => {
            state.value = action.payload;
        },
    }
})

export const {notifySuccess} = toastSlice.actions;

export default toastSlice.reducer;