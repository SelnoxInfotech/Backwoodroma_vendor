import React from 'react'
import { BrowserRouter, Route, Routes    } from "react-router-dom";
import SignUp from '../../Components/Page/Signup/SignUp';
import Login from "../../Components/Page/Login/Login"
import StoreAdd from '../../Components/Page/Store/StoreAdd/StoreAdd';


export default function Router() {
 

  return (
    

      <BrowserRouter basename ="/" >
        <Routes  >
         <Route  path="/" element={<SignUp></SignUp>}/>
         <Route  path="/Login" element={<Login></Login>}/>
         <Route path="/StoreAdd" element={<StoreAdd></StoreAdd>} />
        </Routes>
      </BrowserRouter>
      
  
  )
}
