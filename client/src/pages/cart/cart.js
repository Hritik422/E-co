import Foot from "../../common/footer"
import Navbar from "../../common/navbar";
import Box from "./cart-box";
import React, { useState } from "react";
const Cart = (props) => {
    let map1 = new Map([[0,0]]);
    const [total,setTotal]=useState(0)
   const [quantity,changeQuantity]=useState(map1);
    const itemQuantity=(val,id,cost)=>{
            if(quantity.get(id) && quantity.get(id)<=val){
                let y=total+Number(cost);
                setTotal(y)
            }
            else if(!quantity.get(id)){
                let y=total+Number(cost);
                setTotal(y)
            }
            else{
                let y=total-Number(cost);
                setTotal(y)
            }
            map1.set(id,Number(val));
            changeQuantity(map1);
    }
    
    //console.log(cart
    if(props.login){
        const data=props.cart;
        const dat=data.map(data=>{
            return <Box 
            items={data}
            quantity={quantity}
            changeToQuantity={itemQuantity}
            />
          })
    return(
        <div>
            <Navbar/>
            <div style={{color:"white", background:"black", height:"100px", fontSize:"40px", textAlign:"center"}}>
                Cart
            </div>
            <div className="cart-window">
                <div className="cart-tot">
                {dat}
                </div>
                <div className="cart-total">
                    <h4>Checkout</h4>
                    <form>
                   
                    <label for="country"></label>
                    <select name="country" id="country">
                      <option value="Country">Country</option>
                      <option value="India">India</option>
                    </select>
                    
                    <label for="state"></label>
                    <select name="sate" id="state">
                      <option value="Choose a state">Choose State</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                    </select>
                    <input type="text" placeholder="City"></input>
                    <input type="text" placeholder="Zip"></input>
                    <div><h3>Total {total}</h3></div>
                    <input type="submit" value="Proceed to checkout" style={{backgroundColor:"black", color:"white"}}></input>
                    </form>
                </div>
            </div>
            <br></br><br></br>
            <Foot/>
        </div>
    );
}
else{
    return(
        <div>
        <Navbar/><br></br><br></br>
        <h1>Please Login First To See Your Cart</h1><br></br><br></br>
        <Foot/>
        </div>
    )
}
}

export default Cart;