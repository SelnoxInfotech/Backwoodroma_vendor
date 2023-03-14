import Paper from '@mui/material/Paper';
import useStyles from "../../../../src/Style"
import TextField from '@mui/material/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { CiLock } from "react-icons/ci"
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import {MdOutlineArrowBack} from "react-icons/md"

const SetNewPassword = () => {
    const [showPassword, setShowPassword] = useState("true")
    const classes = useStyles()
    return (
        <>
            <div className="container-fluid forgot_passwrd_cont p-4">
                <div className='forgotPwd_main_div'>
                    <Paper
                        className={classes.papers}

                        elevation={3}
                    >
                        <div className='row center forgot_head'>
                            <div className='col-lg-12'>
                                <h6>Set New Password</h6>
                            </div>

                        </div>
                        <div className='row center forgot_head_sec mt-4'>
                            <div className='col-lg-12 setNewpwd'>
                                <h6>Your New Password must be different to previously used Password</h6>
                            </div>

                        </div>
                        <form>
                            <div className='row m-2'>
                                <h6>Password</h6>
                                <div className='col-lg-12'>
                                    <TextField id="standard-basic" variant="standard" placeholder='Type Your Password'
                                        fullWidth
                                        type="password"
                                        name="password"
                                        className={classes.textFieldCss}

                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <CiLock />
                                                </InputAdornment>
                                            ),
                                            endAdornment: <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"

                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }}
                                    />


                                </div>

                            </div>
                            <div className='row m-2'>
                                <h6>Confirm Password</h6>
                                <div className='col-lg-12'>
                                    <TextField id="standard-basic" variant="standard" placeholder='Confirm Password'
                                        fullWidth
                                        type="password"
                                        name="password"
                                        className={classes.textFieldCss}

                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <CiLock />
                                                </InputAdornment>
                                            ),
                                            endAdornment: <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"

                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }}
                                    />


                                </div>

                            </div>
                            <div className='row mt-4'>
                                <div className='col-lg-12 center mb-4 setNewPwdBtnDiv'>
                                    <Box
                                        className={`${classes.loadingBtnText} newLogin_btn_paper`}
                                    >
                                        <LoadingButton
                                            type="submit"

                                        >
                                            Reset Password
                                        </LoadingButton>
                                    </Box>

                                </div>


                            </div>
                        </form>
                        <div className='row center '>
                            <div className='col-lg-12 mb-2 d-flex center'>
                            <span><MdOutlineArrowBack/></span><h6 className='back_to_login'>Back to login</h6>
                            </div>

                        </div>

                    </Paper>

                </div>

            </div>
        </>
    )
}
export default SetNewPassword