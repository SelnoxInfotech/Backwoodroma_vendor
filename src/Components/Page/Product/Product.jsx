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
import { ThemeProvider ,createTheme} from "@mui/material/styles";
// import styles from '../../../Style';

const resStatus = true;
const columns = [
    { field: 'id', headerName: 'id', width: 90 },

    {
        field: 'firstName',
        headerName: 'Name',
        width: 150,
        editable: true,
    },
    {
        field: 'category',
        headerName: 'Category',
        width: 150,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'stock',
        headerName: 'Stock',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,

    },
    {
        field: 'status',
        headerName: 'Status',

        sortable: false,
        width: 160,
        renderCell: () => {
            if (resStatus === true) {
                return (
                    <>
                        <AiFillEye style={{ color: "green" }} />
                    </>
                )
            }
            return (
                <>
                    <AiOutlineEyeInvisible style={{ color: "red" }} />
                </>
            )

        }

    },
    {
        field: 'edit',
        headerName: 'Edit',
        editable: true,
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        renderCell: () => {
            return (
                <>
                    <Select

                        IconComponent={BsThreeDotsVertical} labelId="demo-simple-select-error-label"
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
    const theme = createTheme({
        
    });
    console.log(theme)
    const [product, setProduct] = React.useState('');

    const handleChange = (event) => {
        setProduct(event.target.value);
    };
    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-10 prod_main_table_col">
                        <div className='col-12 d-flex'>
                            <div className='col'>
                                <FormControl sx={{ m: 1, minWidth: 120 ,background:"#40D57A",color:"#FFFFFF"}}>
                                    <Select
                                        value={product}
                                        onChange={handleChange}
                                        displayEmpty

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
                                <SearchBar
                                placeholder="search"
                                />

                            </div>
                            <div className='col p-2'>
                                <Box sx={{
                                "&.MuiLoadingButton-root":{
                                    color:"#40D57A"
                                },
                                background:"",height:"85%"}}>
                            <LoadingButton >Filter</LoadingButton>
                                </Box>

                            </div>
                            <div className='col mt-2'>
                              <LoadingButton sx={{color:"#FFFFFF",background:"#40D57A"}}>Import/Export</LoadingButton>
                            </div>
                            <div className='col text-end'>
                                <LoadingButton>Add Product</LoadingButton>
                            </div>
                        </div>

                        <div className='col-12 product_table'>
                            <Box sx={{ height: 400, width: '100%',   }}>
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
                                        ".MuiDataGrid-columnHeaders":{
                                            background:"#E1FFED"
                                        }
                                      
                                      
                                    }}
                                />
                                </ThemeProvider>
                            </Box>

                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}
export default Product