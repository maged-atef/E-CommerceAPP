import axios from "axios"
import { createContext, useState } from "react"
import toast from "react-hot-toast"
import { json, useNavigate } from "react-router-dom"

export const SharedContext=createContext()

export default function AuthContext({children}) {

    const [UserToken, setUserToken] = useState(null)
    const [Cart_ID, setCart_ID] = useState(null)
    const [ProdID, setProdID] = useState(null)
    const [totalprice, settotalprice] = useState(0)
    const [No_item, setNo_item] = useState(0)
    const [Products, setProducts] = useState(null)
    const [ProductNo, setProductNo] = useState(0)
    const [wishno, setwishno] = useState(0)
    const [wishpro, setwishpro] = useState(null)
    const [category, setcategory] = useState(null)


const user_to = useNavigate(); 
      // Add Products To Cart
     async function Add_Pro(id){
     await   axios.post('https://ecommerce.routemisr.com/api/v1/cart', {
        "productId": id
    },
         {headers :{
          token: localStorage.getItem('tkn') ||UserToken
         }},

      ).then((success) =>{
          console.log(success)

        setNo_item(success.data.numOfCartItems)
        setProducts(success.data.data.products)
        settotalprice(success.data.data.totalCartPrice)
        console.log("Products : ", Products);
        console.log( "numOfCartItems: ",No_item);
        console.log("totalprice : ",totalprice);
        settotalprice(success.data.data.totalCartPrice);
        setNo_item(success.data.numOfCartItems);
        setProducts(success.data.data.products);
        localStorage.setItem("order_Cart", JSON.stringify(success.data.data))
        console.log(localStorage.getItem('order_Cart'))
    
      }).catch((error) =>{
        console.log("error",error)
      }); 
        
        
        
}


//wish
async function Add_Wish(id){
  await   axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', {
     "productId": id
 },
      {headers :{
       token: localStorage.getItem('tkn') ||UserToken
      }},

   ).then((success) =>{
       console.log(success)

     
   }).catch((error) =>{
     console.log("error",error)
   }); 
     
     
     
}
async function Get_cat(){ 
  await  axios.get('https://ecommerce.routemisr.com/api/v1/categories').
    then( (response) =>{
      console.log("response success" ,response.data.data)
      setcategory(response.data.data)
    localStorage.setItem("categories",JSON.stringify(response.data.data))

    }).
    catch( (error) => {
      console.log('error',error)
    });
  }

async function Get_UserWish(){
  const response = axios.get('https://ecommerce.routemisr.com/api/v1/wishlist' , {
    headers:{ token : localStorage.getItem('tkn')}
  }).then((sucess)=> {
  
    console.log("Sucess: ", sucess.data.count)
    console.log("Sucess: ", sucess.data.data)
    setwishno(sucess.data.count)
    setwishpro(sucess.data.data)
    

  }).catch((error)=> {
    console.log("error: ", error)

  }); 
}

async function Remove_Wish(id){
  const response = axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
    headers: {token : localStorage.getItem('tkn')}
  }).then((sucess)=>{
          console.log("sucess: ",sucess)
          setwishno(sucess.data.count)
          setwishpro(sucess.data.data)

  }).catch((erorr)=>{
      console.log("error: ",erorr)
  });
}


  //Get Logged-in USer Cart 
   async function Get_UserCart(){
      const response = axios.get('https://ecommerce.routemisr.com/api/v1/cart' , {
        headers:{ token : localStorage.getItem('tkn')}
      }).then((sucess)=> {
          // console.log("Sucess : ", sucess.data.numOfCartItems)
          // console.log("Sucess : ", sucess.data.data.products)
          // console.log("Sucess : ", sucess.data.data.totalCartPrice)
          settotalprice(sucess.data.data.totalCartPrice);
          setNo_item(sucess.data.numOfCartItems);
          setProducts(sucess.data.data.products);

      }).catch((error)=> {
        console.log("error: ", error)

      }); 
    }

  //Removing Specific cart item 
  async function Remove_CartItem(id){
    const response = axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
      headers: {token : localStorage.getItem('tkn')}
    }).then((sucess)=>{
            console.log("sucess: ",sucess)
            settotalprice(sucess.data.data.totalCartPrice);
            setNo_item(sucess.data.numOfCartItems);
            setProducts(sucess.data.data.products);

        
            console.log("total: ",totalprice)
            console.log("no items : ", No_item)
         
    }).catch((erorr)=>{
        console.log("error: ",erorr)
    });
  }

  //update Qty in cart 
  function Update_qty(id , qty){
    const response = axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
      "count":qty
    },{
      headers:{token : localStorage.getItem('tkn')}
    }).then((sucess)=>{
      console.log("sucess: ",sucess.data)
      settotalprice(sucess.data.data.totalCartPrice);
          setNo_item(sucess.data.numOfCartItems);
          setProducts(sucess.data.data.products);
     

}).catch((erorr)=>{
  console.log("error: ",erorr)
});
  }

  //Clear Cart 

  function clear_cart(){
    const response = axios.put('https://ecommerce.routemisr.com/api/v1/cart',{
      headers:{token : localStorage.getItem('tkn')}
    }).then((sucess)=>{
      console.log("sucess: ",sucess)
}).catch((erorr)=>{
  console.log("error: ",erorr)
});
  }
    
  function LogOut() {
    localStorage.removeItem('tkn'); 
    setUserToken(null)
    user_to('login')
  }

  return<SharedContext.Provider value={{
    UserToken,
    setUserToken,
    Cart_ID,
    setCart_ID,
    ProdID,
    setProdID,
    Add_Pro,
    Products,
    setProducts,
    No_item,
    setNo_item,
    totalprice,
    settotalprice,
    Update_qty,
    clear_cart,
    Remove_CartItem,
    Get_UserCart,
    LogOut,
    ProductNo, 
    setProductNo,
    Remove_Wish,
    Get_UserWish,
    Add_Wish,
    wishno,
    setwishno,
    wishpro,
    setwishpro,
    Get_cat,
    category, 
    setcategory,
    
    }}>



       {children}

  </SharedContext.Provider>
        


}
