import './App.css'

import './App.css'
import Login from './assets/Components/Login/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './assets/Components/Layout/Layout'
import Register from './assets/Components/Register/Register'
import NotFound from './assets/Components/NotFound/NotFound'
import Cart from './assets/Components/Cart/Cart'
import Categories from './assets/Components/Categories/Categories'
import Home from './assets/Components/Home/Home'
import AuthContext from './assets/Components/AuthContext/AuthContext'
import Guard from './assets/Components/Guard/Guard'
import Brands from './assets/Components/Brands/Brands'
import { Toaster } from 'react-hot-toast'
import WishList from './assets/Components/WishList/WishList'
import Forgot from './assets/Components/Forgot/Forgot'


const rout = createBrowserRouter([
  {path:'' , element:<AuthContext> <Layout /> </AuthContext> , children:[
    {path:'login' , element : <Login />},
    {path:'register' , element:<Register />},
    {path:'*' , element:<NotFound /> },
    {path:'brands', element:<Guard>
      <Brands />
    </Guard> },
    {path:'cart',element :<Guard>
      <Cart/>
    </Guard> },
    {path:'categories',element: <Guard>
      <Categories />
    </Guard> },
    {path:'home', element:
    <Guard>  
     
        <Home/>
      
    </Guard> 
     
    }
    ,{path:'wishlist', element:
      <Guard>  
       
          <WishList />
        
      </Guard> 
       },
       {path:'forgot', element:
       
         
            <Forgot />
          
    
         }
  ]}
])


function App() {

  return <>
  <Toaster/>
  <RouterProvider router={rout} />
    
  </>
}

export default App
