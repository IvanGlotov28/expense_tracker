import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

import TransactionButton from '../TransactionButton/TransactionButton'
import { mainText, mainBackgroundColor } from '../../constants/styles'
const MainPlate = () => {
   const moneyAmount = useSelector((state) =>
    parseFloat(state.transaction.money)
  )

  console.log(moneyAmount)
  return (
    <Box
      sx={{
        display: 'flex',
        width: ['270px', '500px'],
        color: mainText,
        backgroundColor: mainBackgroundColor,
        height: ['500px', '300px'],
        padding: ['15px ', '25px 50px 50px'],
        margin: ['0 auto', '0'],
        borderRadius: '10px',
        gap: ['5px', '20px', '50px'],
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="h5">Expense Tracker</Typography>

      <Box
        sx={{
          display: 'flex',
          border: '2px solid black',
          padding: '10px 50px ',
          borderRadius: '10px',
          gap: '10px',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            fontSize: '22px',
          }}
        >
          Total:
        </Typography>

        <Typography
          sx={{
            fontSize: '22px',
          }}
        >
          {moneyAmount} $
        </Typography>
      </Box>
      <TransactionButton />
    </Box>
  )
}

export default MainPlate
