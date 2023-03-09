import React from "react";
import OtpInput from 'react-otp-input';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios"
import { Checkmark } from 'react-checkmark'
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

export default function LoginOtp({ Otppopup, Setotppopup, email, setLoading, reset }) {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [OTP, Setotp] = React.useState()
    const [successCheck, SetSccessCheck] = React.useState(false)
    const [invalide, Setinvalid] = React.useState(false)
    const handleClose = () => {
        Setotppopup(false)
        setLoading(false)
    }
    const handleChange = (Otp) => {
        Setotp(Otp);
    }

    const onSubmit = (data) => {

        axios.post('http://34.201.114.126:8000/VendorPanel/VerifyOtpLogin/',
            { OTP, email }
        ).then((response) => {

            if (response.status===202) {
                console.log(response)
            }
            else {
                setTimeout(() => {
                    Setotppopup(false)
                    setLoading(false)
                    reset()
                    navigate("/Dashboard");
                }, 2000);
                SetSccessCheck(true)
                let date = new Date();
                date.setTime(date.getTime() + (60 * 60 * 8000))
                cookies.set('Token_access', response.data.tokens.access, { expires: date })

            }
        }).catch((error) => {
            if (error.response.status === 400) {

                Setinvalid(true)
            }

        })
    }




    return (
        <div>

            <Dialog open={Otppopup}  >
                <DialogTitle>EMAIL VERIFICATION HAS SUCCESSFUL DONE</DialogTitle>


                {
                    !successCheck ?

                        <>
                            <DialogContent>
                                <DialogContentText>
                                    <div>
                                        <span className="color">we have send the otp on backaroma@ will apply auto to the field</span>
                                    </div>
                                </DialogContentText>

                                <div className="gap display">
                                    <div className="col-12 center  ">
                                        <div className="otp_input">
                                            {
                                                invalide && <span>InValide Otp</span>
                                            }
                                            <OtpInput
                                                value={OTP}
                                                onChange={handleChange}
                                                numInputs={4}
                                                separator={<span>-</span>}
                                                shouldAutoFocus
                                                isInputNum={true}
                                                hasErrored={true}
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

                        </>
                        :
                        <>
                            <Checkmark size='76px' color="#31B665" />
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={onSubmit}>Verify</Button>
                            </DialogActions>


                        </>
                }
            </Dialog>
        </div>
    )
}