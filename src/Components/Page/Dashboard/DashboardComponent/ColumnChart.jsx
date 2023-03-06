
import ReactApexChart from 'react-apexcharts';
import React from 'react';



class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350,
                    
                    enabled: false,
                    toolbar: {
                        show: false
                      },
                    
                },
                plotOptions: {
                    bar: {
                        borderRadius: 1 ,
                        horizontal: false,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                yaxis: {
                    tooltip: {
                      enabled: false
                    },
                    labels: {
                      show: false
                     }
                },
                xaxis: {
                    tooltip: {
                      enabled: false
                    },
                    labels: {
                      show: false
                     }
                },
                colors: [
                    "#00E096",
              
                  
                  ]
               
            },


        };
    }

    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options}  series={this.state.series} type="bar" height={90}  width={"90%"}/>
               
            </div>

        );
    }
}

export default ApexChart; 