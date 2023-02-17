import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from './session';
import toastReducer from './toasts';
import categoriesReducer from './categories'
import transactionsReducer from './transactions'

export const store = configureStore ({
    reducer: {
        session : sessionReducer,
        toast : toastReducer,
        categories: categoriesReducer,
        transactions: transactionsReducer,
    }
})