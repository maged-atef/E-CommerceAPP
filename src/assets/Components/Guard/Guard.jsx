import React, { Children } from 'react'
import Login from '../Login/Login'

export default function Guard({children}) {
    
    if(localStorage.getItem('tkn') === null ){
       return  <Login/>
    }

    

  return <>
         { console.log("guard")}
         {children} 
  </>
    
      
    
  
}
