import {
  Box,
  FormControl,
  FormLabel,
  Typography,
  Checkbox,
} from '@mui/material'

import {formLabelStyles} from '../../constants/styles'

const FormCheckboxes = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        margin: '15px',
        justifyContent: 'space-around',
      }}
    >
      <Box>
        <FormLabel sx={formLabelStyles}>
          Income
          <Checkbox />
        </FormLabel>
      </Box>
      <Box>
        <FormLabel sx={formLabelStyles}>
          Spending
          <Checkbox />
        </FormLabel>
      </Box>
    </Box>
  )
}

export default FormCheckboxes
