import React from "react";
import { Select, MenuItem, } from "@material-ui/core";
import axios from "axios";
import Cookies from 'universal-cookie';

export default function StoreCity({SetStore,AddStore}) {

    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
     const [City ,SetCity] = React.useState([])
    function handleChange(e) {
        SetStore(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    React.useEffect(() => {
        axios.get(`http://34.201.114.126:8000/AdminPanel/FilterCitiesByStates/${AddStore.State_id}`, {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            SetCity(response.data.data)
            SetStore(Store => ({ ...Store, City_id: response.data.data[0].id }))
        })
    },[token_data,AddStore.State_id,SetStore])


    return (
        <div>
            <Select
      variant="filled"
                name='city_id'
                value={AddStore.City_id}
                onChange={handleChange}
                displayEmpty
        
                inputProps={{ 'aria-label': 'Without label' }} style={{ minWidth: "60%", fontSize: 15 }}
            >
                <MenuItem disabled value="" style={{ fontSize: 15 }}>
                    <em>Select City</em>
                </MenuItem>

                {
                    City.map((data, index) => {

                        return (
                            <MenuItem key={index} value={data.id} style={{ fontSize: 15 }}>{data.CityName}</MenuItem>
                        )
                    })
                }
            </Select>
        </div>
    )
}