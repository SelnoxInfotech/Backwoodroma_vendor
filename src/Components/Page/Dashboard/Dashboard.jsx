
import TopCard from "../../Component/CommenCard/TopCard"
import Card from "./DashboardComponent/Card"
import Order from "./DashboardComponent/Order"
const Dashboard = () => {
    return (

        <>


            <div className="container-fluid top   ">
                <div className="row">
                    <div className=' col-12'  >
                        <Card></Card>
                    </div>
                    <div className=' row  '  >
                        <div class="col-12 col-md-8 ">.col-12 .col-md-8</div>
                        <div class="col-12 col-md-4">
                       <div className="col card_border top">
                       <Order></Order>
                       </div>

                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
export default Dashboard