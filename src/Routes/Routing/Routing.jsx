import React from 'react'
import { BrowserRouter, Route, Routes    } from "react-router-dom";
import SignUp from '../../Components/Page/Signup/SignUp';
import Login from "../../Components/Page/Login/Login"


export default function Router() {
 

  return (
    

      <BrowserRouter basename ="/" >
        <Routes  >
         <Route  path="/" element={<SignUp></SignUp>}/>
         <Route  path="/Login" element={<Login></Login>}/>
       
        </Routes>
      </BrowserRouter>
      
  
  )
}
