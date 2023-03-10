import React, { useRef } from "react";
import { TextField } from "@mui/material";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Checkmark } from 'react-checkmark'
import StoreImage from "../StoreComponent/StoreImage";
import LoadingButton from '@mui/lab/LoadingButton';
import { BsBuilding } from "react-icons/bs"
import { AiFillFlag } from "react-icons/ai"
import { IoLocationSharp } from "react-icons/io5"
import { AiOutlineGlobal } from "react-icons/ai"
import { HiDevicePhoneMobile } from "react-icons/hi2"
import { FiCopy } from "react-icons/fi"
import StoreStatus from "../StoreComponent/StoreStatus"
import { useForm, Controller } from "react-hook-form";
import { BsFillCreditCard2BackFill } from "react-icons/bs"
import States from "../StoreComponent/StoreState"
import StoreCity from "../StoreComponent/StoreCity"
import MuiPhoneNumber from 'material-ui-phone-number';
import DateFnsUtils from "@date-io/date-fns";
import { useNavigate } from "react-router-dom";
import {
    InputLabel,
    Select,
    MenuItem,
} from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker, } from "@material-ui/pickers";
import { convertToHTML } from 'draft-convert';
import { FormControl, FormHelperText, } from "@material-ui/core";
import Box from '@mui/material/Box';
import axios from "axios";
import LicenseImage from "../StoreComponent/LicenseDetail/LicenseImage"
export default function StoreAdd() {
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




    console.log(AddStore === "", errors)

    async function Store(data) {

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        const entries = Object.entries(data)

        // var promise = new Promise(function (resolve, reject) {
        //     return resolve(
                entries.map(([key, value]) => (
                    SetStore(Store => ({ ...Store, [key]: value }))

                ))
            // )
        // });
    
        console.log(AddStore)

        submitted()

        // console.log(Promise.reject());




        // promise.then(function (result) {
        //     submitted()
        //     if (result) {
        //         SetDuplicateError("")
        //     }
        //     console.log(promise, result)
        // }, err => {
        //     console.log(err); // Error: "Promise rejected"
        // });
        // SetDuplicateError("")
        // submitted()
        // console.log(promise)
    }


    // Store().then(
    //     submitted()
    // )
    function submitted() {

        const formdata = new FormData();
        formdata.append('Store_Name', AddStore.Store_Name);
        formdata.append('Store_Image', AddStore.Store_Image);
        formdata.append('City_id', AddStore.City_id);
        formdata.append('Store_Type', AddStore.Store_Type);
        formdata.append('LicenceNo', AddStore.LicenceNo);
        formdata.append('LicenseDoc', AddStore.LicenseDoc);
        formdata.append('License_Type', AddStore.License_Type);
        formdata.append('Expiration', AddStore.expires)
        formdata.append('Store_Address', AddStore.Store_Address);
        formdata.append('Stores_Website', AddStore.Stores_Website);
        formdata.append('Stores_MobileNo', AddStore.Stores_MobileNo);
        formdata.append('Status', AddStore.Status);
        formdata.append('Stores_Description', convertedContent);

        axios.post(
            'http://34.201.114.126:8000/VendorPanel/Add-Stores/',
            formdata,
            Setloading(true)
        ).then((response) => {
            setTimeout(() => {
                navigate('/Dashboard')
            }, 2500);
            SetSuccessFull(true);
            Setloading(false)
            window.scrollTo(0, 0)
        }).catch( function (error) {
            Setloading(false)
                if (error.response.data.error.LicenceNo) {
                    SetDuplicateError(prevState => ({
                        ...prevState,
                        "LicenceNo": error.response.data.error.LicenceNo[0]
                    }))

                }
                if (error.response.data.error.Stores_MobileNo) {
                    SetDuplicateError(prevState => ({
                        ...prevState,
                        "Stores_MobileNo": error.response.data.error.Stores_MobileNo[0]
                    }))
                    //  console.log(mobile)
                    // mobile.current.scrollIntoView({ behavior: 'smooth', block: 'start' })   

                    // window.scrollTo(0, mobile.current.offsetTop);
                }

            }
        )


    }




    function SelectedCountry(e) {
        setSelectCountry(e.target.value)
    }
    return (
        <div>
            <div className='container-fluid Border pading'>
                <div className='row   '>
                    <div className={'col-12  ' + (SuccessFull && "blur")}>
                        <div className='col-6   signup_margin'>
                            <span>STORE DETAILS</span>
                        </div>
                        <form onSubmit={handleSubmit(Store)}>
                            <div className="col-12 login_width  signup_field"   >
                                <div className="container-fluid">
                                    <div className=" row gap justify-content-center">
                                        <div className='col-12  signup_Display center'>
                                            <div className="col-sm-4 center pading">
                                                <div className='col-4 name_style'>
                                                    <span className='icon'><BsBuilding></BsBuilding></span>
                                                    <span>Store Name</span>
                                                </div>
                                            </div>

                                            <div className='col-sm-8 '>
                                                <TextField
                                                    name="Store_Name"
                                                    variant="filled"
                                                    type="text"
                                                    fullWidth
                                                    inputRef={register({
                                                        required: "Store Name is required*."
                                                    })}
                                                    helperText={errors.Store_Name?.message}
                                                    error={Boolean(errors?.Store_Name)}
                                                ></TextField>
                                            </div>
                                        </div>
                                        <div className='col-12  signup_Display center'>
                                            <div className="col-sm-4 center pading">
                                                <div className='col-4 name_style'>
                                                    <span className='icon'><BsBuilding></BsBuilding> </span>
                                                    <span>Store Type</span>
                                                </div>
                                            </div>

                                            <div className='col-sm-8 '>

                                                <FormControl
                                                    fullWidth
                                                    variant="filled"
                                                    // className={classes.inputField}
                                                    error={Boolean(errors.Store_Type)}
                                                >
                                                    <InputLabel id="demo-simple-select-label">
                                                        Select Your Store Type
                                                    </InputLabel>

                                                    <Controller
                                                        render={(props) => (
                                                            <Select value={props.value} onChange={props.onChange}>
                                                                <MenuItem value={"cbd store"} style={{ fontSize: 15 }}>CBD Store</MenuItem>
                                                                <MenuItem value={"brand"} style={{ fontSize: 15 }}>Brand</MenuItem>
                                                                <MenuItem value={"dispensary"} style={{ fontSize: 15 }}>Dispensary</MenuItem>
                                                                <MenuItem value={"delivery"} style={{ fontSize: 15 }}>Delivery</MenuItem>
                                                                <MenuItem value={"doctor"} style={{ fontSize: 15 }}>Doctor</MenuItem>
                                                            </Select>
                                                        )}
                                                        name="Store_Type"
                                                        control={control}
                                                        defaultValue=""
                                                        rules={{
                                                            required: "please choose your store type.",
                                                        }}
                                                    />
                                                    <FormHelperText>{errors.Store_Type?.message}</FormHelperText>
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className='col-12  signup_Display '>
                                            <div className="col-sm-4 center pading">
                                                <div className='col-4 name_style'>
                                                    <span className='icon'> <AiFillFlag></AiFillFlag></span>
                                                    <span>Country</span>
                                                </div>
                                            </div>

                                            <div className='col-sm-2 '>
                                                <FormControl
                                                    fullWidth
                                                    variant="filled"
                                                    // className={classes.inputField}
                                                    error={Boolean(errors?.Country_id)}
                                                >
                                                    <InputLabel id="demo-simple-select-label">
                                                        Select Your country
                                                    </InputLabel>

                                                    <Controller
                                                        render={(props) => (
                                                            <Select value={props.value} onChange={props.onChange} onClick={SelectedCountry} >
                                                                {
                                                                    country.map((country) => {
                                                                        return (
                                                                            <MenuItem style={{ fontSize: 15 }} key={country.id} value={country.id}>
                                                                                {country.CountryName}
                                                                            </MenuItem>
                                                                        )
                                                                    })
                                                                }
                                                            </Select>
                                                        )}
                                                        name="Country_id"
                                                        control={control}
                                                        defaultValue=""
                                                        rules={{
                                                            // required: "please choose your country.",
                                                        }}
                                                    />
                                                    <FormHelperText>{errors.Country_id?.message}</FormHelperText>
                                                </FormControl>
                                            </div>
                                            <div className="col-6 signup_Display">
                                                <div className='col display name_style'>
                                                    <span className='icon'> <IoLocationSharp>+</IoLocationSharp></span>
                                                    <span>State</span>
                                                </div>
                                                <div className='col-sm-2 '>
                                                    <States
                                                        SetStore={SetStore}
                                                        AddStore={AddStore}
                                                        selectCountry={selectCountry}
                                                    ></States>
                                                </div>
                                                <div className='col display name_style'>
                                                    <span className='icon'> <IoLocationSharp></IoLocationSharp></span>
                                                    <span>City</span>
                                                </div>
                                                <div className='col-sm-2 '>
                                                    <StoreCity
                                                        SetStore={SetStore}
                                                        AddStore={AddStore}
                                                        selectCountry={selectCountry}
                                                    ></StoreCity>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12  signup_Display center'>
                                            <div className="col-sm-4 center pading">
                                                <div className='col-4 name_style'>
                                                    <span className='icon'> <IoLocationSharp></IoLocationSharp> </span>
                                                    <span>Address</span>
                                                </div>
                                            </div>

                                            <div className='col-sm-8 '>
                                                <TextField
                                                    variant="filled"
                                                    type="text"
                                                    name="Store_Address"
                                                    fullWidth
                                                    inputRef={register({
                                                        required: "Address is required*."
                                                    })}
                                                    helperText={errors.Store_Address?.message}
                                                    error={Boolean(errors?.Store_Address)}
                                                ></TextField>
                                            </div>
                                        </div>
                                        <div className='col-12  signup_Display '>
                                            <div className="col-sm-4 center pading">
                                                <div className='col-4 name_style'>
                                                    <span className='icon'><AiOutlineGlobal></AiOutlineGlobal> </span>
                                                    <span>Website   </span>
                                                </div>
                                            </div>

                                            <div className='col-sm-3 '>
                                                <TextField
                                                    variant="filled"
                                                    type="text"
                                                    name="Stores_Website"
                                                    fullWidth
                                                    inputRef={register({
                                                        required: "Address is required*.",
                                                        pattern: {
                                                            value: new RegExp(
                                                                '^([a-zA-Z]+:\\/\\/)?' +
                                                                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
                                                                '((\\d{1,3}\\.){3}\\d{1,3}))' +
                                                                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                                                                '(\\?[;&a-z\\d%_.~+=-]*)?' +
                                                                '(\\#[-a-z\\d_]*)?$',
                                                                'i'
                                                            ),
                                                            message: "Url in not valid"
                                                        }

                                                    })}
                                                    helperText={errors.Stores_Website?.message}
                                                    error={Boolean(errors?.Stores_Website)}
                                                ></TextField>
                                            </div>
                                            <div className="col-5 signup_Display">
                                                <div className='col display name_style'>
                                                    <span className='icon'>  <HiDevicePhoneMobile></HiDevicePhoneMobile></span>
                                                    <span>Mobile</span>
                                                </div>
                                                <div className='col '>
                                                    <Controller

                                                        render={({ name, onChange, value }) => (
                                                            <MuiPhoneNumber
                                                                name={name}
                                                                value={value}
                                                                // inputRef={ref}
                                                                onChange={onChange}
                                                                id="Stores_MobileNo"
                                                                defaultCountry={"in"}
                                                                style={{ width: "100%" }}
                                                                label="Contact  "
                                                                variant="filled"
                                                                margin="normal"
                                                                error={Boolean(errors?.Stores_MobileNo || DuplicateError.Stores_MobileNo)}
                                                                helperText={errors.Stores_MobileNo?.message || DuplicateError.Stores_MobileNo}
                                                            />
                                                        )}
                                                        name="Stores_MobileNo"
                                                        control={control}
                                                        defaultValue=""
                                                        ref={mobile}
                                                        rules={
                                                            {
                                                                required: "Enter valid phone number",
                                                                minLength: {
                                                                    value: 8,
                                                                    message: "Please enter minimum 10 digits"
                                                                },
                                                                maxLength: {
                                                                    value: 15,
                                                                    message: "Please enter valid mobile number"
                                                                }
                                                            }
                                                        }

                                                    />

                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-12  signup_Display center'>
                                            <div className="col-sm-4 center pading">
                                                <div className='col-4 name_style'>
                                                    <span className='icon'><FiCopy></FiCopy></span>
                                                    <span>Description</span>
                                                </div>
                                            </div>

                                            <div className='col-sm-8 '>
                                                <div>
                                                    <div style={{ border: "1px solid black", padding: '2px', minHeight: '300px' }}>
                                                        <Editor
                                                            editorState={editorState}
                                                            onEditorStateChange={setEditorState}
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <StoreImage
                                            Title="Store_Image"
                                            Name={"Store_Image"}
                                            SetStore={SetStore}
                                            value={AddStore.Store_Image}
                                            refernce={storeImage}
                                        ></StoreImage>
                                        <hr></hr>
                                        <div className={'col-12 signup_margin '}>
                                            <div className='col-6   '>
                                                <span>LICENCE   </span>
                                            </div>
                                        </div>
                                        <div className='col-12  signup_Display center'>
                                            <div className="col-sm-4 center pading">
                                                <div className='col-4 name_style'>
                                                    <span className='icon'><BsFillCreditCard2BackFill></BsFillCreditCard2BackFill></span>
                                                    <span>License no.</span>
                                                </div>
                                            </div>

                                            <div className='col-sm-8 '>
                                                <TextField
                                                    variant="filled"
                                                    type="text "
                                                    fullWidth
                                                    name="LicenceNo"
                                                    inputRef={register({
                                                        required: "Address is required*.",
                                                        minLength: {
                                                            value: 4,
                                                            message: 'more than 4 characters'
                                                        },
                                                        maxLength: {
                                                            value: 20,
                                                            message: 'less than 20 characters'
                                                        },
                                                    })}
                                                    helperText={errors.LicenceNo?.message || DuplicateError.LicenceNo}
                                                    error={Boolean(errors?.LicenceNo || DuplicateError.LicenceNo)}
                                                ></TextField>
                                            </div>
                                        </div>

                                        <div className='col-12  signup_Display '>
                                            <div className="col-sm-4 center pading">
                                                <div className='col-4 name_style'>
                                                    <span className='icon'> <BsFillCreditCard2BackFill></BsFillCreditCard2BackFill></span>
                                                    <span>License Type</span>
                                                </div>
                                            </div>

                                            <div className='col-sm-3 '>

                                                <FormControl
                                                    variant="filled"
                                                    fullWidth
                                                    name="License_Type"
                                                    error={Boolean(errors?.License_Type)}
                                                >
                                                    <InputLabel id="demo-simple-select-label">
                                                        Select Your License Type
                                                    </InputLabel>
                                                    <Controller
                                                        render={(props) => (
                                                            <Select value={props.value} onChange={props.onChange}>
                                                                <MenuItem value="">Choose your License Type</MenuItem>
                                                                <MenuItem value={"None"} style={{ fontSize: 15 }}>None</MenuItem>
                                                                <MenuItem value={"Adult-Use Cultivation"} style={{ fontSize: 15 }}>Adult-Use Cultivation</MenuItem>
                                                                <MenuItem value={"Adult-Use Nonstorefront"} style={{ fontSize: 15 }}>Adult-Use Mfg</MenuItem>
                                                                <MenuItem value={"Adult-Use Retail"} style={{ fontSize: 15 }}>Adult-Use Retail</MenuItem>
                                                                <MenuItem value={"Distributor"} style={{ fontSize: 15 }}>Distributor</MenuItem>
                                                                <MenuItem value={"Event"} style={{ fontSize: 15 }}>Event</MenuItem>
                                                                <MenuItem value={"Medical Cultivation"} style={{ fontSize: 15 }}>Medical Cultivation</MenuItem>
                                                                <MenuItem value={"Medical Mfg"} style={{ fontSize: 15 }}>Medical Mfg</MenuItem>
                                                                <MenuItem value={"Medical Nonstorefront"} style={{ fontSize: 15 }}>Medical Nonstorefront</MenuItem>
                                                                <MenuItem value={"Medical Retail"} style={{ fontSize: 15 }}>Medical Retail</MenuItem>
                                                                <MenuItem value={"Microbusiness"} style={{ fontSize: 15 }}>Microbusiness</MenuItem>
                                                                <MenuItem value={"Testing Lab"} style={{ fontSize: 15 }}>Testing Lab</MenuItem>
                                                            </Select>
                                                        )}
                                                        name="License_Type"
                                                        control={control}
                                                        defaultValue=""
                                                        rules={{
                                                            required: "please choose your License Type.",
                                                        }}
                                                    />
                                                    <FormHelperText>{errors.License_Type?.message}</FormHelperText>
                                                </FormControl>



                                            </div>
                                            <div className="col-5 signup_Display">
                                                <div className='col display name_style'>
                                                    <span className='icon'> <BsFillCreditCard2BackFill></BsFillCreditCard2BackFill></span>
                                                    <span>Expiration</span>
                                                </div>
                                                <div className='col '>
                                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                        {/* 5) Date Picker */}
                                                        <Controller
                                                            render={(props) => (
                                                                <DatePicker

                                                                    variant="inline"
                                                                    format="MM/dd/yyyy"
                                                                    margin="normal"
                                                                    label="Expiration"
                                                                    value={props.value}
                                                                    onChange={props.onChange}
                                                                    fullWidth
                                                                />
                                                            )}
                                                            name="expires"
                                                            defaultValue={null}
                                                            control={control}

                                                        />
                                                    </MuiPickersUtilsProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 signup_Display '>


                                            <StoreStatus
                                                SetStore={SetStore}
                                            ></StoreStatus>

                                        </div>
                                        {/* <License
                                            Title="LicenseDoc"
                                            Name={"LicenseDoc"}
                                            SetStore={SetStore}
                                            value={AddStore.LicenseDoc}
                                            refernce={License_Doc}
                                        ></License> */}
                                        <LicenseImage
                                            SetStore={SetStore}
                                            value={AddStore.LicenseDoc}
                                        ></LicenseImage>

                                    </div>
                                </div>
                            </div>
                            <div className='col-12 center mt-5 mb-5 ' >
                                <Box sx={{ '& > button': { m: 1 } }}>
                                    <LoadingButton
                                        type="submit"
                                        size="small"
                                        // onClick={handleClick}
                                        loading={loading}
                                        variant="outlined"

                                    >
                                        <span>SUBMIT</span>
                                    </LoadingButton>
                                </Box>
                            </div>
                        </form>
                    </div>

                    {
                        SuccessFull && <div className="check_mark">
                            <Checkmark size="150px" color="#31B665"></Checkmark>

                        </div>
                    }
                </div>
            </div >

        </div >
    )
}