import React from 'react'
import { FaUser } from "react-icons/fa"
import { BiMobile } from "react-icons/bi"
import { AiOutlineMail } from "react-icons/ai"
import { AiFillEye } from "react-icons/ai"
import { FaBirthdayCake } from "react-icons/fa"
import { useForm } from "react-hook-form";
import { TextField } from '@material-ui/core';


export default function SignUp() {

    const { register, handleSubmit, errors } = useForm();

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
                                <div className="row gap">
                                    <div className='col-12 signup_Display'>
                                        <div className="col-xs-12 col-sm-6    ">
                                            <span><FaUser></FaUser></span>
                                            <span>Name</span>
                                        </div>
                                        <div className="col-xs-10 col-sm-6   ">
                                            <TextField
                                                name='fullname'
                                                id='fullname'
                                                type="text"
                                                size='small'
                                                variant="filled"
                                                // className={classes.inputfield}
                                                // className="input-field"
                                                ref={register({ required: true })}
                                            // error={Boolean(errors.fullname)}
                                            // helperText={errors?.firstname.message}
                                            />
                                            {/* <small className='form-text text-danger'> */}
                                                {/* {errors.fullname?.type === "required" && "this field is required"} */}
                                                { errors.fullname && (
                                                    <span className="error-message">This is required field</span>
                                                )}
                                            {/* </small> */}


                                            <input name="lastname" ref={register({ required: true })} />
      {errors?.lastname && 'Last name is required.'}
                                        </div>
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
                                                variant="filled"
                                                size='small'

                                                {...register("mobile", {
                                                    required: true,
                                                    minLength: 10,
                                                    maxLength: 15,

                                                })}
                                            />
                                            <small className='form-text text-danger'>
                                                {errors?.mobile === "required" && "this field is required"}
                                            </small>

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

                                            {/* <TextField
                                                type="password"
                                                ref={register}
                                                variant="filled"
                                            /> */}
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
