import { createContext, useState } from 'react'
import { Container, Box } from '@mui/material'
import './App.css'
import MainPlate from './components/mainPlate/MainPlate'
import NewTransactionForm from './components/NewTransactionForm/NewTransactionForm'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

export const GlobalContext = createContext()

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [transactionType, setTransactionType] = useState('')
  const [moneyAmount, setMoneyAmount] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div className="App">
      <GlobalContext.Provider
        value={{
          isOpen,
          setIsOpen,
          transactionType,
          setTransactionType,
          moneyAmount,
          setMoneyAmount,
          description,
          setDescription,
        }}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: ['start', 'center', 'center', 'center'],
            gap: '15px',
          }}
        >
          <MainPlate />
          <Box
            sx={{
              alignSelf: 'center',
            }}
          >
            <TransactionHistory />
          </Box>
          <NewTransactionForm />
        </Container>
      </GlobalContext.Provider>
    </div>
  )
}

export default App
