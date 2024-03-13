import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  money: 0,
  description: '',
}

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    income: (state, action) => {
      state.money += parseFloat(action.payload)
    },
    spending: (state, action) => {
      state.money -= parseFloat(action.payload)
    },
    newDescription: (state, action) => {
      
      state.description = action.payload.description
    },
  },
})

export const { income, spending, newDescription } = transactionSlice.actions

export default transactionSlice.reducer
