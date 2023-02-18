import React from 'react'
import { BrowserRouter, Route, Routes    } from "react-router-dom";
import SignUp from '../../Components/Page/SignUp';



export default function Router() {
 

  return (
    

      <BrowserRouter basename ="/" >
        <Routes  >
         <Route  path="/" element={<SignUp></SignUp>}/>
         
       
        </Routes>
      </BrowserRouter>
      
  
  )
}
