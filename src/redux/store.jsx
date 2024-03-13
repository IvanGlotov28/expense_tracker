import { configureStore } from '@reduxjs/toolkit'
import transactionReducer from './slices/transactionSlice'
import transactionListReducer from './slices/transactionListSlice'

export const store = configureStore({
  reducer: {
    transaction: transactionReducer,
    transactionList: transactionListReducer,
  },
})
