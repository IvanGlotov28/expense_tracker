import { Box, Container, Typography } from '@mui/material'
import TransactionButton from '../TransactionButton/TransactionButton'
import { mainText, mainBackgroundColor } from '../../constants/styles'
const MainPlate = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '500px',
        color: mainText,
        backgroundColor: mainBackgroundColor,
        height: '300px',
        padding: '25px 100px 75px',
        margin: '25px auto',
        borderRadius: '10px',
        gap: '50px',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4">Expense Tracker</Typography>
      <Box
        sx={{
          width: '200px',
        }}
      >
        <TransactionButton />
      </Box>
      <Box
        sx={{
          display: 'flex',
          margin: '20px',
          border: '3px solid black',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <Typography variant="h4">Total: 1000$</Typography>
      </Box>
    </Box>
  )
}

export default MainPlate
