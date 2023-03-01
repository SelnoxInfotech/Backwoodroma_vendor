
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
                        <div className="col-6">
                            <button className="navbar-toggler pull-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                                <div style={{display:"flex",gap:"10px"}}>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar><CiUser /></Avatar>
                                    </Stack>
                                    <p>Hello, Mr</p>
                                    <p>My Admin Panel</p>

                                </div>

                            </div>
                        </div>


                        <div className="col-6 " style={{ display: "flex ", justifyContent: "end", gap: "50px" }}>


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