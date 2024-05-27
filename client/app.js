import ReactDOM from "react-dom/client";
import React from "react";
import Homepage from "./src/pages/homepage/homepage";
import ImageGenerator from "./src/pages/shop/shop";
import Cart from "./src/pages/cart/cart";
import "./style.css"
import React, { useState } from "react"; 
import {createBrowserRouter,RouterProvider,
  } from "react-router-dom";
import AboutUs from "./src/pages/Aboutus/aboutus";
import Login from "./src/pages/Login/login";
import Account from "./src/pages/myAccount/myaccount";
import Register from "./src/pages/Register/register";
import ProductPage from "./src/pages/shop/ProductPage";
import data from "./src/pages/shop/products_data";

const App = () =>{
    const [login,islogin]=useState(0);
    const [cart, setCart] = useState([]);
    const setLogin = ()=>{
        islogin(!login);
    }
    const addToCart = (product) => {
        setCart([...cart, product]);
    };
const router = createBrowserRouter(
    [
    {
        path:'/',
        element:<Homepage addToCart={addToCart}/>
    },{
        path:'/shop',
        element:<ImageGenerator addToCart={addToCart}/>

    },{
        path:'/cart',
        element:<Cart cart={cart} login={login}/>
    },{
        path:'/aboutus',
        element:<AboutUs/>
    },{
        path:'/login',
        element:<Login setLogin={setLogin} login={login}/>
    },{
        path:'/myaccount',
        element:<Account login={login}/>
    },{
        path:'/register',
        element:<Register/>
    },{
        path:'/shop/:id/:status',
        element:<ProductPage data={data} addToCart={addToCart}/>
    }
]);



    return <RouterProvider router={router} />
}

//Linking Domtree and react virtual dom tree
const domRoot=document.getElementById("root")
const reactRoot = ReactDOM.createRoot(domRoot)

reactRoot.render(<App />)

