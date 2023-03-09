import * as  React from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";
import { IoBagCheckSharp } from "react-icons/io5"
import { RiArrowRightSLine } from 'react-icons/ri';
export default function OrderDropDown() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [Arrow, SetArrow] = React.useState('')

    function toggleAnswer1() {
        $('#OrderDropOwn').slideToggle();
        $('.dropdown').addClass("Togglebar_Arrow")
        if (Arrow === "") {
            SetArrow("Togglebar_Arrow")
            // $('#answer1').slideToggle();
        }
        else {
            SetArrow('')
        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
        // $('#answer1').slideToggle();
        $('#OrderDropOwn').hide();
    }, [])





    return (
        <div onClick={toggleAnswer1} >

            <div className='col-12  Display '>
                <div className=' col-8 side_bar_option '>
                    <span className='side_penal_link'>Order</span>
                </div>
                <div className='col-2'>
                    <span className={Arrow}><RiArrowRightSLine ></RiArrowRightSLine></span>
                </div>
            </div>
            <div className=" col-12 box ">


                <div className=''>
                    <ul className='drop_down  ' id="OrderDropOwn" >
                        <div className="line">

                            <Link to="/AllOrder"
                                className=''
                            > <li className='submenu '>

                                    <span className='link_Name'>All Order </span></li></Link>
                            <Link to="/TopSellingProduct"
                                className=''
                            >  <li className='submenu'><span className='link_Name'>Recent Order</span></li></Link>
                            <Link to="/OrderList"
                                className=''
                            > <li className='submenu'><span className='link_Name'>FullFill Order</span></li></Link>
                            <Link to="/"
                                className=''
                            > <li className='submenu'><span className='link_Name'>Pending</span></li></Link>
                            <Link to="/"
                                className=''
                            > <li className='submenu'><span className='link_Name'>Cencell Order</span></li></Link>
                            <Link to="/"
                                className=''
                            > <li className='submenu'><span className='link_Name'>Shipping Order</span></li></Link>
                        </div>

                    </ul>
                </div>
            </div>

        </div>
    )
}