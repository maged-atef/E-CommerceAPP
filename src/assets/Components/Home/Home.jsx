import React, { Fragment, useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Bars } from 'react-loader-spinner';
import { SharedContext } from '../AuthContext/AuthContext';

import { NavLink } from 'react-router-dom';
import './Home.css'
import Slider from 'react-slick/lib/slider';
import SimpleSlider from '../Slider/Slider';
import CatSlider from '../CatSlider/CatSlider'


export default function Home() {
  const [All_Products ,setAll_Products]= useState(null)
  const {ProdID , setProdID ,Add_Pro , Get_UserCart ,Add_Wish, Get_cat} = useContext(SharedContext)


  
  async function Get_all_Products(){

    const res =  await axios.get('https://ecommerce.routemisr.com/api/v1/products'); 

    setAll_Products(res.data.data)
    localStorage.setItem("products",JSON.stringify(res.data.data))
  

  }

  function showID(item){
    console.log("item ID : ", item)
    setProdID(item)
   

    
  }


  useEffect(() =>{
      Get_all_Products(); 
      Get_UserCart();
      Get_cat();

      

  } ,[])

  return <div>
   
    {All_Products ? <div className='container text-center justify-content-center' >
      <SimpleSlider /> 
      <CatSlider /> 
          <div className="row" >
          {All_Products?.map((product) => <div key={product.id} className='p-2 my-5 col-lg-3 col-md-4 position-relative parent_press'>
                   <div className="img">
                   <img src={product.imageCover}  className=' w-100 rounded-5' alt="" />
                   </div>
                    <h2>{product.category.name}</h2>
                    <p>{product.title}</p>
                    <div className="details d-flex justify-content-between">
                        <div>
                          <span className={product.priceAfterDiscount ? "text-danger text-decoration-line-through":""}>{product.price}</span>
                          <span  className='mx-3'>{product.priceAfterDiscount}</span>
                        </div>
                        <span><i className='fa-solid fa-star text-warning'></i>{product.ratingsAverage}</span>
                    </div>
                    
                 <div className="press position-absolute top-0 end-0">
                 <button className='btn btn-outline-primary m-1 fs-5 fw-bold ' onClick={() =>{
                      Add_Pro(product.id)
                    }}>+</button>

                    <NavLink onClick={ ()=> { Add_Wish(product.id)} } className="mx-2 list-unstyled fw-semibold " >
                    <i className='fa-solid fa-heart text-danger'></i></NavLink>
                 </div>
                </div>
              )}

          </div>
          </div>:<div className='d-flex justify-content-center align-items-center '>   

    <Bars
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      /></div>}
  </div>


}
