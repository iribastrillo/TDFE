import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from './session';
import toastReducer from './toasts';
import categoriesReducer from './categories'

export const store = configureStore ({
    reducer: {
        session : sessionReducer,
        toast : toastReducer,
        categories: categoriesReducer,
    }
})