import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LabResult from "./LabResult"
import StockCheckBox from "./StockCheckbox"
import Strain from "./Strain"
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));
function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}
BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};



const AddProduct = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [discount, setDiscount] = React.useState('');
    const [tax, setTax] = React.useState("")
    const [Weight, setWeight] = React.useState("")
    const [flavour, setFlavour] = React.useState("")
    const [store,setStore]=React.useState("")
    const handleChange = (event) => {
        setDiscount(event.target.value);
    };
    const handleChangeTax = (event) => {
        setTax(event.target.value);

    }
    const handleChangeWeight = (event) => {
        setWeight(event.target.value)
    }
    const handleChangeFlavour = (event) => {
        setFlavour(event.target.value)
    }
    const handleChangeStore=(event)=>{
        setStore(event.target.value)
    }
    return (
        <>
            <Button
                sx={{
                    "&.MuiButtonBase-root": {
                        backgroundColor: "#A1A1A1",
                        color: "#FFFFFF"
                    }

                }}
                variant="outlined" onClick={handleClickOpen}>
                Add Product
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "80%",
                            // height: "90%",
                            height: {
                                xs: "90%",
                                sm: "100%",
                                md: "100%",
                                lg: "90%",
                                xl: "90%"
                            },
                            maxWidth: "none",  // Set your width here
                            border: "1px solid #31B665",
                            borderRadius: "15px",

                        },
                    },
                }}
            >
                {/* <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Modal title
                </BootstrapDialogTitle> */}
                <DialogContent dividers>
                    <div className='container-fluid '>
                        <div className='row border'>
                            <div className='col-12 center'>
                                <div className='col'>
                                    <p className='product_title'>Product</p>
                                </div>

                            </div>
                        </div>
                        {/* product */}
                        <div className='row mt-2'>
                            <div className='col-md-8 border'>
                                <div className='row pt-2'>
                                    <div className=' col-lg-2'>
                                        <label>Name</label>
                                    </div>
                                    <div className=' col-lg-6'>
                                        <TextField type="text" fullWidth placeholder='Enter your Product Name' />
                                    </div>

                                </div>
                                <div className='row mt-2'>
                                    <div className=' col-lg-2'>
                                        <label>Product Description</label>
                                    </div>
                                    <div className=' col-lg-6 p-2'>
                                        <Editor
                                            toolbarClassName="toolbarClassName"
                                            wrapperClassName="wrapperClassName"
                                            editorClassName="editorClassName"

                                        />
                                    </div>

                                </div>
                                <div className='row'>
                                    <div className='col-lg-2'>
                                        <label>Product Image</label>
                                    </div>
                                    <div className='col-md-8'>
                                        <div>Image</div>
                                    </div>

                                </div>
                                <div className='row  pt-4 pb-4 product_weight_row'>
                                    <div className=' col-lg-2 '>
                                        <label>SKU</label>
                                    </div>
                                    <div className=' col-lg-2'>
                                        <TextField type="number" />
                                    </div>
                                    <div className=' col-lg-1'>
                                        <label>UPC</label>

                                    </div>
                                    <div className=' col-lg-2'>
                                        <TextField type="number" />
                                    </div>

                                </div>
                                <div className='row'>
                                    <p className='product_title'>Pricing</p>
                                    <div className=' col-lg-2'>
                                        <label>Prices</label>
                                    </div>
                                    <div className='col-lg-2'>
                                        <TextField type="number" />

                                    </div>
                                    <div className='col-lg-1'>
                                        <label>Discount</label>
                                    </div>
                                    <div className='col-lg-2'>
                                        <FormControl sx={{ minWidth: 120 }}>
                                            <Select
                                                value={discount}
                                                onChange={handleChange}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={"discount"}>discount</MenuItem>

                                            </Select>

                                        </FormControl>

                                    </div>
                                    <div className='col-lg-1'>
                                        <label>Tax</label>
                                    </div>
                                    <div className='col-lg-2'>
                                        <FormControl sx={{ minWidth: 120 }}>
                                            <Select
                                                value={tax}
                                                onChange={handleChangeTax}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={"Tax"}>Tax</MenuItem>

                                            </Select>

                                        </FormControl>

                                    </div>

                                </div>
                                <div className='row pt-4 pb-4 mt-2 product_weight_row '>
                                    <p className='product_title mt-2'>Product weight / Flavour</p>
                                    <div className='col-lg-2'>
                                        <label>Weight Type:</label>
                                    </div>
                                    <div className='col-lg-3'>
                                        <FormControl sx={{ minWidth: 120 }}>
                                            <Select
                                                value={Weight}
                                                onChange={handleChangeWeight}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={"Weight"}>weight</MenuItem>

                                            </Select>

                                        </FormControl>
                                    </div>
                                    <div className='col-lg-2'>
                                        <label>Flavour Type</label>

                                    </div>
                                    <div className='col-lg-3'>
                                        <FormControl sx={{ minWidth: 120 }}>
                                            <Select
                                                value={flavour}
                                                onChange={handleChangeFlavour}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={"Flavour"}>Flavour</MenuItem>

                                            </Select>

                                        </FormControl>
                                    </div>

                                </div>
                                <div className='row product_weight_row mt-2 pt-4 pb-4'>
                                    <div className='col-lg-2'>
                                        <label>Quantity</label>
                                    </div>
                                    <div className='col-lg-6'>
                                        <TextField type="number" />

                                    </div>

                                </div>
                                <div className='row mt-2 product_weight_row'>
                                    <p>Lab Result</p>
                                    <div className='col-lg-2'>

                                    </div>
                                    <div className="col-lg-2">
                                        <p>THC</p>
                                        <TextField type="number" />

                                    </div>
                                    <div className="col-lg-2">
                                        <p>CBD</p>
                                        <TextField type="number" />

                                    </div>
                                    <div className="col-lg-2">
                                        <p>CBN</p>
                                        <TextField type="number" />

                                    </div>
                                    <div className='col-lg-4'>
                                        <span>Labresults</span>

                                    </div>
                                    {/* <div className='col-lg-10'>
                                        <LabResult/>
                                    </div> */}

                                </div>
                                <div className='row product_weight_row mt-2 mb-2  pt-4 pb-4'>
                                    <p className='product_title'>Store Details</p>
                                    <div className='col-lg-2'>
                                     <label>Store Name</label>
                                    </div>
                                    <div className='col-lg-3'>
                                    <FormControl sx={{ minWidth: 120 }}>
                                            <Select
                                                value={store}
                                                onChange={handleChangeStore}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={"Store"}>Store</MenuItem>

                                            </Select>

                                        </FormControl>

                                    </div>

                                </div>
                                <div className='row'>
                                    <div className='col-lg-2'>
                                      <label>Stock</label>
                                    </div>
                                    <div className='col-lg-6'>
                                        <StockCheckBox/>

                                    </div>

                                </div>


                            </div>
                            <div className='col-md-4 border'>
                                <div className='row mt-2'>
                                    <div className='col-lg-6'>
                                    <label>Show in Online Store</label>
                                    </div>
                                    <div className='col-lg-6'>
                                      <Button>Show</Button>
                                    </div>

                                </div>
                                <div className='row product_weight_row pt-4 pb-4'>

                                    <p className='product_title'>Strain</p>
                                    <div className='col-lg-10 '>
                                    <Strain/>

                                    </div>

                                </div>
                                <div className='row'>
                                    <div className='col-lg-10'>
                                 
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Exit
                    </Button>
                </DialogActions>
            </BootstrapDialog>

        </>
    )
}
export default AddProduct