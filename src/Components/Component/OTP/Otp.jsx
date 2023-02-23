import React from "react";
import OtpInput from 'react-otp-input';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios"


export default function Otppopup({Otppopup,Setotppopup ,email,setLoading ,reset }) {

    const [OTP, Setotp] = React.useState()

    const handleClose = () => {
        Setotppopup(false)
        setLoading(false)
    }

    const handleChange = (Otp) => {
        Setotp(Otp);
    }


    const onSubmit = (data) => {

        axios.post('http://34.201.114.126:8000/VendorPanel/OTPverificationForRegisterAPI/',
        {OTP,email}
        ).then((response) => {
            Setotppopup(false)
            setLoading(false)
            reset()
        })
    }




    return (
        <div>
           
            <Dialog open={Otppopup}  >
                <DialogTitle>EMAIL VERIFICATION HAS SUCCESSFUL DONE</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div>
                            <span className="color">we have send the otp on backaroma@ will apply auto to the field</span>
                        </div>
                    </DialogContentText>

            <div className="gap display">
            <div className="col-12 center  ">
                        <div className="otp_input">
                            <OtpInput
                                value={OTP}
                                onChange={handleChange}
                                numInputs={4}
                                separator={<span>-</span>}
                                shouldAutoFocus
                                isInputNum={true}
                            />
                        </div>


                    </div>


                    <div className="col-12 center ">
                        <span>If you don't resend a code <span>Resend</span></span>
                    </div>


            </div>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={onSubmit}>Verify</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}