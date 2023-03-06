import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';
import SearchBar from "material-ui-search-bar";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({

});
const columns = [
    {
        field: 'id',
        headerName: 'ID',
        minWidth: 60,
        maxWidth: 140,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
    {
        field: 'image',
        headerName: 'Image',
        minWidth: 60,
        maxWidth: 140,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        editable: true,
    },
    {
        field: 'name',
        headerName: 'Name',
        minWidth: 60,
        maxWidth: 140,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        editable: true,
    },
    {
        field: 'category',
        headerName: 'Category',
        minWidth: 60,
        maxWidth: 140,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        editable: true,
    },
    {
        field: 'inventory',
        headerName: 'Inventory',
        minWidth: 60,
        maxWidth: 140,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        editable: true,
    },


];
const rows = [
    { id: 1, image: 'Snow', name: 'Jon', category: "Flower", inventory: "In stock" },
    { id: 2, image: 'Lannister', name: 'Cersei', category: "Flower", inventory: "out stock" },
]
const Inventory = () => {
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
                                <div className='col m-2'>
                                    <Box sx={{
                                        ".MuiSvgIcon-root": {
                                            color: "#31B665"
                                        }
                                    }}>
                                        <SearchBar
                                            placeholder="search"

                                        />
                                    </Box>
                                </div>
                                <div className='col m-2'>
                                    <Button
                                        size='large'
                                        sx={{
                                            "&.MuiButtonBase-root": {
                                                color: "#FFFFFF",
                                                background: "#31B665"
                                            }

                                        }}
                                        variant="outlined" >
                                        Filter
                                    </Button>
                                </div>

                            </div>
                            <div className='col-12'>
                                <Box sx={{ height: 400, width: '100%' ,"&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                                                outline: "none",
                                             },}}>
                                    <DataGrid
                                        rows={rows}
                                        columns={columns}
                                        initialState={{
                                            pagination: {
                                                paginationModel: {
                                                    pageSize: 5,
                                                },
                                            },
                                        }}
                                        pageSizeOptions={[5]}
                                        checkboxSelection
                                        disableRowSelectionOnClick
                                        sx={{
                                            ".MuiDataGrid-columnHeaders": {
                                                background: "#E1FFED"
                                            },
                                            ' .MuiDataGrid-columnSeparator--sideRight ': {
                                                display: 'none',
                                            },


                                            '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
                                                outline: 'none',
                                            },
                                            '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
                                                outline: 'none',
                                            },
                                            "&.MuiDataGrid-root .MuiDataGrid-row:hover": {
                                                backgroundColor: "#FFFFFF"
                                            },
                                            "&.MuiDataGrid-root .MuiDataGrid-columnHeader:hover": {
                                                outline: "none"
                                            },
                                            "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus": {
                                                outline: "none"
                                            },
                                            "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
                                                outline: "none",
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
export default Inventory