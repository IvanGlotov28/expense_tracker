import {
  Box,
  FormControl,
  FormLabel,
  TextField,
  Dialog,
  DialogTitle,
  Button,
} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'

import CloseIcon from '@mui/icons-material/Close'
import { useContext, useState } from 'react'
import { GlobalContext } from '../../App'
import { formLabelStyles, formBoxesStyles } from '../../constants/styles'
import FormCheckboxes from './FormCheckboxes'
import ErrorDialog from './ErrorDialog'
import {
  spending,
  income,
  newDescription,
} from '../../redux/slices/transactionSlice'
import { addNewTransaction } from '../../redux/slices/transactionListSlice'
import createNewTransaction from '../../utils/createNewTransaction'

const NewTransactionForm = () => {
  const { isOpen, setIsOpen } = useContext(GlobalContext)
  const { transactionType, setTransactionType } = useContext(GlobalContext)
  const { moneyAmount, setMoneyAmount } = useContext(GlobalContext)
  const { description, setDescription } = useContext(GlobalContext)
  const dispatch = useDispatch()
  const transaction = useSelector((state) => state)
  console.log(transaction)
  const [showError, setShowError] = useState(false)

  const handleCloseClick = (value) => {
    if (!value) {
      return
    } else {
      setIsOpen(false)
      setTransactionType('')
    }
  }

  const handleButtonClick = () => {
    if (!transactionType) {
      setShowError(true)
    } else {
      setShowError(false)
      handleCloseClick()
    }
  }
  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={handleCloseClick}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      sx={{
        maxWidth: '700px',
        margin: ['0 auto', '15px auto'],
        borderRadius: '10px',
        height: '500px',
      }}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
          event.preventDefault()
          if (!transactionType) {
            return
          } else {
            const formData = new FormData(event.currentTarget)
            const formJson = Object.fromEntries(formData.entries())
            const money = parseFloat(formJson.money)
            const description = formJson.description
            console.log(transactionType)
            console.log(money)

            setMoneyAmount(money)
            setDescription(description)
            setTransactionType(transactionType)

            dispatch(newDescription({ description }))
       
            let totalMoney
            
            if (transactionType === 'spending') {
              dispatch(spending(money))
              totalMoney = transaction.transaction.money - money
            } else if (transactionType === 'income') {
              dispatch(income(money))
              totalMoney = transaction.transaction.money + money
            }

            const newTransaction = createNewTransaction(
              money,
              description,
              transactionType,
              totalMoney
            )
          
            dispatch(addNewTransaction(newTransaction))
    
            handleCloseClick(money)
          }
        },
      }}
    >
      <DialogTitle
        id="parent-modal-title"
        variant="h5"
        sx={{
          margin: '15px auto 0px',
        }}
      >
        Add new transaction
      </DialogTitle>
      <Box
        sx={{
          padding: '10px',
          margin: '0 auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {showError && <ErrorDialog />}
        </Box>
        <FormCheckboxes />

        <FormControl
          sx={{
            width: ['300px', '400px', '500px'],
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
            }}
          >
            <Box sx={formBoxesStyles}>
              <FormLabel sx={formLabelStyles}>Money</FormLabel>
              <TextField
                placeholder="Enter the amount "
                type="number"
                id="money"
                name="money"
                required
              />
            </Box>
            <Box sx={formBoxesStyles}>
              <FormLabel sx={formLabelStyles}>Description</FormLabel>
              <TextField
                placeholder="Enter a description "
                id="description"
                name="description"
              />
            </Box>
          </Box>
          <Button
            type="submit"
            onClick={handleButtonClick}
            sx={{
              backgroundColor: '#a2aed2',
              color: '#1d130c',
              width: '200px',
              margin: '15px auto',
            }}
          >
            Ok
          </Button>
        </FormControl>
      </Box>
      <CloseIcon
        onClick={handleCloseClick}
        sx={{
          cursor: 'pointer',
          position: 'absolute',
          right: '5px',
          top: '5px',
        }}
      />
    </Dialog>
  )
}

export default NewTransactionForm
