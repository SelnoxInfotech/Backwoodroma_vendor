import React from 'react'
import { FaUser } from "react-icons/fa"
import { BiMobile } from "react-icons/bi"
import { AiOutlineMail } from "react-icons/ai"
import { AiFillEye } from "react-icons/ai"
import { FaBirthdayCake } from "react-icons/fa"
import { BsGenderAmbiguous } from "react-icons/bs"
import { useForm, Controller} from "react-hook-form";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import {
    FormControlLabel,
    FormLabel,
    FormControl,
    FormHelperText,
    RadioGroup,
    Radio,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function SignUp() {
    
    const { register, handleSubmit, errors, control } = useForm();
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onSubmit = (data) => {
        console.log(data.Date, errors)
    }

    console.log(errors)




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
                                            id="filled"
                                            variant="filled"
                                            type="text"
                                            fullWidth
                                            size='small'
                                            name="firstName"
                                            inputRef={register({
                                                required: "Name is required*.",
                                                minLength:{ 
                                                    value:2,
                                                    message:"Please enter valid name"
                                                },
                                                maxLength:{ 
                                                    value:20,
                                                    message:"Please enter shot valid name"
                                                }
                                            })}
                                            helperText={errors.firstName?.message}
                                            error={Boolean(errors?.firstName)}
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
                                            id="filled"
                                            variant="filled"
                                            type="number"
                                            fullWidth
                                            size='small'
                                            name="mobile"
                                            inputRef={register({
                                                required: "mobile Number is required*.",
                                                minLength:{ 
                                                    value:10,
                                                    message:"Please enter minimum 10 digits"
                                                },
                                                maxLength:{ 
                                                    value:15,
                                                    message:"Please enter valid mobile number"
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
                                            id="filled"
                                            variant="filled"
                                            type="email"
                                            fullWidth
                                            size='small'
                                            name="email"
                                            inputRef={register({
                                                required: "email  is required*.",
                                               
                                            })}
                                            helperText={errors.email?.message}
                                            error={Boolean(errors?.email)}
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
                                                            onMouseDown={handleMouseDownPassword}
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>, style: { fontSize: 14 }
                                                }}
                                                
                                            variant="filled"
                                                fullWidth
                                                label="Password"
                                            size='small'
                                            name="password"
                                            inputRef={register({
                                                required: "password  is required*.",
                                               
                                            })}
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
                                                        <KeyboardDatePicker
                                                            disableToolbar
                                                            variant="inline"
                                                            format="MM/dd/yyyy"
                                                            margin="normal"
                                                            label="Date of Birth"
                                                            // value={props.value}
                                                            onChange={props.onChange}
                                                            fullWidth
                                                            error={Boolean(errors.Date)}
                                                            helperText={errors.Date?.message}
                                                        />
                                                    )}
                                                    name="Date"
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
                                                error={Boolean(errors.gender)}
                                            >
                                                <FormLabel>Choose Your Gender</FormLabel>
                                                <RadioGroup row name="gender">
                                                    <FormControlLabel
                                                        value="female"
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
                                                        value="male"
                                                        control={
                                                            <Radio
                                                                inputRef={register({
                                                                    required: "Choose your gender*",
                                                                })}
                                                            />
                                                        }
                                                        label="Male"
                                                    />
                                                    <FormControlLabel
                                                        value="other"
                                                        control={
                                                            <Radio
                                                                inputRef={register({
                                                                    required: "Choose your gender*",
                                                                })}
                                                            />
                                                        }
                                                        label="Other"
                                                    />
                                                </RadioGroup>
                                                <FormHelperText>{errors.gender?.message}</FormHelperText>
                                            </FormControl>
                                        </div>

                                    </div>
                                    <div className='col-12 center'>
                                        <button className='btn ' type='submit'>submit </button>
                                   </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

