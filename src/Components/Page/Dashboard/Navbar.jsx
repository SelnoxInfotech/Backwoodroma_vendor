
import { BsChat } from 'react-icons/bs';
import { RiShutDownLine } from "react-icons/ri"
import { BiBell } from "react-icons/bi"
import { CiUser } from "react-icons/ci"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-inverse navbar-expand-lg navbar-light vendor_navbar sticky-top " >
                <div className="container-fluid ">
                    {/* main row */}
                    <div className="row w-100 ">
                        <div className="col">
                            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                {/* <ul className="navbar-nav me-auto mb-2 ml-4">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>


                        </ul> */}
                                <div className="navbar-nav   col-2 d-flex justify-content-around">
                                    <Stack direction="row" spacing={0}>
                                        <Avatar sx={{bgcolor:"#FFFFFF"}}><CiUser color='#AEAEAE'/></Avatar>
                                    </Stack>
                                   

                                </div>
                                <div className='col-4 vendor_head '>
                                <h7>Hello, Mr</h7>
                                    <h5>My Nice Guys</h5>
                                </div>

                            </div>
                        </div>


                        <div className="col-6 my-auto" style={{ display: "flex ", justifyContent: "end", gap: "50px" }}>


                            <BsChat size={30} style={{ color: "#FFFFFF" }}></BsChat>
                            <RiShutDownLine size={30} style={{ color: "#FFFFFF" }}></RiShutDownLine>
                            <BiBell size={30} style={{ color: "#FFFFFF" }}></BiBell>
                        </div>

                    </div>
                    {/* main row */}




                </div>
            </nav>

        </>
    )
}
export default Navbar