import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: [],
    filteredTr: [],
}

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers:{
        setTransactions: (state,action) => {
            const {payload} = action;
            state.value = payload;
            state.filteredTr = payload;
        },

        deleteTransactionById: (state, action) => {
            const {payload} = action;
            const transactionNewList = state.value.filter(tr => tr.id !== payload);
            state.value = transactionNewList
            state.filteredTr = transactionNewList
        },

        setFilteredTransactions: (state, action) => {
            const {payload} = action;
            console.log(payload)
            state.filteredTr = payload;
        },

        addNewTransaction: (state,action) => {
            const {payload} = action;
            state.value = [...state.value,payload];
            state.filteredTr = [...state.filteredTr,payload];
        }

    }
})

export const {setTransactions, deleteTransactionById, addNewTransaction, setFilteredTransactions} = transactionsSlice.actions; 
export default transactionsSlice.reducer;