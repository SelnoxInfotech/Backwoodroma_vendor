import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { CiUser } from "react-icons/ci"
import { CiLock } from "react-icons/ci"
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';

const NewLoginPage = () => {
    return (
        <>
            <div className="container-fluid newLogin_container">
                <div className=' Newlogin_main_div'>
                    <Paper elevation={3}>

                        <div className="row center">
                            <div className="col-lg-12">
                                <h6 className='login_title'>Login</h6>

                            </div>

                        </div>

                        <div className="row  m-2">
                            <h8>User Name</h8>

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

                                />

                            </div>

                        </div>

                        <div className="row  m-2">
                            <h8>Password</h8>

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
                                />

                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-lg-12 text-end'>
                                
                            <Button >
                                    Forgot Password
                                </Button>
                            </div>
                               

                        </div>
                        <div className='row mt-4'>
                            <div className='col-lg-12 center '>
                            <Box className=" mt-4 mb-4 " style={{width:"90%",backgroundColor:"#70c5e1"}} sx={{".MuiButton-root":{
                                    // background:"red",
                                    // width:"100%"

                                }}}>
                            <Button
                            
                            >
                                    Login
                                </Button>
                                </Box>

                            </div>
                               

                        </div>
                    </Paper>
                </div>
            </div>
        </>
    )
}
export default NewLoginPage