import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';

const StockCheckBox = ({Product ,SetProduct}) => {
  const handleChange = (event) => {

    var value = event.target.value;
    SetProduct({
      ...Product, [event.target.name]: value
    });
    console.log(event.target)


  }

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
            <FormControlLabel name="Stock" value={"In Stock"}  onChange={handleChange}control={<Radio />} label="Instock" />
            <FormControlLabel name="Stock" value={"Out of Stock"} onChange={handleChange} control={<Radio />} label="Out of Stock" />
          </Box>

        </RadioGroup>
      </FormControl>
    </>
  )
}
export default StockCheckBox