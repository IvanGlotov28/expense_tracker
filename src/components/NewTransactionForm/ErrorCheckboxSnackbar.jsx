import { Snackbar, Alert } from '@mui/material'
import { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../../App'
const ErrorCheckboxSnackbar = () => {
  const { transactionType } = useContext(GlobalContext)
  const [snackbarOpen, setSnackbarOpen] = useState(false)

  useEffect(() => {
    if (!transactionType) {
      setSnackbarOpen(true)
    }
  }, [transactionType])

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={snackbarOpen}
    >
      <Alert severity="error">Select the transaction type</Alert>
    </Snackbar>
  )
}

export default ErrorCheckboxSnackbar
