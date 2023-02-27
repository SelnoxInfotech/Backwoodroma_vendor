import React from "react";
import { Select, MenuItem, } from "@material-ui/core";
import axios from "axios";
import Cookies from 'universal-cookie';


export default function States({ SetStore, AddStore ,selectCountry}) {
  const [State ,  SetState] = React.useState([])
  const cookies = new Cookies();
  const token_data = cookies.get('Token_access')
//    console.log(selectCountry)
    function handleChange(e) {
        SetStore(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    React.useEffect(() => {
        axios.get(`http://34.201.114.126:8000/AdminPanel/FilterStatesByCountry/${selectCountry}`, {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            SetState(response.data.data)
            SetStore(Store => ({ ...Store, State_id: response.data.data[0].id }))
        })
    },[selectCountry,token_data,SetStore])

    return (


        <div>
            <Select
                variant="filled"
                name='State_id'
                value={AddStore.State_id}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'Without label' }} style={{ minWidth: "60%", fontSize: 15 }}
            >
                <MenuItem disabled value="" style={{ fontSize: 15 }}>
                    <em>Select</em>
                </MenuItem>

                {
                    State?.map((data, index) => {

                        return (
                            <MenuItem key={index} value={data.id} style={{ fontSize: 15 }}>{data.StateName}</MenuItem>
                        )
                    })
                }
            </Select>
        </div>
    )
}