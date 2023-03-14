import React ,{useRef}from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { CiUser } from "react-icons/ci"
import { BsBuilding } from "react-icons/bs"
import { FormControl, FormHelperText, } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { IoLocationSharp } from "react-icons/io5"
import MuiPhoneNumber from 'material-ui-phone-number';
import Box from '@mui/material/Box';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import StoreImage from "../StoreComponent/StoreImage";
import { FormControlLabel, FormLabel, RadioGroup, Radio, } from "@material-ui/core";
import LicenseImage from "../StoreComponent/LicenseDetail/LicenseImage"
import LoadingButton from '@mui/lab/LoadingButton';
import { AiOutlineGlobal } from "react-icons/ai"
import { BsFillCreditCard2BackFill } from "react-icons/bs"
import useStyles from '../../../../Style';
import { useNavigate } from "react-router-dom";
import {
    InputLabel,
    Select,
    MenuItem,
} from "@material-ui/core";
import axios from "axios";
import { EditorState } from "draft-js";
import { convertToHTML } from 'draft-convert';
const NewStoreAdd = () => {

    const classes = useStyles();

    const navigate = useNavigate();
    const storeImage = useRef(null);
    const mobile = useRef(null);
    const { register, handleSubmit, errors, control, reset } = useForm();
    const [loading, Setloading] = React.useState(false)
    const [SuccessFull, SetSuccessFull] = React.useState(false)
    const [country, setCountry] = React.useState([])
    const [selectCountry, setSelectCountry] = React.useState()
    const [convertedContent, setConvertedContent] = React.useState(null);
    const [DuplicateError, SetDuplicateError] = React.useState({
        LicenceNo: "",
        Stores_MobileNo: "",
    })

    const [AddStore, SetStore] = React.useState({
        Store_Name: "",
        Store_Type: "",
        LicenceNo: "",
        Store_Address: "",
        Stores_Website: "",
        Stores_MobileNo: "",
        Status: "",
        Country_id: "",
        State_id: "",
        City_id: "",
        License_Type: "",
        Stores_Website: "",
        Store_Image: "",
        LicenseDoc: "",
        expires: ""
        
    });

    const [editorState, setEditorState] = React.useState(() =>
        EditorState.createEmpty()
    );


    React.useEffect(() => {
        let html = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(html);
    }, [editorState]);


    React.useEffect(() => {
        axios("http://34.201.114.126:8000/VendorPanel/ActiveCountry/", {


        }).then(response => {

            setCountry(response.data.data)
            // setCountry_id(response.data[0].id)

        })
    }, [])





    return (
        <>
            <div className="container-fluid newAddStore_container">

                <div className=" newAddStoreMainDiv">
                    <Paper sx={{ "&.MuiPaper-root ": { height: "70%" } }} elevation={3}>

                        <div className="row center">
                            <div className="col-lg-12 newStore_title">
                                <h6>STORE DETAILS</h6>
                            </div>

                        </div>
                        <form>
                            <div className="row newLogin_label m-2">
                                <h6>Store Name</h6>

                                <div className="col-lg-12">

                                    <TextField id="standard-basic" variant="standard" placeholder='Type User Name'
                                        fullWidth
                                        sx={{
                                            '.MuiInputBase-input': { fontSize: '.7rem' },
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <BsBuilding className='newStore_icons'/>
                                                </InputAdornment>
                                            ),
                                        }}

                                    />

                                </div>

                            </div>
                            <div className="row newLogin_label m-2">
                                <h6>Store Type </h6>

                                <div className="col-lg-12">

                                    <FormControl
                                        fullWidth
                                    // variant="filled"
                                    // className={classes.inputField}
                                    // error={Boolean(errors.Store_Type)}

                                    >
                                        <InputLabel id="demo-simple-select-label" style={{ fontSize: ".7rem" }}>
                                            Select Your Store Type
                                        </InputLabel>


                                        <Select

                                        >
                                            <MenuItem value={"cbd store"} style={{ fontSize: 15 }}>

                                                CBD Store

                                            </MenuItem>
                                            <MenuItem value={"brand"} style={{ fontSize: 15 }}>Brand</MenuItem>
                                            <MenuItem value={"dispensary"} style={{ fontSize: 15 }}>Dispensary</MenuItem>
                                            <MenuItem value={"delivery"} style={{ fontSize: 15 }}>Delivery</MenuItem>
                                            <MenuItem value={"doctor"} style={{ fontSize: 15 }}>Doctor</MenuItem>
                                        </Select>

                                    </FormControl>

                                </div>

                            </div>
                            <div className="row newLogin_label m-2">
                                <h6>Address</h6>

                                <div className="col-lg-12">

                                    <TextField id="standard-basic" variant="standard"
                                        fullWidth
                                        sx={{
                                            '.MuiInputBase-input': { fontSize: '.7rem' },
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <IoLocationSharp className='newStore_icons' />
                                                </InputAdornment>
                                            ),
                                        }}

                                    />

                                </div>

                            </div>
                            <div className="row newLogin_label m-2">
                                <div className='col-lg-4'>
                                    <h6>Country</h6>
                                    <FormControl
                                        fullWidth
                                    // variant="filled"
                                    // className={classes.inputField}
                                    // error={Boolean(errors.Store_Type)}

                                    >
                                        <InputLabel id="demo-simple-select-label" style={{ fontSize: ".7rem" }}>
                                            Select Your Country
                                        </InputLabel>


                                        <Select

                                        >
                                            <MenuItem value={"cbd store"} style={{ fontSize: 15 }}>CBD Store</MenuItem>
                                            <MenuItem value={"brand"} style={{ fontSize: 15 }}>Brand</MenuItem>
                                            <MenuItem value={"dispensary"} style={{ fontSize: 15 }}>Dispensary</MenuItem>
                                            <MenuItem value={"delivery"} style={{ fontSize: 15 }}>Delivery</MenuItem>
                                            <MenuItem value={"doctor"} style={{ fontSize: 15 }}>Doctor</MenuItem>
                                        </Select>

                                    </FormControl>
                                </div>
                                <div className='col-lg-4'>
                                    <h6>State</h6>
                                    <FormControl
                                        fullWidth
                                    // variant="filled"
                                    // className={classes.inputField}
                                    // error={Boolean(errors.Store_Type)}

                                    >
                                        <InputLabel id="demo-simple-select-label" style={{ fontSize: ".7rem" }}>
                                            Select Your State
                                        </InputLabel>


                                        <Select

                                        >
                                            <MenuItem value={"cbd store"} style={{ fontSize: 15 }}>CBD Store</MenuItem>
                                            <MenuItem value={"brand"} style={{ fontSize: 15 }}>Brand</MenuItem>
                                            <MenuItem value={"dispensary"} style={{ fontSize: 15 }}>Dispensary</MenuItem>
                                            <MenuItem value={"delivery"} style={{ fontSize: 15 }}>Delivery</MenuItem>
                                            <MenuItem value={"doctor"} style={{ fontSize: 15 }}>Doctor</MenuItem>
                                        </Select>

                                    </FormControl>
                                </div>
                                <div className='col-lg-4'>
                                    <h6>City</h6>
                                    <FormControl
                                        fullWidth
                                    // variant="filled"
                                    // className={classes.inputField}
                                    // error={Boolean(errors.Store_Type)}

                                    >
                                        <InputLabel id="demo-simple-select-label" style={{ fontSize: ".7rem" }}>
                                            Select Your City Type
                                        </InputLabel>


                                        <Select

                                        >
                                            <MenuItem value={"cbd store"} style={{ fontSize: 15 }}>CBD Store</MenuItem>
                                            <MenuItem value={"brand"} style={{ fontSize: 15 }}>Brand</MenuItem>
                                            <MenuItem value={"dispensary"} style={{ fontSize: 15 }}>Dispensary</MenuItem>
                                            <MenuItem value={"delivery"} style={{ fontSize: 15 }}>Delivery</MenuItem>
                                            <MenuItem value={"doctor"} style={{ fontSize: 15 }}>Doctor</MenuItem>
                                        </Select>

                                    </FormControl>
                                </div>
                            </div>

                            <div className="row newLogin_label m-2">
                                <div className='col-lg-6 mt-2'>
                                    <h6>Website</h6>
                                    <TextField id="standard-basic" variant="standard"
                                        fullWidth
                                        sx={{
                                            '.MuiInputBase-input': { fontSize: '.7rem' },
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AiOutlineGlobal className='newStore_icons' />
                                                </InputAdornment>
                                            ),
                                        }}

                                    />
                                </div>
                                <div className='col-lg-6'>
                                    <h6>Mobile</h6>
                                    <Box sx={{
                                        ".css-1rv3ei8-MuiFormControl-root-MuiTextField-root": {
                                            marginTop: "0px"
                                        }
                                    }}>
                                        <MuiPhoneNumber
                                            defaultCountry={"in"}
                                            style={{ width: "100%" }}


                                            margin="normal"

                                        />
                                    </Box>
                                </div>

                            </div>
                            <div className="row newLogin_label m-2">
                                <h6>Description</h6>
                                <div className='col-lg-12'>
                                    <Box sx={{
                                        ".rdw-editor-main": {
                                            border: "1px solid #DDDDDD",
                                            paddingLeft: "2px"
                                        }

                                    }}>
                                        <Editor
                                            toolbarClassName="toolbarClassName"
                                            wrapperClassName="wrapperClassName"
                                            toolbar={
                                                { options: ['inline', 'blockType', 'fontSize'] }
                                            }
                                        />
                                    </Box>
                                </div>
                            </div>
                            <div className="row newLogin_label m-2">
                                <h6>Store Image</h6>
                                <div className='col-lg-12'>
                                    <StoreImage
                                        Title="Store_Image"
                                    // Name={"Store_Image"}
                                    // SetStore={SetStore}
                                    // value={AddStore.Store_Image}
                                    // refernce={storeImage}
                                    ></StoreImage>
                                </div>
                            </div>
                            <hr className='newStoreHr'/>
                            <div className="row center newLogin_label m-2">
                                <div className='col-lg-12 newStore_title'>
                                    <h6>Licence</h6>

                                </div>

                            </div>

                            <div className="row newLogin_label m-2">
                                <h6>Licence No</h6>
                                <div className='col-lg-12'>
                                    <TextField id="standard-basic" variant="standard"
                                        fullWidth
                                        sx={{
                                            '.MuiInputBase-input': { fontSize: '.7rem' },
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <BsFillCreditCard2BackFill className='newStore_icons'/>
                                                </InputAdornment>
                                            ),
                                        }}

                                    />
                                </div>
                            </div>
                            <div className="row newLogin_label m-2">
                                <div className='col-lg-6'>
                                    <h6>Licence Type</h6>
                                    <FormControl
                                        fullWidth
                                    // variant="filled"
                                    // className={classes.inputField}
                                    // error={Boolean(errors.Store_Type)}

                                    >
                                        <InputLabel id="demo-simple-select-label">
                                            Select Your Licence Type
                                        </InputLabel>


                                        <Select

                                        >
                                            <MenuItem value={"cbd store"} style={{ fontSize: 15 }}>CBD Store</MenuItem>
                                            <MenuItem value={"brand"} style={{ fontSize: 15 }}>Brand</MenuItem>
                                            <MenuItem value={"dispensary"} style={{ fontSize: 15 }}>Dispensary</MenuItem>
                                            <MenuItem value={"delivery"} style={{ fontSize: 15 }}>Delivery</MenuItem>
                                            <MenuItem value={"doctor"} style={{ fontSize: 15 }}>Doctor</MenuItem>
                                        </Select>

                                    </FormControl>
                                </div>
                                <div className='col-lg-6 mt-4'>
                                    <h6>Expiration</h6>
                                    <TextField id="standard-basic" variant="standard"
                                        fullWidth
                                        sx={{
                                            '.MuiInputBase-input': { fontSize: '.7rem' },
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <BsFillCreditCard2BackFill className='newStore_icons'/>
                                                </InputAdornment>
                                            ),
                                        }}

                                    />
                                </div>
                            </div>
                        


                            <div className='row newLogin_label'>
                                <div className='col-lg-12'>
                                <h6 className='licence_img_head'>Licence Image</h6>

                                    <LicenseImage
                                    // SetStore={SetStore}
                                    // value={AddStore.LicenseDoc}
                                    ></LicenseImage>

                                </div>

                            </div>
                            <div className='row  '>
                                <div className='col-lg-12 center licence_btn_row'>
                                    <Box className="newStore_btn_paper"
                                     sx={{
                                         '& > button': { m: 1 },
                                         ".MuiButton-text":{
                                            color:"white",
                                            fontSize:".7rem"
                                        }
                                         }}
                                     >
                                        <LoadingButton
                                            type="submit"
                                            // size="small"
                                            loading={true}
                                          classes = {classes.loading}

                                        >
                                            <span>SUBMIT</span>
                                        </LoadingButton>
                                    </Box>
                                </div>

                            </div>
                        </form>
                    </Paper>

                </div>

            </div>
        </>
    )
}
export default NewStoreAdd