import React, { Children } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'




export default function Layout({Children}) {

  return <>
            <Navbar />  
                        <Outlet/>
            <Footer /> 
</>
}
