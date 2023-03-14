
import { BsChat } from 'react-icons/bs';
import { RiShutDownLine } from "react-icons/ri"
import { BiBell } from "react-icons/bi"
import useStyles from '../../../Style';
import * as React from 'react';
import Cookies from 'universal-cookie';
import  {Link}  from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const classes = useStyles();
    const [windowSize, setWindowSize] = React.useState() 

    const [Hamburger, SetHamburger] = React.useState("false")
    React.useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        if (windowSize >= 993) {
            console.log(windowSize >= 993)
            document.getElementById("mySidebar").style.width = "16vw";
            SetHamburger(true)
        }
        else {
            if (windowSize <= 993) {
                document.getElementById("mySidebar").style.width = "0px"
                SetHamburger(false)

            }
        }
        return () => window.removeEventListener('resize', handleResize)
    }, [windowSize])


    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
    }
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
     
    function Logout (){
        cookies.remove("Token_access")
        navigate("/");
    }



    return (
        <>
            <nav className="navbar   bg-light_navbar sticky-top  ">
                <div className='col-12 Display  '>
                    <div className='col-4'>
                        {
                            Hamburger ?

                                <div className='Display'>
                                    <Link className="navbar-brand  Display" to="/">

                                        <img src="/image/blank.webp" alt="" className="d-inline-block align-text-top Header_image" />

                                    </Link>
                                    <div className='col Grid_display'>
                                        <span>hello</span>
                                        <span>Mr. Nice Guys</span>
                                    </div>
                                </div>

                                :
                                <button className="openbtn " onClick={openNav}>☰</button>
                        }
                    </div>
                    <div className='col-8  Display  justify'>
                        <div className='col-2 Navbar_end_width'>
                            <BsChat></BsChat>
                        </div>
                        <div className='col-2 Navbar_end_width'>
                            <BiBell></BiBell>
                        </div>
                        <div className='col-2 Navbar_end_width '>
                            <RiShutDownLine className={classes.customHoverFocus} onClick={Logout}></RiShutDownLine>
                        </div>
                    </div>
                </div>
            </nav>
           
        
        </>
    )
}
export default Navbar


