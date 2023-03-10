import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import React from "react"
import Select from '@mui/material/Select';
import axios from "axios"
import Cookies from 'universal-cookie';
const ProductGiftVoucher = ({ Product, SetProduct }) => {
    const [GiftVocher, SetGiftVocher] = React.useState([])
    const [Coupoun, SetCoupoun] = React.useState([])
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')

    React.useEffect(() => {
        axios("http://34.201.114.126:8000/AdminPanel/GiftVoucherViewSet/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            SetGiftVocher(response.data)
            if (Product.GiftVoucher === "")
                SetProduct(Product => ({ ...Product, GiftVoucher: response.data[0].id }))

        })
        axios("http://34.201.114.126:8000/AdminPanel/CouponViewSet/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            SetCoupoun(response.data)
            if (Product.Claimed_Coupoun === "")
                SetProduct(Product => ({ ...Product, Claimed_Coupoun: response.data[0].id }))

        })


    }, [SetProduct, token_data, Product.Claimed_Coupoun, Product.GiftVoucher])

    const handleChange = (event) => {
        const value = event.target.value;
        SetProduct({
            ...Product, [event.target.name]: value
        });



    };
    return (

        <>
                <div className='row'>
                <p className='center'>GiftVoucher</p>

                <div className="col-lg-12 center ">
                    <FormControl sx={{ minWidth: 120 }}>
                        <Select
                            name='GiftVoucher'
                            onChange={handleChange}
                            value={Product.GiftVoucher}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            size="small"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>

                            {
                                GiftVocher.map((data, index) => {
                                    return (<MenuItem value={data.id} style={{ fontSize: 15 }} key={index}>{data.code}</MenuItem>)
                                })
                            }
                        </Select>

                    </FormControl>
                </div>
                </div>

                <div className='row mt-2'>
                <p className='center'>Coupan</p>
      
                <div className='col-lg-12 center '>
                <FormControl sx={{ minWidth: 120 }}>
                        <Select
                            name='Claimed_Coupoun'
                            onChange={handleChange}
                            value={Product.Claimed_Coupoun}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            size="small"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                    Coupoun.map((data, index) => {
                                        return (<MenuItem value={data.id} style={{ fontSize: 15 }} key={index}>{data.code}</MenuItem>)
                                    })
                                }
                        </Select>

                    </FormControl>
                </div>
                </div>

            {/* </div> */}
        </>
    )
}
export default ProductGiftVoucher