import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Divider,
  Container,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import Transaction from './Transaction'

const TransactionHistory = () => {
  const transactionList = useSelector((state) => state.transactionList)
  return (
    <Accordion
      sx={{
        width: ['300px', '600px'],
        backgroundColor: '#b0bec5',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Container
          sx={{
            fontWeight: '700',
            fontSize: '22px',
          }}
        >
          Transaction History
        </Container>
      </AccordionSummary>
      <AccordionDetails>
        <Stack direction="column" divider={<Divider  aria-hidden="true" flexItem />} spacing={2}>

          {transactionList.toReversed().map((transaction) => (
            <Transaction key={uuidv4()} transaction={transaction} />
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  )
}

export default TransactionHistory
