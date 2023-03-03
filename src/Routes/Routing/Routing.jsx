import React from 'react'
import { BrowserRouter, Route, Routes    } from "react-router-dom";
import SignUp from '../../Components/Page/Signup/SignUp';
import Login from "../../Components/Page/Login/Login"
import StoreAdd from '../../Components/Page/Store/StoreAdd/StoreAdd';
import Dashboard from "../../Components/Page/Dashboard/Dashboard";
import Category from '../../Components/Page/Category/Category';
import Profile from "../../Components/Page/Category/Profile"
import Product from "../../Components/Page/Product/Product"
export default function Router() {
 

  return (
    

      <BrowserRouter basename ="/" >
        <Routes>
         <Route path="/" element={<SignUp></SignUp>}/>
         <Route path="/Login" element={<Login></Login>}/>
         <Route path="/StoreAdd" element={<StoreAdd></StoreAdd>} />
         <Route path='/Dashboard' element={<Dashboard/>}/>
         <Route path='/Category' element={<Category/>}/>
         <Route path='/Profile' element={<Profile/>}/>
         <Route path='/Product' element={<Product/>}/>

        </Routes>
      </BrowserRouter>
      
  
  )
}
