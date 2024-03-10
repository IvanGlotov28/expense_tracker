import { Box, FormLabel, Checkbox, FormGroup } from '@mui/material'
import { useState, useContext } from 'react'

import { formLabelStyles } from '../../constants/styles'
import { GlobalContext } from '../../App'
const FormCheckboxes = () => {
  const [selected, setSelected] = useState('')
  const { setTransactionType } = useContext(GlobalContext)
  const handleCheckboxChange = (value) => {
    setSelected(value)
    setTransactionType(value)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        margin: '15px',
        justifyContent: ['center', 'space-around'],
      }}
    >
      <Box>
        <FormLabel sx={formLabelStyles}>
          Income
          <Checkbox
            checked={selected === 'income'}
            onChange={() => handleCheckboxChange('income')}
            value="income"
          />
        </FormLabel>
      </Box>
      <Box>
        <FormLabel sx={formLabelStyles}>
          Spending
          <Checkbox
            checked={selected === 'spending'}
            onChange={() => handleCheckboxChange('spending')}
            value="spending"
          />
        </FormLabel>
      </Box>
    </Box>
  )
}

export default FormCheckboxes
