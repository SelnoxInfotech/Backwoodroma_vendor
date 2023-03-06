import React from "react";
import ColumnChart from "./ColumnChart";

export default function Card() {
    return (

        <div className="container-fluid " >
            <div className="row row-cols-sm-2 row-cols-md-4 w-100  ">

                <div className="Card_  card_border" >
                    <div className="col-12">
                        <span>Total Income</span>
                    </div>
                    <div className="col-12 Display ">
                        <div className="col-6 card_rate">
                            <span >$15,500</span>
                        </div>
                        <div className="col-6">
                            <ColumnChart></ColumnChart>
                        </div>
                    </div>
                    <div className="col-12">
                       <div className="col-2 card_span">
                       <span>+12.5%</span>
                       </div>
                    </div>
                </div>
                <div className="Card_ card_border">
                    <div className="col-12">
                        <span>Total Income</span>
                    </div>
                    <div className="col-12 Display ">
                        <div className="col-6 card_rate">
                            <span>$15,500</span>
                        </div>
                        <div className="col-6">
                            <ColumnChart></ColumnChart>
                        </div>
                    </div>
                    <div className="col-12">
                       <div className="col-2 card_span">
                       <span>+12.5%</span>
                       </div>
                    </div>
                </div>
                <div className="Card_ card_border">
                    <div className="col-12">
                        <span>Total Income</span>
                    </div>
                    <div className="col-12 Display ">
                        <div className="col-6 card_rate">
                            <span>$15,500</span>
                        </div>
                        <div className="col-6">
                            <ColumnChart></ColumnChart>
                        </div>
                    </div>
                    <div className="col-12">
                
                       <div className="col-2 card_span">
                       <span>+12.5%</span>
                     
                    </div>
                    </div>
                </div>
                <div className="Card_ card_border">
                    <div className="col-12">
                        <span>Total Income</span>
                    </div>
                    <div className="col-12 Display ">
                        <div className="col-6 card_rate">
                            <span>$15,500</span>
                        </div>
                        <div className="col-6">
                            <ColumnChart></ColumnChart>
                        </div>
                    </div>
                    <div className="col-12">
                       <div className="col-2 card_span">
                       <span>+12.5%</span>
                       </div>
                    </div>
                </div>
            </div>

        </div>
    )
}