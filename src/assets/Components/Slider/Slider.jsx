import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import p1 from '../../slider/banner-4.jpeg'
import p2 from '../../slider/blog-img-1.jpeg'

import p3 from '../../slider/slider-2.jpeg'
import p4 from '../../slider/slider-image-1.jpeg'
import p5 from '../../slider/slider-image-3.jpeg'
import p6 from '../../slider/slider-2.jpeg'
 
 
 export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return <>
      <Slider {...settings}>
      <div>
        <img src={p1}   className="w-100 " alt="" />
      </div>
     
      <div>
      <img src={p2} className="w-100 "   alt="" />
      </div>
      <div>
      <img src={p3} className="w-100 "   alt="" />
      </div>
      <div>
      <img src={p4} className="w-100  "   alt="" />
      </div>
      <div>
      <img src={p5}   className="w-100 "  alt="" />
      </div>
    </Slider>
    </>

}