import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';
import Box from '@mui/material/Box';
import SearchBar from "material-ui-search-bar";
import LoadingButton from '@mui/lab/LoadingButton';
import { DataGrid } from '@mui/x-data-grid';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
    palette: {
        primary: {
            main: "#fffff",
        },



    },

});
const columns = [
    {
        field: 'id',
        headerName: 'ID',
        maxWidth: 90,
        flex: 1,
        headerAlign: 'left',
        align: 'left',
    },
    {
        field: 'userName',
        headerName: 'User Name',
        maxWidth: 90,
        flex: 1,
        headerAlign: 'left',
        align: 'left',
        editable: true,
    },
    {
        field: 'date',
        headerName: 'Date',
        maxWidth: 90,
        flex: 1,
        headerAlign: 'left',
        align: 'left',
        editable: true,
    },
    {
        field: 'payment',
        headerName: 'Payment',
        type: 'number',
        maxWidth: 90,
        flex: 1,
        headerAlign: 'left',
        align: 'left',
        editable: true,
    },
    {
        field: 'fullFillMent',
        headerName: 'FullFillMent',
        sortable: false,
        maxWidth: 90,
        flex: 1,
        headerAlign: 'left',
        align: 'left',

    },
    {
        field: 'deliveryType',
        headerName: 'DeliveryType',
        sortable: false,
        maxWidth: 90,
        flex: 1,
        headerAlign: 'left',
        align: 'left',

    },
    {
        field: 'total',
        headerName: 'Total',
        sortable: false,
        maxWidth: 90,
        flex: 1,
        headerAlign: 'left',
        align: 'left',

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
    { id: 1, userName: 'Jack', date: new Date().toJSON().slice(0, 10), payment: "paid", fullFillMent: "Pending", deliveryType: "curbside", total: 100 },
    { id: 2, userName: 'Jack Thomas', date: new Date().toJSON().slice(0, 10), payment: "unpaid", fullFillMent: "not", deliveryType: "curbside", total: 200 },

];
const OrderList = () => {
    const [order, setOrder] = React.useState('');

    const handleChange = (event) => {
        setOrder(event.target.value)
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-12 product_Col">
                        <div className="col-12 product_head">
                            <div className="col mt-2 ">
                                <Select
                                    value={order}
                                    onChange={handleChange}
                                    displayEmpty
                                    name='productfilter'
                                    size='small'
                                    sx={{
                                        background: "#31B665",
                                        color: "#FFFFFF",
                                        "& .MuiSvgIcon-root": {
                                            color: "#FFFFFF",
                                        },


                                    }}

                                >
                                    <MenuItem value="">
                                        <em>Order</em>
                                    </MenuItem>
                                    <MenuItem value={"All Order"}>All Order</MenuItem>

                                </Select>
                            </div>
                            <div className='col mt-2'>
                                <Box sx={{
                                    ".MuiSvgIcon-root": {
                                        color: "#31B665",

                                    },
                                    ".ForwardRef-root-1": {
                                        height: "40px"
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

                        </div>
                        <div className='col mt-2'>
                            <div className='col-12'>
                                <Box sx={{
                                    height: 400, width: '100%',
                                    "&.MuiDataGrid-root .MuiDataGrid-columnHeader:hover": {
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
            </div>
        </>
    )
}
export default OrderList