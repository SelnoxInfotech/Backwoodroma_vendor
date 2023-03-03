import { AiTwotoneEdit } from "react-icons/ai"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { CiUser } from "react-icons/ci"
import { ImUser } from "react-icons/im"
import { BiMobile } from "react-icons/bi"
import { FaBirthdayCake } from "react-icons/fa"
import { MuiPickersUtilsProvider, DatePicker, } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { FormControlLabel, FormLabel, FormControl, FormHelperText, RadioGroup, Radio, } from "@material-ui/core";
import { BsGenderAmbiguous } from "react-icons/bs"
import MuiPhoneNumber from 'material-ui-phone-number';
import { MdAssistantNavigation } from "react-icons/md"
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import styles from "../../../../src/Style"
const Profile = () => {
    
    return (
        <div className="container Border my-2 profile_cont">
            <div className="row">
                <div className="col-12 d-flex  justify-content-end my-4">

                    <span >Edit</span>
                    <AiTwotoneEdit color="#31B665" size={30} />

                </div>

            </div>
            <div className="row">
                <div className="col-md-4 profile_img d-block userProfile ">
                    <Stack spacing={0}>
                        <Avatar sx={{ width: 56, height: 56 }}><CiUser color='white' /></Avatar>
                    </Stack>
                    <h6>Upload Your Photo</h6>
                </div>
                <div className="col-md-6">
                    <div className="d-block center profile_edit">
                        <p>Profile</p>

                      
                    </div>

                </div>

            </div>
            <div className="container my-4">
                <form>
                    <div className="row my-4">
                        <div className="col-md-4">
                            <span className="icon"> <ImUser /></span>
                            <span>Name</span>

                        </div>
                        <div className="col-md-6">

                            <TextField id="filled-basic"
                                label="FirstName"
                                variant="filled"
                                type="text"
                                fullWidth />
                        </div>

                    </div>
                    <div className="row my-4">
                        <div className="col-md-4">
                            <span className="icon"><BiMobile /></span>
                            <span> Mobile No</span>
                        </div>
                        <div className="col-md-6">

                            {/* <TextField id="filled-basic"
                                label="Mobile Number"
                                variant="filled"
                                type="number"
                                fullWidth /> */}
                            <MuiPhoneNumber
                                defaultCountry={"us"}
                                style={{ width: "100%" }}
                                label="Contact  "
                                variant="filled"
                                margin="normal"
                            />
                        </div>

                    </div>
                    <div className="row my-4">
                        <div className="col-md-4">
                            <span className="icon"><MdAssistantNavigation /></span>
                            <span>Address</span>

                        </div>
                        <div className="col-md-6">

                            <TextField id="filled-basic"
                                label="Address"
                                variant="filled"
                                type="text"
                                fullWidth />

                        </div>

                    </div>
                    <div className="row  my-4">
                        <div className="col-md-4">
                            <div>
                                <span className='icon'> <FaBirthdayCake></FaBirthdayCake></span>
                                <span>Date of Birth</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker

                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    label="Date of Birth"
                                    fullWidth
                                />
                            </MuiPickersUtilsProvider>

                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="d-flex">
                                <span className='icon'><BsGenderAmbiguous></BsGenderAmbiguous></span>
                                <span>Gender</span>

                            </div>

                        </div>
                        <div className="col-md-6 center">
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Choose Your Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                  

                                >
                                    <FormControlLabel    value="female" 
                                       
                                     control={<Radio  sx={styles.radiobtn}/>} label="Female" />
                                    <FormControlLabel     value="male" control={<Radio  sx={styles.radiobtn}/>} label="Male" />

                                </RadioGroup>
                            </FormControl>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-4 center ">
                            <LoadingButton sx={styles.profileBtn}>Edit Profile</LoadingButton>
                        </div>

                    </div>
                </form>
            </div>


        </div>
    )
}
export default Profile