import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import {  useContext } from 'react'

import {GlobalContext} from '../../App'

const StyledButton = styled(Button)(({ theme }) => ({
  '&:hover': {
    backgroundColor: ' #d2d9dd',
  },
}))

const TransactionButton = () => {
  const {setIsOpen}  = useContext(GlobalContext)


  const handleOpenModal = () => {
    setIsOpen(true)
  }

  return (
    <StyledButton
      sx={{ backgroundColor: '#a2aed2', color: '#1d130c' }}
      variant="contained"
      onClick={handleOpenModal}
    >
      Add new transaction
    </StyledButton>
  )
}
export default TransactionButton
