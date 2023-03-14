import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { CiUser } from "react-icons/ci"
import {AiOutlineMail} from "react-icons/ai"

const ForgotPassword = () => {
    return (
        <>
            <div className="container-fluid forgot_passwrd_cont">
                <div className='  forgotPwd_main_div'>
                    <Paper sx={{ "&.MuiPaper-root ": { height: "70%" } }} elevation={3}>
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

                                />
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