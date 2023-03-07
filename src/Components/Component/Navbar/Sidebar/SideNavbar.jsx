import React from "react"
import { BsGrid } from "react-icons/bs"
import { FaShoppingCart } from "react-icons/fa"
import { IoAnalyticsOutline } from "react-icons/io5"
import { MdOutlineGamepad } from "react-icons/md"
import { MdLocalActivity } from "react-icons/md"
import { MdTurnedIn } from "react-icons/md"
import { MdMarkunread } from "react-icons/md"
import { AiTwotoneSetting } from "react-icons/ai"
import { Link, NavLink } from "react-router-dom"

const SideNavbar = () => {


    return (
        <>
            <div id="mySidebar" className="sidebar " >
                <p className="closebtn" >×</p>
                <div className="col-10 Display mt-2 center " >
                    <div className="col-2 center color">
                        <BsGrid></BsGrid>
                    </div>
                    <div className="col-2 ">
                     <NavLink to="/Dashboard">   <p> Dashboard</p></NavLink>
                        <span className="color"> $34653465</span>
                    </div>
                </div>
                <div className=' col-12 center'>
                    <hr></hr>
                </div>
                <div className="col-10 Display mt-2 center " >
                    <div className="col-2 center Navbar_Icon">
                        <FaShoppingCart></FaShoppingCart>
                    </div>
                    <div className="col-2 ">
                       <Link to="Product"> <p> Product</p></Link>

                    </div>
                </div>
                <div className="col-10 Display mt-2 center " >
                    <div className="col-2 center Navbar_Icon ">
                        <FaShoppingCart></FaShoppingCart>
                    </div>
                    <div className="col-2 ">
                        <p> Order</p>

                    </div>
                </div>
                <div className="col-10 Display mt-2 center " >
                    <div className="col-2 center Navbar_Icon " style={{ fontSize: "20px" }}>
                        <IoAnalyticsOutline></IoAnalyticsOutline>
                    </div>
                    <div className="col-2 ">
                        <p >  Sales/Analytic</p>
                    </div>
                </div>
                <div className="col-10 Display mt-2 center " >
                    <div className="col-2 center Navbar_Icon " style={{ fontSize: "20px" }}>
                        <MdOutlineGamepad></MdOutlineGamepad>
                    </div>
                    <div className="col-2 ">
                        <p>Preset</p>
                    </div>
                </div>
                <div className="col-10 Display mt-2 center " >
                    <div className="col-2 center Navbar_Icon " style={{ fontSize: "20px" }}>
                        <MdLocalActivity></MdLocalActivity>
                    </div>
                    <div className="col-2 ">
                        <p>SpecialOffer</p>
                    </div>
                </div>
                <div className="col-10 Display mt-2 center " >
                    <div className="col-2 center Navbar_Icon " style={{ fontSize: "20px" }}>
                        <MdTurnedIn></MdTurnedIn>
                    </div>
                    <div className="col-2 ">
                        <p>Brand</p>
                    </div>
                </div>
                <div className="col-10 Display mt-2 center " >
                    <div className="col-2 center Navbar_Icon " style={{ fontSize: "20px" }}>
                        <MdMarkunread></MdMarkunread>
                    </div>
                    <div className="col-2 ">
                        <p>Message</p>
                    </div>
                </div>
                <div className="col-10 Display mt-2 center " >
                    <div className="col-2 center Navbar_Icon " style={{ fontSize: "20px" }}>
                        <AiTwotoneSetting></AiTwotoneSetting    >
                    </div>
                    <div className="col-2 ">
                        <p>Setting</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SideNavbar