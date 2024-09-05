import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bars } from 'react-loader-spinner'


export default function Forgot() {
  const user_to = useNavigate()

  const [IsClicked, setIsClicked] = useState(false)

  
  const User_Data = {
    email: ''

  }

  async function Forgot_password(email){

    setIsClicked(true)
      const forgot_response = axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',email).
      then( (Success) =>{
        console.log('Success: ' , Success.data.message); 
        setIsClicked(false)
      }).
      catch( (error) =>{
        console.log('error: ',error.message);
        setIsClicked(false)
      });

     
  }

  const form_Data = useFormik({
    initialValues: User_Data, 
    onSubmit:Forgot_password,

  });


  return <>

              <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8">
            
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Restore Account
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
             
                <form action="" method="POST" className="" onSubmit={form_Data.handleSubmit}> 

              <div className="form-floating mb-3 w-50 mx-auto"> 
                      
                      <input type="email" className="form-control " id="email" placeholder="name@example.com"  value={form_Data.email} onChange={form_Data.handleChange} onBlur={form_Data.handleBlur}/>
                    <label for="email">Email address</label>
                  </div>
                  
                  <div>
                
                  <button
                    type="submit"
                    className="btn btn-primary my-2 mx-3"
                    onClick={(e) => {Forgot_password(e)}}
                  >
                  {!IsClicked ? "Restoring": <Bars
      height="20"
      width="20"
      color="#4fa94d"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      />}
                  </button>
                  
                </div>
              </form>

            </div>
          </div>
  </>
}