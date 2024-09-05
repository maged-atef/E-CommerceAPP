import React, { useContext } from 'react'
import  './Navbar.css'
import logo from '../../img/freshcart-logo.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { move } from 'formik';
import { SharedContext } from '../AuthContext/AuthContext';
export default function Navbar() {

  const move_to =   useNavigate(); 
  const {LogOut ,Add_Pro , No_item}=useContext(SharedContext)


  return <>

 <nav className="bg-navbar navbar navbar-expand-lg navbar-light bg-light navbar">
  <div className="container-fluid">
    <Link className="navbar-brand" to='home'>
        <img src={logo}  className= 'w-full' alt="" />
        </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
        {localStorage.getItem('tkn') !== null ? 
        <ul className="d-flex justify-content-center list-unstyled  me-auto mb-2 mb-lg-0 fw-semibold main_link ">
        <li className="mx-2">
          <NavLink  to='home'  className="mx-2 list-unstyled fw-semibold "  >Home</NavLink>
        </li>
        <li className="mx-2">
          <NavLink  to='categories' className="mx-2 list-unstyled fw-semibold " >Categories</NavLink>
        </li>
        <li className="mx-2">
          <NavLink to='brands'  className="mx-2 list-unstyled fw-semibold " >Brands</NavLink>
        </li>
        <li className="position-relative ">
          <NavLink  to='cart' className="mx-2 list-unstyled fw-semibold " >
            <i className='fa-solid fa-cart-shopping text-success'></i></NavLink>

            <span className='position-absolute count '>{No_item}</span>
            
        </li>


        <li className="">
          <NavLink  to='wishlist' className="mx-2 list-unstyled fw-semibold " >
            <i className='fas fa-heart text-danger'></i></NavLink>
        </li>   </ul>: ""}

       
      
    

      {localStorage.getItem('tkn') !== null ? "": <div>
        <button className="btn btn-outline-primary mx-2" onClick={() => {move_to('login')}}>Login</button>
      <button className="btn btn-outline-dark mx-2"  onClick={() => {move_to('register')}}>Register</button>
      </div> }
      <i className='fa-duotone fa-solid  fa-user mx-2'></i>
      {localStorage.getItem('tkn') !== null ? <Link><span className='pointer' id= "out" onClick={LogOut}><i className="fa fa-sign-out"></i></span></Link> : "" }
    </div>
  </div>
</nav>
 
  </>
}
