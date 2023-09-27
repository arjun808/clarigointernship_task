import React from 'react'
import { Button, Form, Input } from "antd";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SignUp from './pages/SignUp';
import OTP from './pages/OTP';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/verification' element={<OTP/>}/>
   </Routes>
   </BrowserRouter>

  
  )
}

export default App