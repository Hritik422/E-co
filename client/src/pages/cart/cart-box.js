import React, { useState } from "react";
const Box = (props)=>{
    console.log(props.items)
    const [subtotal,changesubtotal]=useState(0);
    const handle = (e,id,cost)=>{
        changesubtotal(e.target.value)
        props.changeToQuantity(e.target.value,id,cost);
    }
    return(
        <div>
           <div className="cart">
               <table style={{textAlign:"center", verticalAlign:"center"}}>
                <tr>
                <th>Product {props.items.id}</th>
                 <th>Price</th>
                 <th>Quantity</th>
                 <th>Subtotal</th>
                </tr><br></br>
                <tr>
                <td><img src={props.items.img} alt="Product Image" className="cart-pic"/>{props.items.title}</td>
            <td>{props.items.cost}</td>
            <td><input type="number"  autoComplete="off" defaultValue={0} value={props.quantity.get(props.items.id)} min="1" max="20" onChange={e=>handle(e,props.items.id,props.items.cost)}></input></td>
            <td>{props.items.cost*subtotal}</td>
                </tr>
               </table>
           </div>
        </div>
    )
}
export default Box;