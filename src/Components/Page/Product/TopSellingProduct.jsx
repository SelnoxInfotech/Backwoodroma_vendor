import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import SearchBar from "material-ui-search-bar";
import LoadingButton from '@mui/lab/LoadingButton';

const theme = createTheme({
    palette: {
        primary: {
            main: "#fffff",
        },



    },

});
const columns = [
    {
        field: 'id', headerName: 'ID',
        minWidth: 60,
        maxWidth: 100,
        flex: 1,
        headerAlign: 'left',
        align: 'left',
    },
    {
        field: 'productName',
        headerName: 'Product Name',
        minWidth: 60,
        maxWidth: 100,
        flex: 1,
        headerAlign: 'left',
        align: 'left',
        editable: true,
    },
    {
        field: 'date',
        headerName: 'Date',
        minWidth: 60,
        maxWidth: 100,
        flex: 1,
        headerAlign: 'left',
        align: 'left',
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        minWidth: 60,
        maxWidth: 100,
        flex: 1,
        headerAlign: 'left',
        align: 'left',
        editable: true,
    },
    {
        field: 'quantity',
        headerName: 'Quantity',
        minWidth: 60,
        maxWidth: 100,
        flex: 1,
        headerAlign: 'left',
        align: 'left',
        editable: true,
    },
    {
        field: 'amount',
        headerName: 'Amount',
        minWidth: 60,
        maxWidth: 100,
        flex: 1,
        headerAlign: 'left',
        align: 'left',
        editable: true,
    },


];
const rows = [
    { id: 1, productName: "soap", date: new Date().toJSON().slice(0, 10), price: 10, quantity: 1, amount: 100 },
    { id: 2, productName: "apple", date: new Date().toJSON().slice(0, 10), price: 60, quantity: 2, amount: 200 },

];

const TopSellingProduct = () => {
    const [product, setProduct] = React.useState('');

    const handleChange = (event) => {
        setProduct(event.target.value)
    }
    return (
        <>
            <ThemeProvider theme={theme}>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 product_Col">
                            <div className="col-12 product_head">
                                <div className="col">
                                    <FormControl sx={{ m: 1, minWidth: 120, background: "#31B665", }}>
                                        <Select
                                            value={product}
                                            onChange={handleChange}
                                            displayEmpty
                                            size='large'
                                            sx={{
                                                color: "#FFFFFF",
                                                "& .MuiSvgIcon-root": {
                                                    color: "#FFFFFF",
                                                },

                                            }}

                                        >
                                            <MenuItem value="">
                                                <em>Product</em>
                                            </MenuItem>
                                            <MenuItem value={"All Product"}>All Product</MenuItem>
                                            <MenuItem value={"Top Selling Product"}>Top Selling Product</MenuItem>
                                            <MenuItem value={"Category"}>Category</MenuItem>
                                            <MenuItem value={"Inventory"}>Inventory</MenuItem>
                                        </Select>

                                    </FormControl>
                                </div>
                                <div className="col p-2">
                                    <SearchBar
                                        placeholder="search"

                                    />
                                </div>
                                <div className='col p-2'>
                                    <Box >
                                        <LoadingButton sx={{
                                            "&.MuiLoadingButton-root": {
                                                color: "#FFFFFF",
                                                background: "#31B665"
                                            },
                                        }} size="large" variant='outlined' >Filter</LoadingButton>
                                    </Box>

                                </div>
                            </div>

                            <div className="col-12 TopSelling_head product_table">

                                <Box sx={{ height: 455, width: '100%', background: "#FFFFFF", boxShadow: 1, padding: 1 }}>
                                    <p >Top selling Products</p>
                                    <DataGrid
                                        rows={rows}
                                        columns={columns}
                                        pageSize={5}
                                        rowsPerPageOptions={[5]}
                                        checkboxSelection
                                        disableSelectionOnClick
                                        experimentalFeatures={{ newEditingApi: true }}
                                        sx={{
                                            height: 400,
                                            width: '100%',
                                            "&.Mui-selected": {
                                                backgroundColor: "green"
                                            },
                                            ".MuiDataGrid-columnHeaders": {
                                                background: "#E1FFED"
                                            },
                                            '&  .MuiDataGrid-columnSeparator--sideRight': {
                                                display: 'none',
                                            },
                                            '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
                                                outline: 'none',
                                            },
                                            "&.MuiDataGrid-root .MuiDataGrid-row:hover": {
                                                backgroundColor: "#FFFFFF"
                                            },

                                        }}
                                    />
                                </Box>
                            </div>

                        </div>

                    </div>

                </div>
            </ThemeProvider>
        </>
    )
}
export default TopSellingProduct;