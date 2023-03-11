import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
    palette: {
        primary: {
            main: "#fffff",
        },



    },

});
const columns = [
    { field: 'id', 
    headerName: 'ID',
    minWidth: 60,
    maxWidth: 140,
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    },
    {
        field: 'flavourImage',
        headerName: 'Flavour Image',
        minWidth: 60,
        maxWidth: 140,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        editable: true,
    },
    {
        field: 'flavourName',
        headerName: 'Flavour Name',
        minWidth: 60,
        maxWidth: 140,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        editable: true,
    },
    
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        minWidth: 60,
        maxWidth: 140,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        editable: true,
    },
    {
        field: 'status',
        headerName: 'Status',
        type: 'number',
        minWidth: 60,
        maxWidth: 140,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        editable: true,
    },
  
];

const rows = [
    { id: 1, flavourImage: 'Snow', flavourName: 'Flower', price: 35 },
    { id: 2, flavourImage: 'Lannister', flavourName: 'Edible', price: 4}
];

const Flavour = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row ">
                    <div className="col-12">
                        <div className="col-12 Flav_main_col">
                            <div className="col">
                                <p>Flavour</p>

                            </div>
                            <div className="col add_flav add_flav_btn">
                                <Button>Add Flavour</Button>
                            </div>

                        </div>
                        <div className='col'>
                            <div className='col-12 '>
                                <Box sx={{ height: 400, width: '100%',
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
export default Flavour;