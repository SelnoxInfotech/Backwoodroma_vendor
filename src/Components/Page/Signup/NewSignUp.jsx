import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { CiUser } from "react-icons/ci"
import { CiLock } from "react-icons/ci"
import { BiMobile } from "react-icons/bi"
import { MuiPickersUtilsProvider, DatePicker, } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import MuiPhoneNumber from 'material-ui-phone-number';
import { FaBirthdayCake } from "react-icons/fa"
import { FormControlLabel, FormLabel, FormControl, FormHelperText, RadioGroup, Radio, } from "@material-ui/core";
import { BsGenderAmbiguous } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"

const NewSignUp = () => {
    return (
        <>
          <div className="container-fluid newLogin_container">
                <div className=' Newlogin_main_div'>
                    <Paper sx={{ "&.MuiPaper-root ": { height: "70%" } }} elevation={3}>

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

                                />

                            </div>

                        </div>

                        <div className="row newLogin_label m-2">
                            <h6>Mobile</h6>

                            <div className="col-lg-12">
                            <MuiPhoneNumber
                                    defaultCountry={"in"}
                                    style={{ width: "100%" }}
                                  
                                
                                    margin="normal"
                                    // InputProps={{
                                    //     startAdornment: (
                                    //         <InputAdornment position="start">
                                    //             <BiMobile className='newSignup_icon'/>
                                    //         </InputAdornment>
                                    //     ),
                                    // }}
                                />


                            </div>

                        </div>
                        <div className="row newLogin_label m-2">
                            <h6>Email</h6>

                            <div className="col-lg-12">

                                <TextField id="standard-basic" variant="standard" placeholder='Type Your Email'
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
                                />

                            </div>

                        </div>
                        <div className="row newLogin_label m-2">
                            <h6>Date Of Birth</h6>

                            <div className="col-lg-12">

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DatePicker

                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                      
                                        fullWidth
                                        InputProps={{
                                            // style:{fontSize:13},
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <FaBirthdayCake  className='newSignup_icon' />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </MuiPickersUtilsProvider>

                            </div>

                        </div>
                        <div className='row newLogin_label m-2'>
                            <h6>Gender</h6>
                            <div className='col-lg-12'>
                            <FormControl>
                                    {/* <FormLabel  id="demo-row-radio-buttons-group-label">Choose Your Gender</FormLabel> */}
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"


                                    >
                                        <Box sx={{
                                            ".MuiSvgIcon-root": {
                                                color: "#31B665",
                                                fontSize:"1rem"
                                            },
                                            ".MuiTypography-body1":{
                                                fontSize:".7rem"
                                            }
                                        }}>
                                            <FormControlLabel value="female"

                                                control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        </Box>

                                    </RadioGroup>
                                </FormControl>
                            </div>

                        </div>
                      
                        <div className='row mt-2'>
                            <div className='col-lg-12 center '>
                                <Box className=" mt-4 mb-4 newLogin_btn_paper" sx={{
                                   
                                    ".MuiButton-text":{
                                        color:"white",
                                        fontSize:".7rem"
                                    }
                                }}>
                                    <Button

                                    >
                                          Sign up
                                    </Button>
                                </Box>

                            </div>


                        </div>
                        <div className='row'>
                        <div className='col-lg-12  newSingup_label center mb-4 '>
                               <h5>Already Have an Account</h5> <span className='signup_Span'>Login</span>
                            </div>

                        </div>
                      
                    </Paper>
                </div>
            </div>
        </>
    )
}
export default NewSignUp