import React, { useContext, useEffect } from 'react'
import { SharedContext } from '../AuthContext/AuthContext'
import './Cart.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Cart() {

 const {ProdID, setProdID ,Products,No_item, ProductNo, setProductNo,settotalprice, totalprice ,setNo_item, Get_UserCart ,setProducts, Update_qty, clear_cart,Remove_CartItem}=  useContext(SharedContext)
useEffect( ()=>{
    Get_UserCart() ; 
},[]);

function HandleQtyChangeUp(id , qty ){ 
           Update_qty(id , qty )
           
   
}

function HandleQtyChangedown(id ,qty){ 
          Update_qty(id,qty)
         
}


  return <div>
          <h1>Total Price : {totalprice} LE </h1>
          <h1>Total Products NO : {No_item} Different Prodcuts</h1>
          
          <section className="h-100 h-custom" >
                    <div className="container py-5 h-100">
                         <div className="row d-flex justify-content-center align-items-center h-100">
                              <div className="col">
                                   <div className="card">
                                        <div className="card-body p-4">

                                        <div className="row">

                                             <div className="col-lg-7">
                                                  <Link to='/home'>
                                                  <h5 className="mb-3"><a href="#!" className="text-body"><i
                                                       className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5></Link>
                                                  <hr/>

                                                  <div className="d-flex justify-content-between align-items-center mb-4">
                                                  <div>
                                                       <p className="mb-1">Shopping cart</p>
                                                       <p className="mb-0">You have {No_item} items in your cart</p>
                                                  </div>
                                                  <div>
                                                       <p className="mb-1">Shopping cart</p>
                                                       <p className="mb-0">Total Price {totalprice} </p>
                                                  </div>
                                               
                                                  </div>

                                                 <div>
                                                   {/* Loop products */}
                                                   {Products?.map((item)=>
                                                     
                                                       
                                                            
                                                          <div className="card mb-3 mb-lg-0" key={item._id}>
                                                          <div className="card-body">
                                                               <div className="d-flex justify-content-between">
                                                               <div className="d-flex flex-row align-items-center">
                                                               <div className='w-50'>
                                                                    <img
                                                                    src={item.product.imageCover}
                                                                    className="img-fluid rounded-3 w-25 " alt="Shopping item"  />
                                                               </div>
                                                               <div className="ms-1">
                                                                    <h5>{item.product.title}</h5>
                                                                    <p className="small mb-0 text-center"> Price: {item.price} EGP</p>
                                                               </div>
                                                               </div>
                                                               <div className="d-flex flex-row align-items-center">
                                                               <div >
                                                                    <h5 className="fw-normal mb-0 mx-4">{item.count}</h5>
                                                               </div>
                                                               <div className='d-flex justify-content-center align-content-center'>

                                                                    <button onClick={()=>{
                                                                      
                                                                      HandleQtyChangeUp(item.product._id ,item.count +1)
                                                                     }}  className='btn btn-outline-danger mx-2 p-0'><i className='fas fa-plus mx-3'></i></button>
                                                                   
                                                                    <h5 className="mb-0">{item.Price}</h5>

                                                                    <button onClick={()=>{ 
                                                                      HandleQtyChangedown(item.product._id ,item.count -1  )
                                                                      
                                                                    }}   className='btn btn-outline-primary mx-2 p-0'><i className='fas fa-minus mx-3'></i></button>
                                                               </div> 

                                                               <button onClick={()=>Remove_CartItem(item.product._id)} className='btn btn-outline-danger'><i className="fas fa-trash-alt "></i></button>
                                                               </div>
                                                               </div>
                                                          </div>
                                                          </div>

                                                  )}
                                                 </div>

                                             


                                        </div>

                                             <div className="col-lg-5">

                                                  <div className="card bg-primary text-white rounded-3">
                                                  <div className="card-body">
                                                       <div className="d-flex justify-content-between align-items-center mb-4">
                                                       <h5 className="mb-0">Card details</h5>
                                                       <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                       className="img-fluid rounded-3" alt="Avatar" />
                                                       </div>

                                                       <p className="small mb-2">Card type</p>
                                                       <a href="#!" type="submit" className="text-white"><i
                                                       className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                                                       <a href="#!" type="submit" className="text-white"><i
                                                       className="fab fa-cc-visa fa-2x me-2"></i></a>
                                                       <a href="#!" type="submit" className="text-white"><i
                                                       className="fab fa-cc-amex fa-2x me-2"></i></a>
                                                       <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x"></i></a>

                                                       <form className="mt-4">
                                                       <div data-mdb-input-init className="form-outline form-white mb-4">
                                                       <input type="text" id="typeName" className="form-control form-control-lg" siez="17"
                                                            placeholder="Cardholder's Name" />
                                                       <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
                                                       </div>

                                                       <div data-mdb-input-init className="form-outline form-white mb-4">
                                                       <input type="text" id="typeText" className="form-control form-control-lg" siez="17"
                                                            placeholder="1234 5678 9012 3457" min-length="19" max-length="19" />
                                                       <label className="form-label" htmlFor="typeText">Card Number</label>
                                                       </div>

                                                       <div className="row mb-4">
                                                       <div className="col-md-6">
                                                            <div data-mdb-input-init className="form-outline form-white">
                                                            <input type="text" id="date" className="form-control form-control-lg"
                                                                 placeholder="MM/YYYY" size="7" min-length="7" max-length="7" />
                                                            <label className="form-label" htmlFor="date">Expiration</label>
                                                            </div>
                                                       </div>
                                                       <div className="col-md-6">
                                                            <div data-mdb-input-init className="form-outline form-white">
                                                            <input type="password" id="pass" className="form-control form-control-lg"
                                                                 placeholder="&#9679;&#9679;&#9679;" size="1" min-length="3" max-length="3" />
                                                            <label className="form-label" htmlFor="pass">Cvv</label>
                                                            </div>
                                                       </div>
                                                       </div>

                                                       </form>

                                                       <hr className="my-4" />

                                                       <div className="d-flex justify-content-between">
                                                       <p className="mb-2">Subtotal</p>
                                                       <p className="mb-2">{totalprice} EGP</p>
                                                       </div>

                                                       <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-info btn-block btn-lg">
                                                       <div className="d-flex justify-content-between">
                                                       <span>{totalprice}  " EGP " </span>
                                                       <span> Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                                                       </div>
                                                       </button>

                                                  </div>
                                                  </div>

                                             </div>

                                        </div>

                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
          </section>
    
     </div>
}