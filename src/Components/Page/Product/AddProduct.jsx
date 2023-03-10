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
import { Controller } from "react-hook-form";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LabResult from "./LabResult"
import StockCheckBox from "./StockCheckbox"
import Strain from "./Strain"
import ToggleButton from "./ToggleButton"
import ProductGiftVoucher from "./ProductGiftVoucher"
import ProductCategory from './ProductCategory';
import Box from '@mui/material/Box';
import { LoadingButton } from '@mui/lab';
import { useForm } from "react-hook-form";
import { convertToHTML } from 'draft-convert';
import Cookies from 'universal-cookie';
import Axios from "axios"

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
    const [convertedContent, setConvertedContent] = React.useState(null);
    const [net_weight, SetNet_Weight] = React.useState([])
    const { register, handleSubmit, errors, reset,control } = useForm();
    const [open, setOpen] = React.useState(false);
    const [discount, SetDiscount] = React.useState([])
    const [Flavours, SetFlavours] = React.useState([])
    const [Taxs, SetTaxs] = React.useState([])
    const [store, Setstore] = React.useState([])
    const [Brand, SetBrand] = React.useState([])
      const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
 
        const [Product, SetProduct] = React.useState({
            Product_Name: "",
            Product_Description: "",
            quantity: "",
            prices: "",
            discount: "",
            tax: "",

            Brand_id: "",
            Multiple_Image: "",
            Product_Video: "",
            SKU: "",
            UPC: "",
            net_weight: "",
            strain: "N",
            Sub_Category: "",
            flavour_id: "",
            THC: "",
            CBD: "",
            CBN: "",
            lab_Result: "percentage",
            Stock: "In Stock",
            Status: "Active",
            Store_id: "",
            tag: "",
            DiscountedAmount: "",
            Product_Image: "",
            Allow_tax: "",
            Allow_discount: "",
            Additional_Description: "",
            taxedAmount: "",
            Alt_Text: "",
            Link: "",
            After_Coupoun_Price: "",
            After_GiftVoucher: "",
            SubTotal: "",
            Sub_Category_id: "",
            Claimed_Coupoun: "",
            GiftVoucher: "",
        })
    const [editorState, setEditorState] = React.useState(() =>
        EditorState.createEmpty()
    );


    React.useEffect(() => {
        let html = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(html);
    }, [editorState]);


    const handleChange = (event) => {
        var value = event.target.value;
          SetProduct({
            ...Product, [event.target.name]: value
        });
    }

    React.useEffect(() => {
        Axios("http://34.201.114.126:8000/AdminPanel/ActiveDiscount/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            SetDiscount(response.data.data)
            SetProduct(Product => ({ ...Product, discount: response.data.data[0].id }))


        })
        Axios("http://34.201.114.126:8000/AdminPanel/ActiveTax/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            SetTaxs(response.data.data)
            SetProduct(Product => ({ ...Product, tax: response.data.data[0].id }))

        })
        Axios("http://34.201.114.126:8000/AdminPanel/ActiveStores/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            try {
                Setstore(response.data.data)

                SetProduct(Product => ({ ...Product, Store_id: response.data.data[0].id }))
            } catch (error) {
                console.trace(error)
            }
        })



        Axios("http://34.201.114.126:8000/AdminPanel/Get-Flavours/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {

            SetFlavours(response.data)
            SetProduct(Product => ({ ...Product, flavour_id: response.data[0].id }))


        })
        Axios("http://34.201.114.126:8000/AdminPanel/ActiveNetWeight/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            SetNet_Weight(response.data.data)
          
            
            
            SetProduct(Product => ({ ...Product, net_weight: response.data.data[0].id }))
        })
        Axios("http://34.201.114.126:8000/AdminPanel/ActiveBrand/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            SetBrand(response.data.data)
                SetProduct(Product => ({ ...Product, Brand_id: response.data.data[0].id }))

        })

    }, [token_data])


    const formdata = new FormData();
    formdata.append('Product_Name', Product.Product_Name);
    formdata.append('Product_Description', convertedContent);
    formdata.append('discount', Product.discount);
    formdata.append('tax', Product.tax);
    formdata.append('Claimed_Coupoun', Product.Claimed_Coupoun);
    formdata.append('GiftVoucher', Product.GiftVoucher);
    formdata.append('quantity', Product.quantity);
    formdata.append('prices', Product.prices);
    formdata.append('Multiple_Image', "");
    // formdata.append('Product_Video', video);
    formdata.append('SKU', Product.SKU);
    formdata.append('UPC', Product.UPC);
    formdata.append('net_weight_id', Product.net_weight);
    formdata.append('flavour_id', Product.flavour_id);
    formdata.append('THC', Product.THC);
    formdata.append('CBD', Product.CBD);
    formdata.append('CBN', Product.CBN);
    formdata.append('lab_Result', Product.lab_Result);
    formdata.append('Stock', Product.Stock);
    formdata.append('strain', Product.strain);
    formdata.append('Sub_Category', Product.Sub_Category);
    formdata.append('Status', Product.Status);
    formdata.append('Store_id', Product.Store_id);
    formdata.append("tag", "");
    formdata.append('DiscountedAmount', "");
    // formdata.append('Product_Image', Image)
    formdata.append('Allow_tax', "")
    formdata.append('Allow_discount', "")
    formdata.append('Additional_Description', "")
    formdata.append('taxedAmount', "")
    formdata.append('Alt_Text', "gjhbkk")
    formdata.append('Link', "")
    formdata.append('After_Coupoun_Price', "")
    formdata.append('After_GiftVoucher', "")
    formdata.append('SubTotal', "")
    formdata.append('Sub_Category_id', Product.Sub_Category_id)
    formdata.append('Brand_id', Product.Brand_id)

    const onSubmit = (data) => { 
        console.log(data)
        const entries = Object.entries(data)

        // var promise = new Promise(function (resolve, reject) {
        //     return resolve(
        entries.map(([key, value]) => (
            SetProduct(Product => ({ ...Product, [key]: value }))

        ))
        const config = {
            headers: { Authorization: `Bearer ${token_data}` }
        };


        Axios.post(
            'http://34.201.114.126:8000/AdminPanel/Add-Product/',
    
            formdata,
            config
        ).then(() => {
            setOpen(false);
        }).catch(
            // function (error) {
            //     for (const [key, value] of Object.entries(error.response.data)) {
            //         switch (key) {
            //             case "Product_Name":
            //                 setmassage({ Product_Name: value })
            //                 seterror({ Product_Name: "red" })
            //                 break
            //             case "Product_Description":
            //                 setmassage({ Product_Description: value })
            //                 seterror({ Product_Description: "red" })
            //                 break
            //             case "quantity":
            //                 setmassage({ quantity: value })
            //                 seterror({ quantity: "red" })
            //                 break
            //             case "prices":
            //                 setmassage({ prices: value })
            //                 seterror({ prices: "red" })
            //                 break
            //             default:
            //                 return 'foo';
            //         }
            //     }
            // }
        )
    };







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
                    <form onSubmit={handleSubmit(onSubmit)}>

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
                                            <TextField type="text" fullWidth
                                                id="filled"
                                                name='Product_Name'
                                                label='Enter your Product Name'
                                                inputRef={register({
                                                    required: "Product Name is required*."
                                                })}
                                                helperText={errors.Product_Name?.message}
                                                error={Boolean(errors?.Product_Name)}
                                            />
                                        </div>

                                    </div>
                                    <div className='row mt-2'>
                                        <div className=' col-lg-2'>
                                            <label>Product Description</label>
                                        </div>
                                        <div className=' col-lg-6 p-2'>
                                            <Box sx={{
                                                ".rdw-editor-main": {
                                                    border: "1px solid #DDDDDD",
                                                    paddingLeft: "2px"
                                                }

                                            }}>
                                        
                                                    
                                                        <Editor
                                                    editorState={editorState}
                                                    onEditorStateChange={setEditorState}
                                                            toolbarClassName="toolbarClassName"
                                                            wrapperClassName="wrapperClassName"
                                                            editorClassName="editorClassName"
                                                            toolbar={
                                                                { options: ['inline', 'blockType', 'fontSize'] }
                                                            }
                                                />
                                                    
                                               
                                            </Box>

                                        </div>

                                    </div>
                                    <div className='row Add_pro_background'>
                                        <div className='col-lg-2'>
                                            <label>Product Image</label>
                                        </div>
                                        <div className='col-md-8'>
                                            <div className='AddProduct_img'>
                                                <input className='addProd_image_input' type="file" id="file" variant="outlined" />

                                            </div>
                                        </div>

                                    </div>
                                    <div className='row  mt-4 mb-4 pt-4 pb-4 product_weight_row Add_pro_background'>
                                        <div className=' col-lg-2 '>
                                            <label>SKU</label>
                                        </div>
                                        <div className=' col-lg-2'>
                                            <TextField
                                                type="number"
                                                id="filled"
                                                name='SKU'
                                                label='SRK'
                                                inputRef={register({
                                                    required: "SRK is required*."
                                                })}
                                                helperText={errors.SKU?.message}
                                                error={Boolean(errors?.SKU)}
                                            />
                                        </div>
                                        <div className=' col-lg-1'>
                                            <label>UPC</label>

                                        </div>
                                        <div className=' col-lg-2'>
                                            <TextField
                                                type="number"
                                                id="filled"
                                                name='UPC'
                                                label='UPC'
                                                inputRef={register({
                                                    required: "UPC is required*."
                                                })}
                                                helperText={errors.UPC?.message}
                                                error={Boolean(errors?.UPC)}
                                            />
                                        </div>

                                    </div>
                                    <div className='row Add_pro_background'>
                                        <p className='product_title'>Pricing</p>
                                        <div className=' col-lg-2'>
                                            <label>Prices</label>
                                        </div>
                                        <div className='col-lg-2'>
                                            <TextField
                                                type="number"
                                                id="filled"
                                                name='prices'
                                                label='prices'
                                                inputRef={register({
                                                    required: "Price is required*."
                                                })}
                                                helperText={errors.prices?.message}
                                                error={Boolean(errors?.prices)}
                                            />

                                        </div>
                                        <div className='col-lg-1'>
                                            <label>Discount</label>
                                        </div>
                                        <div className='col-lg-2'>
                                            <FormControl sx={{ minWidth: 120 }}>
                                                <Select
                                                    name='discount'
                                                    value={Product.discount}
                                                    onChange={handleChange}
                                                    displayEmpty
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                >
                                                    {
                                                        discount.map((data, index) => {
                                                            return (<MenuItem value={data.id} style={{ fontSize: 15 }} key={index}>{data.Discount_type}</MenuItem>)
                                                        })
                                                    }

                                                </Select>

                                            </FormControl>

                                        </div>
                                        <div className='col-lg-1'>
                                            <label>Tax</label>
                                        </div>
                                        <div className='col-lg-2'>
                                            <FormControl sx={{ minWidth: 120 }}>
                                                <Select
                                                    name='tax'
                                                    onChange={handleChange}
                                                    value={Product.tax}
                                                    displayEmpty
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                >
                                                    <MenuItem style={{ fontSize: 15 }}>
                                                        <em>No Tax</em>
                                                    </MenuItem>
                                                    {
                                                        Taxs.map((data, index) => {
                                                            return (<MenuItem value={data.id} style={{ fontSize: 15 }} key={index}>{data.tax_type}</MenuItem>)
                                                        })
                                                    }

                                                </Select>

                                            </FormControl>

                                        </div>

                                    </div>
                                    <div className='row pt-4 pb-4 mt-2 product_weight_row Add_pro_background'>
                                        <p className='product_title mt-2'>Product weight / Flavour</p>
                                        <div className='col-lg-2'>
                                            <label>Weight Type:</label>
                                        </div>
                                        <div className='col-lg-3'>
                                            <FormControl sx={{ minWidth: 120 }}>
                                                <Select
                                                     value={Product.net_weight}
                    name='net_weight'
                    onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    {
                                                        net_weight.map((data, index) => {
                                                            return (<MenuItem value={data.id} style={{ fontSize: 15 }} key={index}>{data.Weight_type}</MenuItem>)
                                                        })
                                                    }
                                                </Select>

                                            </FormControl>
                                        </div>
                                        <div className='col-lg-2'>
                                            <label>Flavour Type</label>

                                        </div>
                                        <div className='col-lg-3'>
                                            <FormControl sx={{ minWidth: 120 }}>
                                                <Select
                                                    value={Product.flavour_id}
                                                    name='flavour_id'
                                                    onChange={handleChange}
                                                    displayEmpty
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>

                                                    {
                                                        Flavours.map((data, index) => {
                                                            return (<MenuItem value={data.id} style={{ fontSize: 15 }} key={index}>{data.flavour_Name}</MenuItem>)
                                                        })
                                                    }
                                                </Select>

                                            </FormControl>
                                        </div>

                                    </div>
                                    <div className='row product_weight_row mt-2 pt-4 pb-4 Add_pro_background'>
                                        <div className='col-lg-2'>
                                            <label>Quantity</label>
                                        </div>
                                        <div className='col-lg-6'>
                                            <TextField
                                                type="number"
                                                id="filled"
                                                name='quantity'
                                                label='quantity'
                                                inputRef={register({
                                                    required: "quantity is required*."
                                                })}
                                                helperText={errors.quantity?.message}
                                                error={Boolean(errors?.quantity)}
                                            />

                                        </div>

                                    </div>
                                    <div className='row mt-2 product_weight_row Add_pro_background'>
                                        <p>Lab Result</p>
                                        <div className='col-lg-2'>

                                        </div>
                                        <div className="col-lg-2">
                                            <p>THC</p>
                                            <TextField type="number"
                                                id="filled"
                                                name='THC'
                                                label='THC'
                                                inputRef={register({
                                                    required: "THC is required*."
                                                })}
                                                helperText={errors.THC?.message}
                                                error={Boolean(errors?.THC)}
                                            />

                                        </div>
                                        <div className="col-lg-2">
                                            <p>CBD</p>
                                            <TextField type="number"
                                                id="filled"
                                                name='CBD'
                                                label='CBD'
                                                inputRef={register({
                                                    required: "CBD is required*."
                                                })}
                                                helperText={errors.CBD?.message}
                                                error={Boolean(errors?.CBD)}
                                            />

                                        </div>
                                        <div className="col-lg-2">
                                            <p>CBN</p>
                                            <TextField type="number"
                                                id="filled"
                                                name='CBN'
                                                label='CBN'
                                                inputRef={
                                                 
                                                        register({
                                                            required: "CBN is required*.",
                                                            // minLength: {
                                                                
                                                            //     value: 1,
                                                            //     message: "1-99"
                                                            // },
                                                            // maxLength: {
                                                            //     value: 2,
                                                            //     message: "0-99"
                                                            // }
                                                        }) 
                                                      
                                            }
                                                helperText={errors.CBN?.message}
                                                error={Boolean(errors?.CBN)}
                                            />

                                        </div>
                                        <div className='col-lg-4'>
                                            <span>Labresults</span>
                                            <LabResult
                                                Product={Product}
                                                SetProduct={SetProduct}
                                            />

                                        </div>
                                        {/* <div className='col-lg-10'>
                                        <LabResult/>
                                    </div> */}

                                    </div>
                                    <div className='row product_weight_row mt-2 mb-2  pt-4 pb-4 Add_pro_background'>
                                        <p className='product_title'>Store Details</p>
                                        <div className='col-lg-2'>
                                            <label>Store Name</label>
                                        </div>
                                        <div className='col-lg-3'>
                                            <FormControl sx={{ minWidth: 120 }}>
                                                <Select
                                                    value={Product.Store_id}
                                                    name="Store_id"
                                                    onChange={handleChange}
                                                    displayEmpty
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    {
                                                        store.map((data, index) => {
                                                            return (<MenuItem value={data.id} style={{ fontSize: 15 }} key={index}>{data.Store_Name}</MenuItem>)
                                                        })
                                                    }

                                                </Select>

                                            </FormControl>

                                        </div>

                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-2'>
                                            <label>Stock</label>
                                        </div>
                                        <div className='col-lg-6'>
                                            <StockCheckBox 
                                                Product={Product}
                                                SetProduct={SetProduct}
                                            />

                                        </div>

                                    </div>


                                </div>
                                <div className='col-md-4 border'>
                                    <div className='row mt-2 mb-2'>
                                        <div className='col-lg-6'>
                                            <label>Show in Online Store</label>
                                        </div>
                                        <div className='col-lg-6'>
                                            <ToggleButton
                                                Product={Product}
                                                SetProduct={SetProduct}
                                            ></ToggleButton>
                                        </div>

                                    </div>
                                    <div className='row product_weight_row pt-4 pb-4 center'>

                                        <p className='product_title center'>Strain</p>
                                        <div className='col-lg-12 center '>
                                        <Strain
                                            Product={Product}
                                            SetProduct={SetProduct}
                                        />

                                        </div>

                                    </div>
                                    <div className='row product_weight_row pt-4 pb-4 mt-4 mb-4 Add_pro_background'>
                                        <p className='product_title '>Category</p>
                                        <div className='col-lg-10 '>
                                            <ProductCategory
                                                Product={Product}
                                                SetProduct={SetProduct}
                                            />
                                        </div>

                                    </div>
                                    <div className='row product_weight_row pt-4 pb-4 mt-4 mb-4 Add_pro_background'>
                                        <p className='product_title '>Brand</p>
                                        <div className='col-lg-12 center'>
                                            <FormControl sx={{ minWidth: 120 }}>
                                                <Select
                                                    name='Brand_id'
                                                    onChange={handleChange}
                                                    value={Product.Brand_id}
                                                    displayEmpty
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                    size="small"
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    {
                                                        Brand.map((data, index) => {
                                                            return (<MenuItem value={data.id} style={{ fontSize: 15 }} key={index}>{data.name}</MenuItem>)
                                                        })
                                                    }
                                                </Select>

                                            </FormControl>
                                        </div>

                                    </div>
                                    <div className='row product_weight_row pt-4 pb-4 mt-4 mb-4 Add_pro_background'>
                                        <p className='product_title '>Gift Voucher / Coupon</p>

                                        <div className='col-lg-12'>
                                            <ProductGiftVoucher
                                                Product={Product}
                                                SetProduct={SetProduct}
                                            />

                                        </div>
                                       
                                    </div>

                                </div>
                            </div>
                            <div className='row center my-3'>
                                <div className='col-lg-12'>
                                    <LoadingButton sx={{
                                        "&.MuiButtonBase-root": {
                                            backgroundColor: "#31B665",
                                            color: "#FFFFFF"
                                        }

                                    }}
                                        type="submit"
                                        loading={false}
                                    >Add Product</LoadingButton>

                                </div>

                            </div>

                        </div>
                    </form>
                      

                    
                
                </DialogContent>
                <DialogActions>
                    <Button
                        sx={{
                            "&.MuiButtonBase-root": {
                                color: "#31B665"
                            }
                        }}
                        autoFocus onClick={handleClose}>
                        Exit
                    </Button>
                </DialogActions>
            </BootstrapDialog>

        </>
)
                    
}
export default AddProduct