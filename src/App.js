import { createContext, useState } from 'react'
import './App.css'
import MainPlate from './components/mainPlate/MainPlate'
import NewTransactionForm from './components/NewTransactionForm/NewTransactionForm'

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
        <MainPlate />
        <NewTransactionForm />
      </GlobalContext.Provider>
    </div>
  )
}

export default App
