import React from "react"
const SideNavbar = () => {


    const [windowSize, setWindowSize] = React.useState()
    React.useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        if (windowSize >= 993) {
            console.log(windowSize >= 993)
            // document.getElementById("mySidebar").style.width = "250px";
            // document.getElementById("main").style.marginLeft = "250px";

        }
        else {
            if (windowSize <= 993) {
                // document.getElementById("mySidebar").style.width = "0px"

            }
        }
        return () => window.removeEventListener('resize', handleResize)
    }, [windowSize])




    return (
        <>

            {/* <div className="container">
                <div className="row"> */}

                    <div className='col-2 '>
                        <div id="mySidebar" className="sidebar " >
                            <p className="closebtn" >×</p>
                            <a href="/">About</a>
                            <a href="/">Services</a>
                            <a href="/">Clients</a>
                            <a href="/">Contact</a>

                        </div>


                    {/* </div>

                </div> */}
                
</div>
        </>
    )
}
export default SideNavbar