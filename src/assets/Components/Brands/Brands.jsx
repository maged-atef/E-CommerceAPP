
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Bars } from 'react-loader-spinner'

export default function Brands() {

  const [Brands, setBrands] = useState(null)

  async function Get_brands(){ 
       axios.get('https://ecommerce.routemisr.com/api/v1/brands').
       then( (response) => { 
            console.log("success: ", response.data.data)
            setBrands(response.data.data)
            localStorage.setItem("brands",JSON.stringify(response.data.data))

       }).
       catch( (error) => { 
            console.log("error: ",error)
       })

  }

  useEffect(()=>{
    Get_brands()
  },[])

  return <>
        {Brands ? <div  className='container '>
            <div className="row">
            {Brands?.map((brand) =>
         <div key={brand._id} className=' col-lg-3 col-md-4 rounded-5 p-2 my-5'>
                  <img src={brand.image} className='w-100' alt="" />
                  <h2>{brand.name}</h2>
             </div>
            )}
        </div>
              
              </div> :<div className='d-flex justify-content-center align-content-center'>   

<Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
</div> }
  </>
}
