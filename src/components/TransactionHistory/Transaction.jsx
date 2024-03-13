import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Paper,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Transaction = (transaction) => {
  const {
    money,
    description,
    totalMoney,
    transactionType,
    formattedDate,
    formattedTime,
  } = transaction.transaction

  console.log(formattedTime)

  let transactionColor
  let sign

  if (transactionType === 'spending') {
    sign = '-'
    transactionColor = 'red'
  } else if (transactionType === 'income') {
    sign = '+'
    transactionColor = '#0FB800'
  }
  return (
    <Accordion
      sx={{
        width: ['270px', '570px'],
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            paddingRight: '15px',
          }}
        >
          <Box
            sx={{
              color: transactionColor,
            }}
          >
            {`${sign}${money}`}
          </Box>

          <Box>{formattedDate}</Box>
        </Box>
      </AccordionSummary>
      <Divider
        sx={{
          borderBottomWidth: '1.5px',
          borderBottomColor: '#004D45',
        }}
        aria-hidden="true"
      />
      <AccordionDetails
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            maxWidth: '300px',
            fontSize: '20px',
            overflow: 'auto',
            padding: '10px',
          }}
        >
          {description}
        </Box>

        <Box>{formattedTime}</Box>
      </AccordionDetails>
    </Accordion>
  )
}

export default Transaction
