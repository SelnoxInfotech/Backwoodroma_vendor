
import TopCard from "../../Component/CommenCard/TopCard"
import Card from "./DashboardComponent/Card"
import IncomeChart from "./DashboardComponent/LineChart"
import Order from "./DashboardComponent/Order"
import OrderTrack from "./DashboardComponent/OrderTrack"
import RecentOrder from "./DashboardComponent/RecentOrder"
const Dashboard = () => {
    return (

        <>


            <div className="container-fluid top   ">
                <div className="row">
                    <div className=' col-12'  >
                        <Card></Card>
                    </div>
                    <div className=' row  mt-5'  >
                        <div class="col-12 col-md-8 ">
                       
                       <OrderTrack></OrderTrack>
                       <RecentOrder></RecentOrder>
                        </div>
                        <div class="col-12 col-md-4">
                            <div className="col card_border top">
                                <Order></Order>
                            </div>
                            <div className="col card_border top">
                                <IncomeChart></IncomeChart>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
export default Dashboard