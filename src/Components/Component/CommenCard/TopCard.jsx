import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Slider from "react-slick";


export default function TopCard() {
    var settings = {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                autoplay: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
      
                pauseOnHover:true,
              }
            },
            {
                breakpoint: 1042,
                settings: {
                  slidesToShow: 2,
        
                }
              },
              {
                breakpoint: 696 ,
                settings: {
                  slidesToShow: 2,
        
                }
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
        
                }
              }
        ]
    };

    return (
        // <div className="container-fluid">
        //     <div className="row ">
        //         <div className="col-12  Display border_shadow  ">
        //             <div className=" col-4 commen_card ">
        //                 <div className="Top_Card">
        //                     <div className="col-12 Display Centering ">
        //                         <div className="col-2 ">
        //                             <CircularProgress variant="determinate" value={75} color="secondary" />
        //                         </div>
        //                         <div className="col-10">
        //                             <span>Item Shipped Today 5335</span>
        //                             <span>Yesterday was 2423</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className=" col-4  commen_card">

        //                 <div className="Top_Card">
        //                     <div className="col-12 Display Centering ">
        //                         <div className="col-2 ">
        //                             <CircularProgress variant="determinate" value={75} color="secondary" />
        //                         </div>
        //                         <div className="col-10">
        //                             <span>Item Shipped Today 5335</span>
        //                             <span>Yesterday was 2423</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className=" col-4  commen_card ">

        //             <div className="Top_Card">
        //                     <div className="col-12 Display Centering ">
        //                         <div className="col-2 ">
        //                             <CircularProgress variant="determinate" value={75} color="secondary" />
        //                         </div>
        //                         <div className="col-10">
        //                             <span>Item Shipped Today 5335</span>
        //                             <span>Yesterday was 2423</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="  col-4  ">

        //             <div className="">
        //                     <div className="col-12 Display Centering ">
        //                         <div className="col-2 ">
        //                             <CircularProgress variant="determinate" value={75} color="secondary" />
        //                         </div>
        //                         <div className="col-10">
        //                             <span>Item Shipped Today 5335</span>
        //                             <span>Yesterday was 2423</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
        // </div>


            <Slider {...settings}>

  
        <div className=" col commen_card  Top_Card" style={{display:"flex" , alignItems:"center"}}>
                    <div className="col Display Centering  center ">
                        <div className="col-4 circule">
                            <div className=" ">
                                <CircularProgress variant="determinate" value={75} color="success" />
                            </div>
                        </div>
                        <div className="col-8 circule">
                            <p>New Order Today 32423</p>
                            <span className="card_text">Yesterday was 2423</span>
                        </div>
                    </div>
                </div>
                <div className=" col commen_card  Top_Card" style={{display:"flex" , alignItems:"center"}}>
                    <div className="col Display Centering center">
                        <div className="col-4 circule">
                            <div className="">
                                <CircularProgress variant="determinate" value={75} color="primary" />
                            </div>
                        </div>
                        <div className="col-8 circule">
                            <p>New Order Today 32423</p>
                            <span className="card_text">Yesterday was 2423</span>
                        </div>
                    </div>
                </div>
                <div className=" col commen_card  Top_Card" style={{display:"flex" , alignItems:"center"}}>
                    <div className="col Display Centering  center">
                        <div className="col-4 circule">
                            <div className="">
                                <CircularProgress variant="determinate" value={75} color="success" />
                            </div>
                        </div>
                        <div className="col-8 circule">
                        <p>New Order Today 32423</p>
                            <span className="card_text">Yesterday was 2423</span>
                        </div>
                    </div>
                </div>
                <div className=" col commen_card  Top_Card_last" style={{display:"flex" , alignItems:"center"}}>
                    <div className="col Display Centering center ">
                        <div className="col-4 circule ">
                            <div className="">
                                <CircularProgress variant="determinate" value={75} color="secondary" />
                            </div>
                        </div>
                        <div className="col-8 circule" >
                        <p>New Order Today 32423</p>
                            <span className="card_text">Yesterday was 2423</span>
                        </div>
                    </div>
                </div>
 
            </Slider>
       

    )
}

