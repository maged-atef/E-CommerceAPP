import axios from 'axios'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { Bars } from 'react-loader-spinner'

export default function Categories() {

  const [Categories, setCategories] = useState(null)

  async function Get_cat(){ 
  await  axios.get('https://ecommerce.routemisr.com/api/v1/categories').
    then( (response) =>{
      console.log("response success" ,response.data.data)
      setCategories(response.data.data)
    localStorage.setItem("categories",JSON.stringify(response.data.data))

    }).
    catch( (error) => {
      console.log('error',error)
    });
  }

  useEffect(()=>{
    Get_cat(); 
  },[]);


  return <>
        {Categories ? <div className='container'>
         <div className="row g-1">
         {Categories?.map((cat)=>
            <div className='col-lg-3 col-md-4 my-4 ' >
                <img src={cat.image} className='w-100 rounded-5' alt="" />
                <h2>{cat.name}</h2>
          </div>
          )}
        </div>
          
          </div>: <div className='d-flex justify-content-center align-content-center'>   

<Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
</div>}
  </>
    // https://ecommerce.routemisr.com/api/v1/categories
    // https://ecommerce.routemisr.com/api/v1/brands
    // https://ecommerce.routemisr.com/api/v1/brands

  
}
