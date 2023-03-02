import React from "react"
import { MdGames } from "react-icons/md"


export default function Category() {

    const [show, Setshow] = React.useState(false)

    function handlechnage(e) {
        Setshow(true)
    }

    return (
        <div className=" center col-12 signup_Display gap">
            <div className="col-4 Fullwidth ">
                <table style={{ width: "100%" }}>
                    <tr className="Cotegory_table">
                        <th>Category</th>
                        <th>Total</th>

                    </tr>
                    <tr>
                        <td onClick={handlechnage}>

                            <div className="col-8 table_set gap">
                                <div className="col-2">

                                    <span className="icon"><MdGames></MdGames></span>
                                </div>

                                <div className="col-6">


                                    Alfreds Futterkiste
                                </div>
                            </div>
                        </td>
                        <td> Alfreds Futterkiste</td>
                    </tr>
                    <tr>
                        <td><span ><MdGames></MdGames></span> Centro comercial Moctezuma</td>
                        <td>Alfreds Futterkiste</td>
                    </tr>
                </table>
            </div>
            <div className={"col-4  Fullwidth Subcategory_hide " + (show && "Subcategory_show")} >
                <table style={{ width: "100%" }}>
                    <tr className="Cotegory_table_show">
                        <th></th>
                        <th></th>

                    </tr>
                    <tr> 
                    <td>Alfreds Futterkiste</td>    
                        <td>Alfreds Futterkiste</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Alfreds Futterkiste</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}