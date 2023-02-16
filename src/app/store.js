import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from './session';
import toastReducer from './toasts';

export const store = configureStore ({
    reducer: {
        session : sessionReducer,
        toast : toastReducer
    }
})