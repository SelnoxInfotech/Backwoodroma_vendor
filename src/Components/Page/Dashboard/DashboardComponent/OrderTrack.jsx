import React from "react";
import Button from '@mui/material/Button';
import { TbArrowsUpDown } from "react-icons/tb"
export default function OrderTrack() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 OrderTrack">
                    <div className="col-6 Hedding ">
                        <span> Order Track</span>
                    </div>
                    <div className="col-6  AllButton">
                        <div>
                            <Button variant="contained" color="success" endIcon={<TbArrowsUpDown />}>
                                ALL
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-12 OrderTrack_detaile  border">
                    <div className="row">
                        <div class="col-sm mt-2 Right_border">
                            <div className="col">
                                <div className="col-12 center">
                                    <span>New Order</span>
                                </div>
                                <div className="col-12 center Price_color">
                                    <span>4365</span>
                                </div>

                            </div>
                        </div>
                       
                        <div class="col-sm mt-2 Right_border">
                            <div className="col">
                                <div className="col-12 center">
                                    <span>In Progress</span>
                                </div>
                                <div className="col-12 center Price_color">
                                    <span>232</span>
                                </div>

                            </div>
                        </div>
                        <div class="col-sm mt-2 Right_border">
                            <div className="col">
                                <div className="col-12 center">
                                    <span>Shipped</span>
                                </div>
                                <div className="col-12 center Price_color">
                                    <span>3244</span>
                                </div>

                            </div>
                        </div>
                        <div class="col-sm mt-2 Right_border">
                            <div className="col">
                                <div className="col-12 center">
                                    <span>Failed</span>
                                </div>
                                <div className="col-12 center Price_color">
                                    <span>42</span>
                                </div>

                            </div>
                        </div>
                        <div class="col-sm mt-2 Right_border">
                            <div className="col">
                                <div className="col-12 center">
                                    <span>Delivery Type</span>
                                </div>
                                <div className="col-12 center Price_color">
                                    <span>Curbside</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}