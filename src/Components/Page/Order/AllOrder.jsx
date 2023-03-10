import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { IoRadioButtonOnSharp } from "react-icons/io5"
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
    palette: {
        primary: {
            main: "#fffff",
        },



    },

});
const AllOrder = () => {
    const arrData = [{ id: "Order Id", order_num: "#12340", delivery: "Delivery", icons: <IoRadioButtonOnSharp /> ,location:"Jakarta",date:"3/10",to:"Singapore",rec_date:"10/10"}, { id: "Order Id2", order_num: "#12340", delivery: "Delivery2",location:"Jakarta",date:"3/10",to:"Singapore",rec_date:"10/10" }]
    return (
        <>
            <ThemeProvider theme={theme}>

            <div className="container-fluid">
                <div className="row border mt-4">
                    {arrData.map((ele, index) => {
                        return (
                            <div className="col-lg-3" key={index}>
                                <div className="m-2 border all_order_card">
                                    <div className="all_order_card_head">
                                        <div className="d-flex "> <p>{ele.id}</p><span className="all_order_span">{ele.order_num}</span></div>
                                        <Stack direction="row" spacing={1}>
                                            <Chip label={ele.delivery} variant="outlined" icon={<IoRadioButtonOnSharp />} />
                                        </Stack>
                                    </div>
                                    <div className='all_order_card_head'>

                                        <div className='all_order_card'>
                                            <Box sx={{ 
                                                "&.svg":{
                                                 color:"green"
                                                }
                                            }
                                            }
                                                
                                                >
                                                
                                            <IoRadioButtonOnSharp />

                                            <span className='all_order_span'>{ele.location}</span>
                                            </Box>

                                            </div>
                                        <p className='all_order_span'>{ele.date}</p>
                                    </div>
                                    <div className='all_order_card_head'>

                                        <div className='all_order_card'>
                                            <IoRadioButtonOnSharp />
                                            <span className='all_order_span'>{ele.to}</span>
                                            </div>
                                        <p className='all_order_span'>{ele.rec_date}</p>
                                    </div>

                                </div>


                            </div>
                        )
                    })}

                </div>


            </div>
            </ThemeProvider>
        </>
    )
}
export default AllOrder