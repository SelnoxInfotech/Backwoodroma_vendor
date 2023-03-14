import React from 'react'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { CiUser } from "react-icons/ci"
import { CiLock } from "react-icons/ci"
import dayjs from 'dayjs';
import { MuiPickersUtilsProvider, DatePicker, } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Box from '@mui/material/Box';
import MuiPhoneNumber from 'material-ui-phone-number';
import { FaBirthdayCake } from "react-icons/fa"
import { FormControlLabel, FormControl, FormHelperText, RadioGroup, Radio, } from "@material-ui/core";
import { AiOutlineMail } from "react-icons/ai"
import { useForm, Controller } from "react-hook-form";
import LoadingButton from '@mui/lab/LoadingButton';
import Otp from "../../Component/OTP/Otp"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from "axios";
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const NewSignUp = () => {

    const { register, handleSubmit, errors, control, reset } = useForm();
    const [showPassword, setShowPassword] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [popup, SetPopup] = React.useState(false)
    const [dulicate, Setduplicate] = React.useState([])
    const [email, Setemail] = React.useState()
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
        <>
            <div className="container-fluid newLogin_container">
                <div className=' Newlogin_main_div'>
                    <Paper sx={{ "&.MuiPaper-root ": { height: "70%" } }} elevation={3}>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row center">
                                <div className="col-lg-12">
                                    <h6 className='login_title'>SignUp</h6>

                                </div>

                            </div>

                            <div className="row newLogin_label m-2">
                                <h6>User Name</h6>

                                <div className="col-lg-12">

                                    <TextField id="standard-basic" variant="standard" placeholder='Type User Name'
                                        fullWidth
                                        sx={{
                                            '.MuiInputBase-input': { fontSize: '.7rem' },
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <CiUser />
                                                </InputAdornment>
                                            ),
                                        }}
                                        type="text"
                                        name="username"
                                        onChange={() => Setduplicate('')}
                                        inputRef={register({
                                            required: "username is required*.",
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

                            <div className="row newLogin_label m-2">
                                <h6>Mobile</h6>

                                <div className="col-lg-12">
                                    <Box sx={{
                                        ".css-1rv3ei8-MuiFormControl-root-MuiTextField-root": {
                                            marginTop: "0px"
                                        }
                                    }}>
                                        <Controller

                                            render={({ name, onChange, value }) => (
                                                <MuiPhoneNumber
                                                    name={name}
                                                    value={value}
                                                    size="small"
                                                    onChange={onChange}
                                                    id="Mobile"
                                                    defaultCountry={"in"}
                                                    style={{ width: "100%" }}
                                                    

                                                    margin="normal"
                                                    error={Boolean(errors?.Mobile)}
                                                    helperText={errors.Mobile?.message}
                                                />
                                            )}
                                            name="Mobile"
                                            control={control}
                                            defaultValue=""
                                            fullWidth
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
                                    </Box>

                                </div>

                            </div>
                            <div className="row newLogin_label m-2">
                                <h6>Email</h6>

                                <div className="col-lg-12">

                                    <TextField id="standard-basic" variant="standard" placeholder='Type Your Email'
                                        fullWidth
                                        type="email"
                                        sx={{
                                            '.MuiInputBase-input': { fontSize: '.7rem' },
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AiOutlineMail />
                                                </InputAdornment>
                                            ),
                                        }}
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
                            <div className="row newLogin_label m-2">
                                <h6>Password</h6>

                                <div className="col-lg-12">

                                    <TextField id="standard-basic" variant="standard" placeholder='Type Your Password'
                                        fullWidth
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        sx={{
                                            '.MuiInputBase-input': { fontSize: '.7rem' },


                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <CiLock />
                                                </InputAdornment>
                                            ),
                                            endAdornment: <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }}


                                        inputRef={register({
                                            required: "password  is required*.",
                                            minLength: {
                                                value: 8,
                                                message: 'Password must be more than 8 characters'
                                            },
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,12}$/,
                                                message: "aaaaaaaaaaaaaa"
                                            }


                                        },
                                        )}
                                        helperText={errors.password?.message}
                                        error={Boolean(errors?.password)}
                                    />

                                </div>

                            </div>
                            <div className="row newLogin_label m-2">
                                <h6>Date Of Birth</h6>

                                <div className="col-lg-12">
                                    <Box
                                        sx={{
                                            ".MuiFormControl-marginNormal": {
                                                marginTop: "0px"
                                            }

                                        }}>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                            <Controller
                                                render={(props) => (
                                                    <DatePicker
                                                    defaultValue={dayjs(new Date())}
                                                    maxDate={new Date()} 
                                                    inputVariant="outlined"
                                                        variant="standard"
                                                        format="MM/dd/yyyy"
                                                        margin="normal"
                                                        fullWidth
                                                        value={props.value}
                                                        onChange={props.onChange}
                                                        InputProps={{
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <FaBirthdayCake className='newSignup_icon' />
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                        error={Boolean(errors.DateOfBirth)}
                                                        helperText={errors.DateOfBirth?.message}
                                                    />
                                                )}
                                                name="DateOfBirth"
                                                
                                                control={control}
                                                rules={{
                                                    required: "Date of birth required.",
                                                }}

                                            />
                                        </MuiPickersUtilsProvider>
                                    </Box>
                                </div>

                            </div>
                            <div className='row newLogin_label m-2'>
                                <h6>Gender</h6>
                                <div className='col-lg-12'>
                                    <FormControl

                                        error={Boolean(errors.Gender)}
                                    >
                                        {/* <FormLabel  id="demo-row-radio-buttons-group-label">Choose Your Gender</FormLabel> */}
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="Gender"


                                        >
                                            <Box sx={{
                                                ".MuiSvgIcon-root": {
                                                    color: "#31B665",
                                                    fontSize: "1rem"
                                                },
                                                ".MuiTypography-body1": {
                                                    fontSize: ".7rem"
                                                }
                                            }}>
                                                <FormControlLabel value="F"
                                                    control={
                                                        <Radio
                                                            inputRef={register({
                                                                required: "Choose your gender*",
                                                            })}

                                                        />
                                                    } label="Female" />
                                                <FormControlLabel value="M"
                                                    control={
                                                        <Radio
                                                            inputRef={register({
                                                                required: "Choose your gender*",
                                                            })}
                                                        />
                                                    }
                                                    label="Male" />
                                            </Box>

                                        </RadioGroup>
                                        <FormHelperText>{errors.Gender?.message}</FormHelperText>
                                    </FormControl>
                                </div>

                            </div>

                            <div className='row mt-2'>
                                <div className='col-lg-12 center '>
                                    <Box className=" mt-4 mb-4 newLogin_btn_paper" sx={{

                                        ".MuiButton-text": {
                                            color: "white",
                                            fontSize: ".7rem"
                                        }
                                    }}>
                                        <LoadingButton
                                            type="submit"
                                            loading={loading}
                                        >
                                            Sign up
                                        </LoadingButton>
                                    </Box>

                                </div>


                            </div>
                        </form>
                        <div className='row'>
                            <div className='col-lg-12  newSingup_label center mb-4 '>
                                <h5>Already Have an Account</h5> 
                                
                               <Link className='Link_' to="/">
                               <span className='signup_Span'>Login</span>
                               </Link>

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
                    </Paper>
                </div>
            </div>
        </>
    )
}
export default NewSignUp