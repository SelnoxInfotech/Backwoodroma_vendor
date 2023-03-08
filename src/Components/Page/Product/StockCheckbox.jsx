import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';

const StockCheckBox = () => {
  return (
    <>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <Box sx={{
            ".MuiSvgIcon-root": {
              color: "#31B665"
            }
          }}>
            <FormControlLabel value="Instock" control={<Radio />} label="Instock" />
            <FormControlLabel value="Stock" control={<Radio />} label="Stock" />
          </Box>

        </RadioGroup>
      </FormControl>
    </>
  )
}
export default StockCheckBox