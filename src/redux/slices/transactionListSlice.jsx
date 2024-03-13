import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const transactionListSlice = createSlice({
    name: 'transactionList',
    initialState,
    reducers:{
        addNewTransaction:(state, action)=>{
            return [...state, action.payload]
        }
    }
})

export const {addNewTransaction} = transactionListSlice.actions

export default transactionListSlice.reducer