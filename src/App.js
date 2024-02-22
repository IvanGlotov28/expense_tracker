import {createContext, useState} from 'react'
import './App.css'
import MainPlate from './components/mainPlate/MainPlate'
import NewTransactionForm from './components/NewTransactionForm/NewTransactionForm'

export const GlobalContext = createContext()

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="App">
      <GlobalContext.Provider value={{isOpen, setIsOpen}}>
        <MainPlate />
        <NewTransactionForm />
      </GlobalContext.Provider>
    </div>
  )
}

export default App
