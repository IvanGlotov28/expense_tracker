import { configureStore } from '@reduxjs/toolkit'
import transactionReducer from './slices/transactionSlice'

export const store = configureStore({
  reducer: {
    transaction: transactionReducer,
  },
})
