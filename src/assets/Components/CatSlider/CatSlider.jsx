import Slider from "react-slick";
import React, { useContext, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CatSilder.css'
import { SharedContext} from "../AuthContext/AuthContext";
import { Bars } from "react-loader-spinner";
import { NavLink } from "react-router-dom";

export default function CartSlider() {
    const {Get_cat ,category} =   useContext(SharedContext)
    useEffect(()=>{Get_cat()},[])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
    };

    return <>
     <Slider {...settings}>
     
    
  
   {category?.map((cat)=> <div className='cat_img my-5 d-flex justify-content-center flex-column align-item-center ' key={cat._id}>
            <div className=" mx-2"><img src={cat.image} className='rounded-3 w-100' alt="" /></div>
            <div className="mx-2"><NavLink><h6 className="text-center">{cat.name}</h6></NavLink></div>
      </div>)}

    
 </Slider>
    </>

}