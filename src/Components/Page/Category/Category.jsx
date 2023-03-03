import React from "react"
import { MdGames } from "react-icons/md"


export default function Category() {

    const [show, Setshow] = React.useState(false)

    function handlechnage(e) {
        Setshow(true)
    }
    const itemsData = [{ name: "flower", value: 100 }, { name: "edible", value: 200 }]
    const secItemData = [{ name: "Bud", value: 100 }, { name: "Infused flower", value: 200 }]


    return (
        <div className=" center col-12 signup_Display gap mt-4">
            <div className="col-4 Fullwidth ">
                <table style={{ width: "100%" }}>
                    <tr className="Cotegory_table">
                        <th className="th1">Category</th>
                        <th>Total</th>

                    </tr>
                    <tbody className="cat_table_body">

                    {itemsData.map((val) => {
                        return (
                            <tr className="cateory_left_tr" key="val">
                                <td onClick={handlechnage}>

                                    <div className="col-8 table_set gap">
                                        <div className="col-2">

                                            <span className="icon"><MdGames size={20} ></MdGames></span>
                                        </div>

                                        <div className="col-6">
                                            {val.name}

                                        </div>
                                    </div>
                                </td>
                                <td>{val.value}</td>
                            </tr>
                         

                        )
                    })}
                    </tbody>

            
                </table>
            </div>
            <div className={"col-4  Fullwidth Subcategory_hide " + (show && "Subcategory_show")} >
                <table style={{ width: "100%" }}>
                    <tr className="Cotegory_table_show">
                        <th></th>
                        <th></th>

                    </tr>
                    <tbody className="secItemData_table">
                    {secItemData.map((ele) => {
                        return (
                            <tr key="ele">

                                <td>

                                    <div className="col-8 table_set gap">
                                        <div className="col-2">

                                            <span className="icon"><MdGames size={20}></MdGames></span>
                                        </div>

                                        <div className="col-6">
                                            {ele.name}

                                        </div>
                                    </div>
                                </td>
                                <td>{ele.value}</td>
                            </tr>

                        )
                    })}
                    
                    </tbody>
                </table>
            </div>
        </div>
    )
}