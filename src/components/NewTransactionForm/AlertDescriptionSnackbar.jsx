import { Snackbar, Alert } from '@mui/material'
import { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../../App'

const AlertDescriptionSnackbar = () => {
  const { descriptionLength, maxDescriptionLength } = useContext(GlobalContext)
  const [snackbarOpen, setSnackbarOpen] = useState(false)

  useEffect(() => {
    if (descriptionLength >= maxDescriptionLength - 1) {
      setSnackbarOpen(true)
    } else {
      setSnackbarOpen(false)
    }
  }, [descriptionLength])

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false)
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={snackbarOpen}
      onClose={handleCloseSnackbar}
    >
      <Alert severity="error">
        Maximum number of characters: {maxDescriptionLength}
      </Alert>
    </Snackbar>
  )
}

export default AlertDescriptionSnackbar
