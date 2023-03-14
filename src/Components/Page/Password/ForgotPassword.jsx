import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { CiUser } from "react-icons/ci"
import {AiOutlineMail} from "react-icons/ai"
import useStyles from "../../../../src/Style"
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';

const ForgotPassword = () => {
    const classes=useStyles()
    return (
        <>
            <div className="container-fluid forgot_passwrd_cont">
                <div className='  forgotPwd_main_div'>
                    <Paper 
                    className={classes.papers}
                    // sx={{
                    //      "&.MuiPaper-root ": { height: "70%" }
                         
                    //      }} 
                         elevation={3}
                         >
                        <div className='row center forgot_head'>
                            <div className='col-lg-12'>
                                <h6>Forgot Password ?</h6>
                            </div>

                        </div>
                        <div className='row center'>
                            <div className='col-lg-12 forgot_pwd'>
                                <h6>Enter the email address associated with your account.</h6>
                            </div>

                        </div>
                        <form>
                            <div className='row m-2 forgot_pwd'>
                                <h6>Email</h6>
                                <div className='col-lg-12'>
                                <TextField id="standard-basic" variant="standard" placeholder='Enter Your Email'
                                    fullWidth
                                    className={classes.textFieldCss}
                                 
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AiOutlineMail />
                                            </InputAdornment>
                                        ),
                                    }}

                                />
                                </div>

                            </div>
                            <div className='row mt-2'>
                                <div className='col-lg-12 center '>
                                    <Box 
                                    // className={"mt-4 mb-4"+`${}`}
                                    // className={"mt-4 mb-4 newLogin_btn_paper"+} 
                                    // sx={{

                                    //     ".MuiButton-text": {
                                    //         color: "white",
                                    //         fontSize: ".7rem"
                                    //     }
                                    // }}
                                    
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

                    </Paper>
                </div>
            </div>
        </>
    )
}
export default ForgotPassword