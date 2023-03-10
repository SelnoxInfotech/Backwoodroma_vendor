import React from "react";
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { AiOutlineMail } from "react-icons/ai"
import { AiFillEye } from "react-icons/ai"
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import axios from "axios"
import Otp from "../../Component/OTP/Otp"
import LoginOtp from "./LoginOtp";
import { Link } from "react-router-dom";


function Login() {

    const [loading, setLoading] = React.useState(false);
    const { register, handleSubmit, errors, reset } = useForm();
    const [showPassword, setShowPassword] = React.useState(false);
    const [popup, SetPopup] = React.useState(false)
    const [Otppopup, Setotppopup] = React.useState(true)
    const [email, Setemail] = React.useState()
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onSubmit = (data) => {
        axios.post('http://34.201.114.126:8000/VendorPanel/Login/',
            data,
            setLoading(true),

        ).then((response) => {
            if (response.status === 200)
                SetPopup(true)
            Setemail(data.email)
        }).catch((error) => {
            SetPopup(false)
            console.log(error)
            // if (error.response.data.email) {
            //     Setduplicate(error.response.data)
            // }
            // else if (error.response.data.username) {

            //     Setduplicate(error.response.data)
            // }
            prompt(error)
            setLoading(false)
        })
    }






    return (
        <div className='container Border pading'>     {
            popup && <LoginOtp
                Otppopup={Otppopup}
                Setotppopup={Setotppopup}
                email={email}
                setLoading={setLoading}
                reset={reset}
            ></LoginOtp>
        }
            <div className='row'>
                <div className="col-12 login_width  signup_field"   >
                    <div className="container">
                        <div className=" row gap center">
                            <div className='col-12  center '>

                                <span>Login</span>

                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='col-12'>
                                    <div className="col-12 center Display pading">
                                        <div className='col-2 name_style'>
                                            <span className='icon'> <AiOutlineMail></AiOutlineMail></span>
                                            <span>Email</span>
                                        </div>

                                        <div className='col-6 '>
                                            <TextField
                                                label="Email"
                                                id="filled"
                                                variant="filled"
                                                type="Email"
                                                fullWidth
                                                size='small'
                                                name="email"
                                                inputRef={register({
                                                    required: "Email is required*."
                                                })}
                                                helperText={errors.email?.message}
                                                error={Boolean(errors?.email)}
                                            />
                                        </div>
                                    </div>

                                    <div className='col-12 mt-2  center'>
                                        <div className="col-12 center Display  pading">
                                            <div className='col-2 name_style'>
                                                <span className='icon'> <AiFillEye></AiFillEye></span>
                                                <span>Password</span>
                                            </div>

                                        <div className='col-6 '>
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
                                                </div>
                                    <div className='col-12 center mt-5 mb-5  display' >
                                        <Box sx={{ '& > button': { m: 1 } }}>
                                            <LoadingButton
                                                type="submit"
                                                size="small"
                                                // onClick={handleClick}
                                                loading={loading}
                                                variant="outlined"

                                            >
                                                <span>Submit</span>
                                            </LoadingButton>
                                        </Box>
                                        <div>
                                            <a href="/SignUp"> <span>Create New Account</span></a>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>

                    {
                        popup && <LoginOtp
                            Otppopup={Otppopup}
                            Setotppopup={Setotppopup}
                            email={email}
                            setLoading={setLoading}
                            reset={reset}
                        ></LoginOtp>
                    }
                </div>
            </div>
        </div>
    )
}




export default Login