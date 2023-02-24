import { TextField } from "@material-ui/core";
import React from "react";

export default function StoreAdd() {
    return (
        <div>
            <div className='container-fluid Border pading'>
                <div className='row   '>
                    <div className='col-12  '>
                        <div className='col-6   signup_margin'>
                            <span>STORE DETAILS</span>
                        </div>
                        <div className="col-12 login_width  signup_field"   >
                            <div className="container-fluid">
                                <div className=" row gap justify-content-center">
                                    <div className='col-12  signup_Display center'>
                                        <div className="col-sm-4 center pading">
                                            <div className='col-4 name_style'>
                                                <span className='icon'>x</span>
                                                <span>Store Name</span>
                                            </div>
                                        </div>

                                        <div className='col-sm-8 '>
                                            <TextField
                                                variant="filled"
                                                fullWidth
                                            ></TextField>
                                        </div>
                                    </div>
                                    <div className='col-12  signup_Display center'>
                                        <div className="col-sm-4 center pading">
                                            <div className='col-4 name_style'>
                                                <span className='icon'> </span>
                                                <span>Store Type</span>
                                            </div>
                                        </div>

                                        <div className='col-sm-8 '>
                                            <TextField
                                                variant="filled"
                                                fullWidth
                                            ></TextField>
                                        </div>
                                    </div>
                                    <div className='col-12  signup_Display '>
                                        <div className="col-sm-4 center pading">
                                            <div className='col-4 name_style'>
                                                <span className='icon'> </span>
                                                <span>Country</span>
                                            </div>
                                        </div>

                                        <div className='col-sm-2 '>
                                            <TextField
                                                variant="filled"
                                                fullWidth
                                            ></TextField>
                                        </div>
                                        <div className="col-6 signup_Display">
                                            <div className='col display name_style'>
                                                <span className='icon'> </span>
                                                <span>Country</span>
                                            </div>
                                            <div className='col-sm-2 '>
                                                <TextField
                                                    variant="filled"
                                                    fullWidth
                                                ></TextField>
                                            </div>
                                            <div className='col display name_style'>
                                                <span className='icon'>x </span>
                                                <span>Country</span>
                                            </div>
                                            <div className='col-sm-2 '>
                                                <TextField
                                                    variant="filled"
                                                    fullWidth
                                                ></TextField>
                                            </div>
                                      </div>
                                    </div>
                                    <div className='col-12  signup_Display center'>
                                        <div className="col-sm-4 center pading">
                                            <div className='col-4 name_style'>
                                                <span className='icon'> </span>
                                                <span>Address</span>
                                            </div>
                                        </div>

                                        <div className='col-sm-8 '>
                                            <TextField
                                                variant="filled"
                                                fullWidth
                                            ></TextField>
                                        </div>
                                    </div>
                                    <div className='col-12  signup_Display '>
                                        <div className="col-sm-4 center pading">
                                            <div className='col-4 name_style'>
                                                <span className='icon'> </span>
                                                <span>Country</span>
                                            </div>
                                        </div>

                                        <div className='col-sm-3 '>
                                            <TextField
                                                variant="filled"
                                                fullWidth
                                            ></TextField>
                                        </div>
                                        <div className="col-5 signup_Display">
                                            <div className='col display name_style'>
                                                <span className='icon'> </span>
                                                <span>Country</span>
                                            </div>
                                            <div className='col '>
                                                <TextField
                                                    variant="filled"
                                                    fullWidth
                                                ></TextField>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12  signup_Display center'>
                                        <div className="col-sm-4 center pading">
                                            <div className='col-4 name_style'>
                                                <span className='icon'>x</span>
                                                <span>Store Name</span>
                                            </div>
                                        </div>

                                        <div className='col-sm-8 '>
                                            <TextField
                                                variant="filled"
                                                fullWidth
                                            ></TextField>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}