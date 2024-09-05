import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Bars } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'


export default function Register() {

  const [IsClicked, setIsClicked] = useState(false)
  const user_to= useNavigate();

const New_User = { 
      name: '',
      email: '',
      password:'',
      rePassword:'',
      phone: '' 

}

async function Add_New_User(param){

    setIsClicked(true)
    const Add_User_Response = axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup' ,param).
    then( (Success) => {
      console.log('Success: ',Success);
      setIsClicked(false);
      toast.success("Welcome you as new member ")
      user_to('/login');
    }).
    catch((error) =>{
      console.log('error: ',error.message);
      
      setIsClicked(false)

      toast.error('try again')

    });
}

  const Form_Data =useFormik({
    initialValues: New_User,
    onSubmit: Add_New_User, 

  })

  return <>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8">
            
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register Now
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <form action="#" method="POST" className="" onSubmit={Form_Data.handleSubmit}>
          <div>
              <label htmlFor="name" className="text-left block text-sm font-medium leading-6 text-gray-900">
                 Name
              </label>
              <div className="">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                
                  value={Form_Data.name} onChange={Form_Data.handleChange} onBlur={FormData.handleblur} 
                  className="block w-full ps-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="text-left block text-sm font-medium leading-6 text-gray-900">
                 email
              </label>
              <div className="">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={Form_Data.email} onChange={Form_Data.handleChange} onBlur={FormData.handleblur} 

                  className="block w-full ps-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
           
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
               
              </div>
              <div className="">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={Form_Data.password} onChange={Form_Data.handleChange} onBlur={FormData.handleblur} 
                  
                  className="block w-full ps-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  rePassword
                </label>
               
              </div>
              <div className="">
                <input
                  id="rePassword"
                  name="rePassword"
                  type="password"
                  required
                  autoComplete="re-Password"
                  value={Form_Data.rePassword} onChange={Form_Data.handleChange} onBlur={FormData.handleblur} 

                  className="block w-full ps-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Phone
                </label>
               
              </div>
              <div className="">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  required
                  autoComplete="phone"
                  value={Form_Data.phone} onChange={Form_Data.handleChange} onBlur={FormData.handleblur} 

                  className="block w-full ps-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={() =>{Add_New_User(values)}}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
              {IsClicked ? 'Lodaing' :'Submit' }
              </button>
            </div>
          </form> */}
            <form action="" method="POST" className="" onSubmit={Form_Data.handleSubmit}> 

            <div className="form-floating mb-3 w-50 mx-auto">  
                      <input type="text" className="form-control " id="name" placeholder="name@example.com"  value={Form_Data.name} onChange={Form_Data.handleChange} onBlur={Form_Data.handleBlur}/>
                    <label for="name">Name</label>
                  </div>

              <div className="form-floating mb-3 w-50 mx-auto">  
                      <input type="email" className="form-control " id="email" placeholder="name@example.com"  value={Form_Data.email} onChange={Form_Data.handleChange} onBlur={Form_Data.handleBlur}/>
                    <label for="email">Email address</label>
                  </div>


                  <div className="form-floating w-50 mx-auto mb-2">
                    <input type="password" className="form-control " id="password" placeholder="Password" value={Form_Data.password} onChange={Form_Data.handleChange} onBlur={Form_Data.handleBlur}/>
                    <label for="password">Password</label>
                  </div>


                  <div>

                  <div className="form-floating mb-3 w-50 mx-auto"> 
                      
                      <input type="password" className="form-control " id="rePassword" placeholder="name@example.com"  value={Form_Data.rePassword} onChange={Form_Data.handleChange} onBlur={Form_Data.handleBlur}/>
                    <label for="rePassword">Re-Password</label>
                  </div>
                
                  <div className="form-floating mb-3 w-50 mx-auto"> 
                      
                      <input type="text" className="form-control " id="phone" placeholder="name@example.com"  value={Form_Data.phone} onChange={Form_Data.handleChange} onBlur={Form_Data.handleBlur}/>
                    <label for="phone">Phone</label>
                  </div>
                  <button
                    type="submit"
                    onClick={() =>{
                      Add_New_User(values)
                    }}
                    className="btn btn-outline-success my-2 mx-3"
                  >
                  {!IsClicked ? "Register": <Bars
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
