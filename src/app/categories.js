import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

const categories = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (state,action) => {
            const {payload} = action;
            state.value = payload;
        }
    }
})

export const {setCategories} = categories.actions;
export default categories.reducer;