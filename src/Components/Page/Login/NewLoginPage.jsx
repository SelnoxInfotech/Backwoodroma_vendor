import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { CiUser } from "react-icons/ci"
import { CiLock } from "react-icons/ci"
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import React from 'react';
import axios from "axios"
import Otp from "../../Component/OTP/Otp"
import LoginOtp from "./LoginOtp";
import { Link } from "react-router-dom";
const NewLoginPage = () => {
    const [loading, setLoading] = React.useState(false);
    const { register, handleSubmit, errors, reset } = useForm();
  
    const [popup, SetPopup] = React.useState(false)
    const [Otppopup, Setotppopup] = React.useState(true)
    const [email, Setemail] = React.useState()
  

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
          
            prompt(error)
            setLoading(false)
        })
    }
    return (
        <>
            <div className="container-fluid newLogin_container">
                {
                    popup && <LoginOtp
                        Otppopup={Otppopup}
                        Setotppopup={Setotppopup}
                        email={email}
                        setLoading={setLoading}
                        reset={reset}
                    ></LoginOtp>
                }
                <div className=' Newlogin_main_div'>
                    <Paper sx={{ "&.MuiPaper-root ": { height: "70%" } }} elevation={3}>

                        <div className="row center">
                            <div className="col-lg-12">
                                <h6 className='login_title'>Login</h6>

                            </div>

                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="row newLogin_label m-2">
                                <h6>User Name</h6>

                                <div className="col-lg-12">

                                    <TextField id="standard-basic" variant="standard" placeholder='Type User Email'
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
                                        name="email"
                                        inputRef={register({
                                            required: "Email is required*."
                                        })}
                                        helperText={errors.email?.message}
                                        error={Boolean(errors?.email)}

                                    />

                                </div>

                            </div>

                            <div className="row newLogin_label m-2">
                                <h6>Password</h6>

                                <div className="col-lg-12">

                                    <TextField id="standard-basic" variant="standard" placeholder='Type Your Password'
                                        fullWidth
                                        sx={{
                                            '.MuiInputBase-input': { fontSize: '.7rem' },


                                        }}
                                        InputProps={{
                                            // style:{fontSize:13},
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <CiLock />
                                                </InputAdornment>
                                            ),
                                        }}
                                        name="password"
                                        inputRef={register({
                                            required: "password  is required*.",

                                        })}
                                        helperText={errors.password?.message}
                                        error={Boolean(errors?.password)}
                                    />

                                </div>

                            </div>
                            <div className='row mx-2'>
                                <div className='col-lg-12 text-end newLogin_label '>
                                    <h6>Forgot Password ?</h6>

                                </div>


                            </div>
                            <div className='row mt-4'>
                                <div className='col-lg-12 center '>
                                    <Box className=" mt-4 mb-4 newLogin_btn_paper" sx={{

                                        ".MuiButton-text": {
                                            color: "white",
                                            fontSize: ".7rem"
                                        }
                                    }}>
                                        <Button
                                            type="submit"
                                        >
                                            Login
                                        </Button>
                                    </Box>

                                </div>


                            </div>
                            <div className='row'>
                                <div className='col-lg-12 center'>

                                    <Button>
                                        Sign up
                                    </Button>
                                </div>


                            </div>
                        </form>
                    </Paper>
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
        </>
    )
}
export default NewLoginPage