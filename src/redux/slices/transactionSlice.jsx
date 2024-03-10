import { createSlice } from '@reduxjs/toolkit'

const initialState = 0

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    income: (state, action) => {
      return (state += parseFloat(action.payload))
    },
    spending: (state, action) => {
      return (state -= parseFloat(action.payload))
    },
  },
})

export const { income, spending } = transactionSlice.actions

export default transactionSlice.reducer
