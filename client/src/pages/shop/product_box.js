import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOpencart } from '@fortawesome/free-brands-svg-icons';
import {Link} from "react-router-dom"
function Boxes(props){
   // console.log(props.addToCart.addToCart(props.items))
    if(props.items.status===props.sort || props.sort=="viewall"){
        return(
        <div className='row-box1'>
            <div className='blog-cards1'>
            <Link to={`/shop/${props.items.id}/${props.items.status}`} ><img src={props.items.img} className='blog-pic1'></img></Link>
            <div className='on-card' >{props.items.status}</div>
            <h3 id='rating'>{props.items.title}</h3>
            <h3 id='rating'><b id='bold'>{props.items.cost}</b></h3>
            <button className='cart-icon' style={{backgroundColor:"black"}} onClick={() => props.addToCart.addToCart(props.items)}><FontAwesomeIcon icon={faOpencart} /></button>
            <button style={{color:"white"}} >Customize</button>
            </div>
        </div>
        )
    }
        //console.log(props.min,props.max)
}
export default Boxes;