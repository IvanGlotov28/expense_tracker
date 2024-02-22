import {
  Box,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  Modal,
  // ModalContent,
  Fade,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useContext } from 'react'
import { GlobalContext } from '../../App'
import { useState } from 'react'
import {
  formLabelStyles,
  mainBackgroundColor,
  formBoxesStyles,
} from '../../constants/styles'
import FormCheckboxes from './FormCheckboxes'

const NewTransactionForm = () => {
  const { isOpen, setIsOpen } = useContext(GlobalContext)

  const handleCloseClick = () => {
    setIsOpen(false)
  }

  console.log(isOpen)
  return (
    <Modal
      open={isOpen}
      onClose={handleCloseClick}
      sx={{
        maxWidth: '400px',
        margin: ['0', '15px auto'],
        backgroundColor: mainBackgroundColor,
        padding: '40px',
        borderRadius: '10px',
      }}
    >
      <Box>
        <FormControl fullWidth>
          <Typography
            variant="h5"
            sx={{
              marginBottom: '15px',
            }}
          >
            Add new transaction
          </Typography>
          <CloseIcon onClick={handleCloseClick} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
            }}
          >
            <Box sx={formBoxesStyles}>
              <FormLabel sx={formLabelStyles}>Money</FormLabel>
              <TextField placeholder="Enter the amount " type="number" />
            </Box>
            <Box sx={formBoxesStyles}>
              <FormLabel sx={formLabelStyles}>Description</FormLabel>
              <TextField placeholder="Enter a description " />
            </Box>
          </Box>
        </FormControl>
        <FormCheckboxes />
      </Box>
    </Modal>
  )
}

export default NewTransactionForm
