import React from 'react'
import { FaUser } from "react-icons/fa"
import { BiMobile } from "react-icons/bi"
import { AiOutlineMail } from "react-icons/ai"
import { AiFillEye } from "react-icons/ai"
import { FaBirthdayCake } from "react-icons/fa"
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';





export default function SignUp() {
    
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data, errors)
    }

    console.log(errors)

    return (
        <div className='container Border pading'>



            <div className='row   '>
                <div className='col-12 '>
                    <div className='col-6   signup_margin'>
                        <span>SIGN UP</span>
                    </div>
                    <div className="col-12  signup_field"   >
                        <div className="container">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className=" row gap justify-content-center">
                                    <div className='col-12 signup_Display center'>
                                        <div className="col-sm-6 center pading">
                                            <span className='icon'> <FaUser></FaUser></span>
                                            <span>Name</span>
                                        </div>
                   
                                        <div className='col-sm-6 '>
                                        <TextField
                                            label="FirstName"
                                            id="filled"
                                            variant="filled"
                                            type="text"
                                            fullWidth
                                            size='small'
                                            name="firstName"
                                            inputRef={register({
                                                required: "Name is required*.",
                                                minLength:{ 
                                                    value:2,
                                                    message:"Please enter valid name"
                                                },
                                                maxLength:{ 
                                                    value:20,
                                                    message:"Please enter shot valid name"
                                                }
                                            })}
                                            helperText={errors.firstName?.message}
                                            error={Boolean(errors?.firstName)}
                                        />
                                        </div>
                                    </div>
                                    <div className='col-12 signup_Display'>
                                    <div className='col-12 signup_Display center'>
                                        <div className="col-sm-6 center pading">
                                            <span className='icon'> <BiMobile></BiMobile></span>
                                            <span>Mobile</span>
                                        </div>
                   
                                        <div className='col-sm-6 '>
                                        <TextField
                                            label="Mobile"
                                            id="filled"
                                            variant="filled"
                                            type="number"
                                            fullWidth
                                            size='small'
                                            name="mobile"
                                            inputRef={register({
                                                required: "mobile Number is required*.",
                                                minLength:{ 
                                                    value:10,
                                                    message:"Please enter minimum 10 digits"
                                                },
                                                maxLength:{ 
                                                    value:15,
                                                    message:"Please enter valid mobile number"
                                                }
                                            })}
                                            helperText={errors.mobile?.message}
                                            error={Boolean(errors?.mobile)}
                                        />
                                        </div>
                                    </div>
                                      
                                    </div>
                                    <div className='col-12 signup_Display center'>
                                        <div className="col-sm-6 center pading">
                                            <span className='icon'> <AiOutlineMail></AiOutlineMail></span>
                                            <span>Email</span>
                                        </div>
                   
                                        <div className='col-sm-6 '>
                                        <TextField
                                            label="Email"
                                            id="filled"
                                            variant="filled"
                                            type="email"
                                            fullWidth
                                            size='small'
                                            name="email"
                                            inputRef={register({
                                                required: "email  is required*.",
                                               
                                            })}
                                            helperText={errors.email?.message}
                                            error={Boolean(errors?.email)}
                                        />
                                        </div>
                                    </div>
                                    <div className='col-12 signup_Display center'>
                                        <div className="col-sm-6 center pading">
                                            <span className='icon'> <AiOutlineMail></AiOutlineMail></span>
                                            <span>Password</span>
                                        </div>
                   
                                        <div className='col-sm-6 '>
                                        <TextField
                                            label="Password"
                                            id="filled"
                                            variant="filled"
                                            type="text"
                                            fullWidth
                                            size='small'
                                            name="password"
                                            inputRef={register({
                                                required: "password  is required*.",
                                               
                                            })}
                                            helperText={errors.password?.message}
                                            error={Boolean(errors?.password)}
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
