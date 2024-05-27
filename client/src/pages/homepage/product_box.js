import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOpencart } from '@fortawesome/free-brands-svg-icons';
import {Link} from "react-router-dom"

function Boxes(props){
        if(props.items.status===props.sort || props.sort=="viewall"){
        return(
        <div className='row-box'>
            <div className='blog-cards'>
            <Link to={`/shop/${props.items.id}/${props.items.status}`} ><img src={props.items.img} className='blog-pic'></img></Link>
            <div className='on-card' >{props.items.status}</div>
            <h3 id='rating'>{props.items.title}</h3>
            <h3 id='rating'><b id='bold'>{props.items.cost}</b></h3>
            <button className='cart-icon' style={{backgroundColor:"black"}} onClick={() => props.addToCart.addToCart(props.items)}><FontAwesomeIcon icon={faOpencart} /></button>
            </div>
        </div>
        )
        }
}
export default Boxes;