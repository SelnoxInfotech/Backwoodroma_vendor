import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const ProductGiftVoucher = () => {
    return (

        <>
                <div className='row'>
                <p className='center'>GiftVoucher</p>

                <div className="col-lg-12 center ">
                    <FormControl sx={{ minWidth: 120 }}>
                        <Select
                            // value={brand}
                            // onChange={handleChangeBrand}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            size="small"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Gift"}>Gift</MenuItem>

                        </Select>

                    </FormControl>
                </div>
                </div>

                <div className='row mt-2'>
                <p className='center'>Coupan</p>
      
                <div className='col-lg-12 center '>
                <FormControl sx={{ minWidth: 120 }}>
                        <Select
                            // value={brand}
                            // onChange={handleChangeBrand}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            size="small"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Coupan"}>Coupan</MenuItem>

                        </Select>

                    </FormControl>
                </div>
                </div>

            {/* </div> */}
        </>
    )
}
export default ProductGiftVoucher