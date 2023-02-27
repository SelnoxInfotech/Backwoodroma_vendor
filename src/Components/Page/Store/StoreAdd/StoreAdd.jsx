import { TextField } from "@mui/material";
import React from "react";
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
import {
    InputLabel,
    Select,
    MenuItem,
} from "@material-ui/core";
import Cookies from 'universal-cookie';
import { convertToHTML } from 'draft-convert';
import { FormControl, FormHelperText, } from "@material-ui/core";
import Box from '@mui/material/Box';
import axios from "axios";
import { Add } from "@mui/icons-material";
export default function StoreAdd() {
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const { register, handleSubmit, errors, control, reset } = useForm();
    const [loading, Setloading] = React.useState(false)
    const [SuccessFull, SetSuccessFull] = React.useState(false)
    const [country, setCountry] = React.useState([])
    const [selectCountry, setSelectCountry] = React.useState()
    const [convertedContent, setConvertedContent] = React.useState(null);
    const [AddStore, SetStore] = React.useState({
        Store_Name: "",
        city_id: '',
        Store_Type: "",
        LicenceNo: "",
        Store_Address: "",
        Stores_Website: "",
        Stores_MobileNo: "",
        Status: "Active",
        Country_id: "",
        State_id: "",
        City_id: "",
        License_Type: "None",
        Stores_Website: "",
        Store_Image:""
        // expires : new Date().toISOString().slice(0, 16),

    });



    const [editorState, setEditorState] = React.useState(() =>
        EditorState.createEmpty()
    );


    React.useEffect(() => {
        let html = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(html);
    }, [editorState]);


    React.useEffect(() => {
        axios("http://34.201.114.126:8000/AdminPanel/Get-Country", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {

            setCountry(response.data)
            // setCountry_id(response.data[0].id)

        })
    }, [token_data])






    function Store(data) {
        console.log(data)
        const entries = Object.entries(data)
        entries.map(([key, value]) => (
            SetStore(prevState => ({
                ...prevState,
                [key]: value
            }))

        ))

    }
    console.log( AddStore)
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
                                                    error={Boolean(errors.Country_id)}
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
                                                            required: "please choose your country.",
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
                                                        name="Stores_MobileNo"
                                                        control={control}
                                                        defaultValue=""
                                                        rules={{
                                                            required: "Enter valid phone number",
                                                        }}
                                                        render={({ name, onChange, value }) => (
                                                            <MuiPhoneNumber
                                                                name={name}
                                                                value={value}

                                                                onChange={onChange}
                                                                id="contactPhoneNumber"
                                                                defaultCountry={"in"}
                                                                style={{ width: "100%" }}
                                                                label="Contact  "
                                                                variant="filled"
                                                                margin="normal"
                                                                error={Boolean(errors?.Stores_MobileNo)}
                                                                helperText={errors.Stores_MobileNo?.message}
                                                            />
                                                        )}
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
                                                {/* <TextField
                                                variant="filled"
                                                fullWidth
                                            ></TextField> */}
                                            </div>
                                        </div>
                                        <StoreImage
                                        name="Store_Image"
                                        SetStore={SetStore}
                                        value={AddStore.Store_Image}
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
                                                    type="number "
                                                    fullWidth
                                                    name="LicenceNo"
                                                    inputRef={register({
                                                        required: "LicenceNo is required*."
                                                    })}
                                                    helperText={errors.LicenceNo?.message}
                                                    error={Boolean(errors?.LicenceNo)}
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
                                                <TextField
                                                    variant="filled"
                                                    type="number "
                                                    fullWidth
                                                    name="License_Type"
                                                    inputRef={register({
                                                        required: "LicenceNo is required*."
                                                    })}
                                                    helperText={errors.License_Type?.message}
                                                    error={Boolean(errors?.License_Type)}
                                                ></TextField>
                                            </div>
                                            <div className="col-5 signup_Display">
                                                <div className='col display name_style'>
                                                    <span className='icon'> <BsFillCreditCard2BackFill></BsFillCreditCard2BackFill></span>
                                                    <span>Expiration</span>
                                                </div>
                                                <div className='col '>
                                                    <TextField

                                                    ></TextField>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 signup_Display '>


                                            <StoreStatus></StoreStatus>

                                        </div>
                                        <StoreImage></StoreImage>

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