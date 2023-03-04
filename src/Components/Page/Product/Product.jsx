import LoadingButton from '@mui/lab/LoadingButton';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Select } from '@material-ui/core';
import { MenuItem } from '@mui/material';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';
// import styles from '../../../Style';

const resStatus=true;
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
        renderCell:()=>{
            if(resStatus===true){
                return(
                    <>
                    <AiFillEye style={{color:"green"}}/>
                    </>
                )
            }
            return(
                <>
                <AiOutlineEyeInvisible style={{color:"red"}}/>
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
        renderCell:()=>{
            return(
                <>
                <Select
                
                IconComponent={BsThreeDotsVertical}  labelId="demo-simple-select-error-label"
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
    { id: 1, category: 'Snow', firstName: 'Jon', price: 35, stock: "In",status:"active" },
    { id: 2, category: 'Lannister', firstName: 'Cersei', price: 42, stock: "Out",status:"hide" },
  
];
const Product = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-12 ">
                        <div className='col-12 d-flex'>
                            <div className='col'>
                        <h1>Product</h1>
                        </div>
                        <div className='col text-end'>
                        <LoadingButton>Add Product</LoadingButton>
                        </div>
                        </div>

                    <div className='col-12'>
                        <Box sx={{ height: 400, width: '100%' }}>
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
                                }}
                            />
                        </Box>

                    </div>

                </div>
                </div>


            </div>
        </>
    )
}
export default Product