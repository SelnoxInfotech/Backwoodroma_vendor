import React from 'react'

import { CChart } from "@coreui/react-chartjs"
export default function RightPenalscore() {
    return (
        <div className='container-fluid '>

            <div className='row top center border standard '>

                <div className='col-12  '>
                    <div className='col'>
                        <h6>Orders</h6>
                    </div>
                    <div className='col'>
                        <CChart style={{ width: "100%" }}
                            type="bar"
                            data={{
                                labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July'],
                                datasets: [
                                    {

                                        label: ' Total Products Score',
                                        backgroundColor: '#FF2D55',
                                        data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                                        barThickness: 7,  
                                    },
                                ],
                               
                            }}

                        />

                    </div>
                </div>

            </div>
        </div>
    )
}
