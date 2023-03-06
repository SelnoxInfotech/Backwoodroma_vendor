import LoadingButton from '@mui/lab/LoadingButton';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
// import { Select } from '@material-ui/core';
// import { MenuItem } from '@mui/material';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import SearchBar from "material-ui-search-bar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Tooltip from '@mui/material/Tooltip';
import AddProduct from "./AddProduct"
// import TopSellingProduct from "./TopSellingProduct"
// import styles from '../../../Style';
const theme = createTheme({
    palette: {
        primary: {
            main: "#fffff",
        },



    },

});
const resStatus = true;
const columns = [
    {
        field: 'id', headerName: 'id', minWidth: 40,
        maxWidth: 90,
        flex: 1,
        headerAlign: 'left',
        align: 'left',
        editable: true,
    },

    {
        field: 'firstName',
        headerName: 'Name',
        minWidth: 60,
        maxWidth: 100,
        flex: 1,
        headerAlign: 'left',
        align: 'left',
        editable: true,
    },
    {
        field: 'category',
        headerName: 'Category',
        minWidth: 60,
        maxWidth: 100,
        flex: 1,
        headerAlign: 'center',
        align: 'center',
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        minWidth: 60,
        maxWidth: 100,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        editable: true,
    },
    {
        field: 'stock',
        headerName: 'Stock',

        sortable: true,
        minWidth: 60,
        maxWidth: 140,
        headerAlign: 'center',
        align: 'center',
        flex: 1,

    },
    {
        field: 'status',
        headerName: 'Status',

        sortable: true,
        minWidth: 50,
        maxWidth: 140,
        headerAlign: 'left',
        align: 'left',
        flex: 1,
        renderCell: () => {
            if (resStatus === true) {
                return (
                    <>
                        <Tooltip title="Active" enterDelay={300} leaveDelay={200} arrow placement="right-start">

                        <p
                            style={{ color: "#31B665 ", fontSize: 25, cursor: "pointer" }}

                        >
                            <AiFillEye/>
                        </p>
                        </Tooltip>
                    </>
                )
            }
            return (
                <>
                        <Tooltip title="Hide" enterDelay={300} leaveDelay={200} arrow placement="right-start">
                
                    <p
                        style={{ color: "red ", fontSize: 25, cursor: "pointer" }}>
                    <AiOutlineEyeInvisible/>

                    </p>
                    </Tooltip>
                </>
            )

        }

    },
    {
        field: 'edit',
        headerName: 'Edit',
        editable: true,

        sortable: true,
        minWidth: 60,
        maxWidth: 140,
        headerAlign: 'left',
        align: 'left',
        flex: 1,
        renderCell: () => {
            return (
                <>
                    <Select

                        IconComponent={BsThreeDotsVertical} labelId="demo-simple-select-error-label"
                        sx={{
                            boxShadow: "none",
                            ".MuiOutlinedInput-notchedOutline": { border: 0 },
                            "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                            {
                                border: 0,
                                outline: "none"

                            },
                            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                            {
                                border: 0,
                                outline: "none"
                            },
                            "&.Mui-focused .MuiSelect-icon": { color: "#31B665" },
                            "&:hover": {
                                ".MuiSelect-icon": {
                                    color: "#31B665"
                                }
                            },
                        }}
                    >
                        <MenuItem>Edit</MenuItem>
                        <MenuItem>Delete</MenuItem>

                    </Select>
                </>
            )
        }

    },
];
const rows = [
    { id: 1, category: 'Snow', firstName: 'Jon', price: 35, stock: "In", status: "active" },
    { id: 2, category: 'Lannister', firstName: 'Cersei', price: 42, stock: "Out", status: "hide" },

];
const Product = () => {

    const [product, setProduct] = React.useState('');

    const handleChange = (event) => {
        setProduct(event.target.value)
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-12 product_Col ">
                            <div className='col-12 product_head'>
                                <div className='col'>
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
                                <div className='col mt-2'>
                                    <Box sx={{
                                        ".MuiSvgIcon-root":{
                                            color:"#31B665"
                                        }
                                    }}>
                                    <SearchBar
                                        placeholder="search"
                                        
                                    />
                                    </Box>

                                </div>
                                <div className='col p-2'>
                                    <Box >
                                        <LoadingButton sx={{
                                            "&.MuiLoadingButton-root": {
                                                color: "#FFFFFF",
                                                background: "#31B665",

                                            },
                                        }} variant='outlined' size='large'>Filter</LoadingButton>
                                    </Box>

                                </div>
                                <div className='col mt-2'>
                                    <LoadingButton sx={{ "&.MuiLoadingButton-root": {
                                                // color: "#FFFFFF",
                                                background: "#EBEBEB"
                                            } }}>+Import/Export</LoadingButton>
                                </div>
                                <div className='col mt-2'>
                                    {/* <LoadingButton sx={{
                                        "&.MuiLoadingButton-root": {
                                            color: "#FFFFFF",
                                            background: "#A1A1A1"
                                        },
                                        background: "" }}>Add Product</LoadingButton> */}

                                        <AddProduct></AddProduct>
                                </div>
                            </div>

                            <div className='col-12 product_table'>
                                <Box sx={{
                                    height: 400, width: '100%', "&.MuiDataGrid-root .MuiDataGrid-columnHeader:hover": {
                                        outline: "none"
                                    },

                                    ".MuiDataGrid-root .MuiDataGrid-columnHeader:focus ": {
                                        outline: "none"

                                    }
                                }}>
                                    <ThemeProvider theme={theme}>
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
                                    </ThemeProvider>
                                </Box>

                            </div>

                        </div>
                    </div>


                </div>
            </ThemeProvider>
        </>
    )
}
export default Product