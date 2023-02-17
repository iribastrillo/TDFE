import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: [],
    filteredTr: [],
}

const transactions = createSlice({
    name: 'transactions',
    initialState,
    reducers:{
        setTransactions: (state,action) => {
            const {payload} = action;
            state.value = payload;
        },

        deleteTransactionById: (state, action) => {
            const {payload} = action;
            const transactionNewList = state.value.filter(tr => tr.id !== payload);
            state.value = transactionNewList
            state.filteredTr = transactionNewList
        }

    }
})

export const {setTransactions, deleteTransactionById} = transactions.actions; 
export default transactions.reducer;