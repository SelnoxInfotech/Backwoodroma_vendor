
import { BsChat } from 'react-icons/bs';
import { RiShutDownLine } from "react-icons/ri"
import { BiBell } from "react-icons/bi"
import { CiUser } from "react-icons/ci"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
    const [windowSize, setWindowSize] = React.useState()
    React.useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        if (windowSize >= 993) {
            console.log(windowSize >= 993)
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }
        else{
            if (windowSize <= 993) {
                document.getElementById("mySidebar").style.width = "0px"
                document.getElementById("main").style.marginLeft = "0px";
            }
        }
        return () => window.removeEventListener('resize', handleResize)
    }, [windowSize])

//     React.useEffect(()=>{
//         if (windowSize >= 993) {
//         console.log(windowSize >= 993)
//         document.getElementById("mySidebar").style.width = "0px";
//     }
//     if (windowSize <= 993) {
//         // console.log(windowSize <=993)
//         // document.getElementById("mySidebar").style.width = "0px";
//     }
// },[windowSize])






function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }

    return (
        <>

            <nav className="navbar   bg-light_navbar sticky-top">
                <div id="mySidebar" className="sidebar" >
                    <p className="closebtn" >×</p>
                    <a href="/">About</a>
                    <a href="/">Services</a>
                    <a href="/">Clients</a>
                    <a href="/">Contact</a>
                </div>

                <div id="main">
                    <button className="openbtn " onClick={openNav}>☰</button>
                </div>
            </nav>




        </>
    )
}
export default Navbar