import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { useState } from 'react'
import {SharedContext} from '../AuthContext/AuthContext'
import toast from 'react-hot-toast'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Bars } from 'react-loader-spinner'


export default function Login() {
  const user_to = useNavigate()

  const [IsClicked, setIsClicked] = useState(false)

  const {UserToken,setUserToken}=useContext(SharedContext)
  
  const User_Data = {
    email: '',
    password:''

  }

  async function Loggin_User(user_info){

      setIsClicked(true);
      const Loggin_Response = axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',user_info).
      then( (Success) =>{
          console.log('Success: ' , Success.data.message); 
        setIsClicked(false);
        setUserToken(Success.data.token)
        localStorage.setItem('tkn',Success.data.token)
        console.log(UserToken)
      toast.success(`Welcome Back`)
            user_to('/home')
          

      }).
      catch( (error) =>{
        console.log('error: ',error.message);
        console.log(user_info)
        setIsClicked(false);
        setUserToken(error.message)
        toast.error('Try Again ')
        console.log(UserToken)
        toast('Failed',{
        position:'top-center',
        duration:1000, 
      }) });

     
  }

  const form_Data = useFormik({
    initialValues: User_Data, 
    onSubmit:Loggin_User,

  });
  return <>
              <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8">
            
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Log in
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
             
                <form action="" method="POST" className="" onSubmit={form_Data.handleSubmit}> 
              <div className="form-floating mb-3 w-50 mx-auto"> 
                      
                      <input type="email" className="form-control " id="email" placeholder="name@example.com"  value={form_Data.email} onChange={form_Data.handleChange} onBlur={form_Data.handleBlur}/>
                    <label for="email">Email address</label>
                  </div>
                  <div className="form-floating w-50 mx-auto">
                    <input type="password" class="form-control " id="password" placeholder="Password" value={form_Data.password} onChange={form_Data.handleChange} onBlur={form_Data.handleBlur}/>
                    <label for="password">Password</label>
                  </div>
                  <div>
                
                  <button
                    type="submit"
                    className="btn btn-primary my-2 mx-3"
                    onClick={(e) => {Loggin_User(e)}}
                  >
                  {!IsClicked ? "Log in ": <Bars
      height="20"
      width="20"
      color="#4fa94d"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      />}
                  </button>

                

        <button className="btn btn-outline-primary mx-2" onClick={() => {user_to('/Forgot')}}>Lost Credentials</button>

                </div>
              </form>
               
               
             


              
    
             
            </div>
          </div>
  </>
}