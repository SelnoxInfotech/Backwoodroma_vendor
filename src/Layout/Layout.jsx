
import React from 'react';
// import Routes from "../Routes/Routing/Routing";
import Sidebar from "../Components/Component/Navbar/Sidebar/SideNavbar";
import Navbar from '../Components/Component/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function Layout(props) {
    return (
        <div>
            <Navbar />
            <div >
                <div className='container-fluid'>
                    <div className='row' >
                        <div className='col-12  ' style={{ display: "flex" }}>
                            <div className='col-2'>
                                <Sidebar />
                            </div>

                            <div className='col-10' >
                                <Outlet />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
