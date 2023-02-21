import React from 'react'
import { FaUser } from "react-icons/fa"
import { BiMobile } from "react-icons/bi"
import { AiOutlineMail } from "react-icons/ai"
import { AiFillEye } from "react-icons/ai"
import { FaBirthdayCake } from "react-icons/fa"
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
    inputField: {
        width: "100%",
        margin: theme.spacing(1, 0),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const { register, handleSubmit, control, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data, errors)
    }

    console.log(errors)

    return (
        <div className='container Border'>



            <div className='row   '>
                <div className='col-12 '>
                    <div className='col-6  signup_margin'>
                        <span>SIGN UP</span>
                    </div>
                    <div className="col-10  signup_field"   >
                        <div className="container">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className=" gap">
                                    <div className='col-12 signup_Display'>
                                        <div className="col-xs-12 col-sm-6    ">
                                            <span><FaUser></FaUser></span>
                                            <span>Name</span>
                                        </div>
                                        {/* <div className="  "> */}
                                        <TextField

                                            label="FirstName"
                                            id="filled"
                                            variant="filled"
                                            type="text"
                                            size='small'
                                            className={classes.inputField}
                                            name="firstName"
                                            inputRef={register({
                                                required: "First Name is required.",
                                                minLength: 5
                                            })}
                                            helperText={errors.firstName?.message}
                                            error={Boolean(errors?.firstName)}
                                        />


                                        {/* </div> */}
                                    </div>
                                    <div className='col-12 signup_Display'>
                                        <div className="col-xs-12 col-sm-6    ">
                                            <span><BiMobile></BiMobile></span>
                                            <span>Mobile no</span>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 ">
                                            <TextField
                                                name='mobile'
                                                type="number"
                                                variant="outlined"
                                                size='small'


                                            />


                                        </div>
                                    </div>
                                    <div className='col-12 signup_Display'>
                                        <div className="col-xs-12 col-sm-6    ">
                                            <span><AiOutlineMail></AiOutlineMail></span>
                                            <span>Email</span>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 ">
                                            {/* <TextField
                                            name='email'
                                                type="email"
                                                variant="filled"
                                                ref={register}
                                            /> */}
                                        </div>
                                    </div>
                                    <div className='col-12 signup_Display'>
                                        <div className="col-xs-12 col-sm-6    ">
                                            <span><AiFillEye></AiFillEye></span>
                                            <span>Password</span>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 ">

                                            {/* <TextField
                                            name='password'
                                                type="password"
                                                ref={register}
                                                variant="filled"
                                            /> */}
                                        </div>
                                    </div>
                                    <div className='col-12 signup_Display'>
                                        <div className="col-xs-12 col-sm-6    ">
                                            <span><FaBirthdayCake></FaBirthdayCake></span>
                                            <span>Date of Birth</span>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 ">

                                            <TextField
                                                type="password"

                                                variant="filled"
                                            />
                                        </div>
                                    </div>
                                    <button type='submit'>submit </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
