import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {IoRadioButtonOnSharp} from "react-icons/io"
const AllOrder = () => {
    const arrData = [{ id: "Order Id", order_num: "#12340", delivery: "Delivery"}, { id: "Order Id2", order_num: "#12340", delivery: "Delivery2" }]
    return (
        <>
            <div className="container-fluid">
                <div className="row border mt-4">
                    {arrData.map((ele, index) => {
                        return (
                            <div className="col-lg-3" key={index}>
                                <div className="m-2 border all_order_card">
                                    <div className="all_order_card_head">
                                        <div className="d-flex "> <p>{ele.id}</p><span className="all_order_span">{ele.order_num}</span></div>
                                        <Stack direction="row" spacing={1}>
                                            <Chip label={ele.delivery}  variant="outlined" />
                                        </Stack>
                                    </div>

                                </div>

                            </div>
                        )
                    })}

                </div>


            </div>
        </>
    )
}
export default AllOrder