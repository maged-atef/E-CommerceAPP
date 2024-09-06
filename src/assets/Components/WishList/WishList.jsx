import React, { useContext, useEffect } from 'react'
import { SharedContext } from '../AuthContext/AuthContext'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function WishList() {

 const {Products,No_item,Add_Pro, totalprice ,Get_UserWish,Remove_Wish,Add_Wish,wishno,setwishno,wishpro,setwishpro, Update_qty, Remove_CartItem}=  useContext(SharedContext)
    //  const [Shipping, setShipping] = useState(70)


useEffect( ()=>{
    const response = Get_UserWish() ; 
   
},[]);

function HandleQtyChangeUp(id , qty ){ 
           Update_qty(id , qty )
           
   
}

function HandleQtyChangedown(id ,qty){ 
          Update_qty(id,qty)
         
}


  return <div>
          <section className="h-100 h-custom" >
                    <div className="container py-5 h-100">
                         <div className="row d-flex justify-content-center align-items-center h-100">
                              <div className="col">
                                   <div className="card">
                                        <div className="card-body p-4">

                                        <div className="row">

                                             <div className="col-lg-7">
                                                  <Link to='/cart'>
                                                  <h5 className="mb-3"><a href="#!" className="text-body"><i
                                                       className="fas fa-long-arrow-alt-right me-2"></i>Go For Payment</a></h5></Link>
                                                  <hr/>

                                                  <div className="d-flex justify-content-between align-items-center mb-4">
                                                  <div>
                                                       <p className="mb-1">Wish List cart</p>
                                                       <p className="mb-0">You have {wishno} items in your Wish List </p>
                                                  </div>
                                                  <div>
                                                       <p className="mb-1">Wish List cart</p>
                                                       <p className="mb-0">Total Price {totalprice} </p>
                                                  </div>
                                               
                                                  </div>

                                                 <div>
                                                   {/* Loop products */}
                                                   {wishpro?.map((item)=>
                                                       //    console.log(item.price)
                                                       //    console.log(item._id)
                                                       //    console.log(item.product.title)
                                                       //    console.log(item.product.ratingsAverage)
                                                       //    console.log(item.count)
                                                    //    console.log(item),
                                                            
                                                          <div className="card mb-3 mb-lg-0" key={item._id}>
                                                          <div className="card-body">
                                                               <div className="d-flex justify-content-between">
                                                               <div className="d-flex flex-row align-items-center">
                                                               <div className='w-50'>
                                                                    <img
                                                                    src={item.imageCover}
                                                                    className="img-fluid rounded-3 w-25 " alt="Shopping item"  />
                                                               </div>
                                                               <div className="ms-1">
                                                                    <h5>{item.title}</h5>
                                                                    <p className="small mb-0 text-center"> Price: {item.price} EGP</p>
                                                               </div>
                                                               </div>
                                                               <div className="d-flex flex-row align-items-center">
                                                               <div >
                                                                    <h5 className="fw-normal mb-0 mx-4">{item.count}</h5>
                                                               </div>
                                                               <div className='d-flex justify-content-center align-content-center'>

                                                               </div> 
                                                               <NavLink  onClick={()=> {Add_Pro(item.id)}} className="mx-2 list-unstyled fw-semibold " >
                                                               <i className='fa-solid fa-cart-shopping text-success'></i></NavLink>
                                                               <button className='btn btn-outline-danger' onClick={()=>{Remove_Wish(item.id)}}><i className="fas fa-trash-alt"></i></button>
                                                               </div>
                                                               </div>
                                                          </div>
                                                          </div>

                                                  )}
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
