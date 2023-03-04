
import React from 'react';
// import Routes from "../Routes/Routing/Routing";
import Sidebar from "../Components/Component/Navbar/Sidebar/SideNavbar";
import Navbar from '../Components/Component/Navbar/Navbar';
import TopCard from '../Components/Component/CommenCard/TopCard';
import { Outlet } from 'react-router-dom';

function Layout(props) {
    return (
        <div >
            <Navbar />
            <div >
                <div className='container-fluid'>
                    <div className='row' >
                        <div className='col-12  ' style={{ display: "flex" }}>
                            <div className='col-2  Layout_Sider'>
                                <Sidebar />
                            </div>
                            <div className=' col-12  col-lg-10 top   ' >
                                <div className='col-12 border_shadow '>
                                    <TopCard></TopCard>
                                </div>
                                <div className='col-12'>
                                    <Outlet />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
