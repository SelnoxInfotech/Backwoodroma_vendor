import React from 'react'
import { FaUser } from "react-icons/fa"
import { BiMobile } from "react-icons/bi"
import { AiOutlineMail } from "react-icons/ai"
import { AiFillEye } from "react-icons/ai"
import { FaBirthdayCake } from "react-icons/fa"
import { BsGenderAmbiguous } from "react-icons/bs"
import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import axios from "axios";
import Box from '@mui/material/Box';
import { FormControlLabel, FormLabel, FormControl, FormHelperText, RadioGroup, Radio, } from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker, } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Otp from "../../Component/OTP/OTP"

export default function SignUp() {
    const { register, handleSubmit, errors, control, reset } = useForm();
    const [showPassword, setShowPassword] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [popup, SetPopup] = React.useState(false)
    const [dulicate, Setduplicate] = React.useState([])
    const [email , Setemail] = React.useState()
    const [Otppopup, Setotppopup] = React.useState(true)

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const onSubmit = (data) => {

    
        axios.post('http://34.201.114.126:8000/VendorPanel/register/',
            data,
            setLoading(true),
             
        ).then((response) => {
            if (response.status === 200)
                SetPopup(true)
                Setemail(data.email)
        }).catch((error) => {
            Setduplicate(error.response.data.email)
            if (error.response.data.email) {
                Setduplicate(error.response.data)
            }
            else if (error.response.data.username) {

                Setduplicate(error.response.data)
            }
            setLoading(false)
        })
    }

    return (
        <div className='container Border pading'>



            <div className='row   '>
                <div className='col-12 '>
                    <div className='col-6   signup_margin'>
                        <span>SIGN UP</span>
                    </div>
                    <div className="col-12  signup_field"   >
                        <div className="container">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className=" row gap justify-content-center">
                                    <div className='col-12 signup_Display center'>
                                        <div className="col-sm-6 center pading">
                                            <div className='col-4 name_style'>
                                                <span className='icon'> <FaUser></FaUser></span>
                                                <span>Name</span>
                                            </div>
                                        </div>

                                        <div className='col-sm-6 '>
                                            <TextField
                                                label="FirstName"
                                                variant="filled"
                                                type="text"
                                                fullWidth
                                                // size='small'
                                                name="username"
                                                onChange={() => Setduplicate('')}
                                                inputRef={register({
                                                    required: "Name is required*.",
                                                    minLength: {
                                                        value: 2,
                                                        message: "Please enter valid name"
                                                    },
                                                    maxLength: {
                                                        value: 150,
                                                        message: "Please enter shot valid name"
                                                    }
                                                }
                                                )}
                                                helperText={errors.username?.message || dulicate?.username}
                                                error={Boolean(errors?.username) || Boolean(dulicate?.username)}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-12 signup_Display'>
                                        <div className='col-12 signup_Display center'>
                                            <div className="col-sm-6 center pading">
                                                <div className='col-4 name_style'>
                                                    <span className='icon'> <BiMobile></BiMobile></span>
                                                    <span>Mobile</span>
                                                </div>
                                            </div>

                                            <div className='col-sm-6 '>
                                                <TextField
                                                    label="Mobile"
                                                    variant="filled"
                                                    type="number"
                                                    fullWidth
                                                    // size='small'
                                                    name="mobile"
                                                    inputRef={register({
                                                        required: "mobile Number is required*.",
                                                        minLength: {
                                                            value: 10,
                                                            message: "Please enter minimum 10 digits"
                                                        },
                                                        maxLength: {
                                                            value: 15,
                                                            message: "Please enter valid mobile number"
                                                        }
                                                    })}
                                                    helperText={errors.mobile?.message}
                                                    error={Boolean(errors?.mobile)}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                    <div className='col-12 signup_Display center'>
                                        <div className="col-sm-6 center pading">
                                            <div className='col-4 name_style'>
                                                <span className='icon'> <AiOutlineMail></AiOutlineMail></span>
                                                <span>Email</span>
                                            </div>
                                        </div>

                                        <div className='col-sm-6 '>
                                            <TextField
                                                label="Email"
                                                variant="filled"
                                                type="email"
                                                fullWidth
                                                // size='small'
                                                name="email"
                                                onChange={() => Setduplicate('')}
                                                inputRef={register({
                                                    required: "email  is required*.",

                                                })}
                                                helperText={errors.email?.message || dulicate?.email}
                                                error={Boolean(errors?.email) || Boolean(dulicate?.email)}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-12 signup_Display center'>
                                        <div className="col-sm-6 center pading">
                                            <div className='col-4 name_style'>
                                                <span className='icon'> <AiFillEye></AiFillEye></span>
                                                <span>Password</span>
                                            </div>
                                        </div>

                                        <div className='col-sm-6 '>
                                            <TextField
                                                type={showPassword ? 'text' : 'password'}
                                                InputProps={{
                                                    endAdornment: <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>, style: { fontSize: 14 }
                                                }}

                                                variant="filled"
                                                fullWidth
                                                label="Password"
                                                // size='small'
                                                name="password"
                                                inputRef={register({
                                                    required: "password  is required*.",
                                                    minLength: {
                                                        value: 8,
                                                        message: 'Password must be more than 8 characters'
                                                    },
                                                    // pattern: {
                                                    //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,12}$/,
                                                    //     message:"aaaaaaaaaaaaaa"
                                                    // }
                                                 

                                                },
                                                )}
                                                helperText={errors.password?.message}
                                                error={Boolean(errors?.password)}
                                            />
                                        </div>
                                    </div>

                                    <div className='col-12 signup_Display center'>
                                        <div className="col-sm-6 center pading">
                                            <div className='col-4 name_style'>

                                                <span className='icon'> <FaBirthdayCake></FaBirthdayCake></span>
                                                <span>Date of Birth</span>

                                            </div>
                                        </div>

                                        <div className='col-sm-6 '>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                {/* 5) Date Picker */}
                                                <Controller
                                                    render={(props) => (
                                                        <DatePicker

                                                            variant="inline"
                                                            format="MM/dd/yyyy"
                                                            margin="normal"
                                                            label="Date of Birth"
                                                            // value={props.value}
                                                            onChange={props.onChange}
                                                            fullWidth
                                                            error={Boolean(errors.DateOfBirth)}
                                                            helperText={errors.DateOfBirth?.message}
                                                        />
                                                    )}
                                                    name="DateOfBirth"
                                                    defaultValue={null}
                                                    control={control}
                                                    rules={{
                                                        required: "Date of birth required.",
                                                    }}
                                                />
                                            </MuiPickersUtilsProvider>

                                        </div>

                                    </div>

                                    <div className='col-12 signup_Display '>
                                        <div className="col-sm-6 center pading">
                                            <div className='col-4 name_style'>
                                                <span className='icon'><BsGenderAmbiguous></BsGenderAmbiguous></span>
                                                <span>Gender</span>
                                            </div>
                                        </div>

                                        <div className='col-sm-6 '>
                                            <FormControl
                                                error={Boolean(errors.Gender)}
                                            >
                                                <FormLabel>Choose Your Gender</FormLabel>
                                                <RadioGroup row name="Gender">
                                                    <FormControlLabel
                                                        value="f"
                                                        control={
                                                            <Radio
                                                                inputRef={register({
                                                                    required: "Choose your gender*",
                                                                })}
                                                            />
                                                        }
                                                        label="Female"
                                                    />
                                                    <FormControlLabel
                                                        value="M"
                                                        control={
                                                            <Radio
                                                                inputRef={register({
                                                                    required: "Choose your gender*",
                                                                })}
                                                            />
                                                        }
                                                        label="Male"
                                                    />

                                                </RadioGroup>
                                                <FormHelperText>{errors.Gender?.message}</FormHelperText>
                                            </FormControl>
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
                                                <span>SIGN UP</span>
                                            </LoadingButton>
                                        </Box>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {
                popup && <Otp
                    Otppopup={Otppopup}
                    Setotppopup={Setotppopup}
                    email={email}
                    setLoading={setLoading}
                    reset={reset}
                ></Otp>
            }
            <div>
              
          </div>
        </div>
    )
}

