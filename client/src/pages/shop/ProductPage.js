import Navbar from "../../common/navbar";
import Foot from "../../common/footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOpencart } from '@fortawesome/free-brands-svg-icons';
import {
    useParams,
} from "react-router-dom";
import {useState} from "react";
const ProductPage=(props)=>{
    [describe,setdescribe]=useState("Amla powder, also known as Indian gooseberry powder or emblica officinallis has been used as Ayurvedic medicine for centuries to treat various diseases. Amla is in rich in vitamin C, Phosphorous, Iron, calcium, other antioxidants boost immunity and help in skin cell regenerate, slow down ageing. Amla powder topical application to skin reduces acne and pimples. Topical application of amla powder to hair is helpful in hair growth, reduces the dandruff.")
    let { id } = useParams();
    let cur_data={};
    props.data.forEach((element, index, array) => {
        if(element.id==id){ // 100, 200, 300
           cur_data=element;
        }
    });
    return(
        <>
         <Navbar/>
         <div style={{color:"white", background:"black", height:"100px", fontSize:"40px", textAlign:"center"}}>
                {cur_data.title}
            </div><br></br><br></br>

            <div className="productpage">
                <div>
                <img src={cur_data.img}></img>

                </div>
                <div>
                 <h3>{cur_data.title}</h3><br></br>
                 <h4>{cur_data.rating}</h4><br></br>
                 <h2>₹{cur_data.cost}</h2>
                 <p>Category : {cur_data.status}</p><br></br>
                 <p>TAGS: AMLA, EMBLICA OFFICINALLIS, HAIR HEALTH, INDIAN GOOSEBERRY, SKIN HEALTH, SKIN LIGHTING, VITAMIN C</p><br></br><br></br>
                 <button className='cart-icon' style={{backgroundColor:"black"}} onClick={() => props.addToCart(cur_data)}><FontAwesomeIcon icon={faOpencart} /></button>
                 <br></br><p className="custom">Customize</p>
                </div>
            </div>
            <div className="stateButtons">
               <button onClick={()=>setdescribe("Amla powder, also known as Indian gooseberry powder or emblica officinallis has been used as Ayurvedic medicine for centuries to treat various diseases. Amla is in rich in vitamin C, Phosphorous, Iron, calcium, other antioxidants boost immunity and help in skin cell regenerate, slow down ageing. Amla powder topical application to skin reduces acne and pimples. Topical application of amla powder to hair is helpful in hair growth, reduces the dandruff.")}>Description</button><button onClick={()=>setdescribe("Weight	0.25 g")}>Additional Info</button><button onClick={()=>setdescribe("Store Name: Nuturemite")}>Vendor Info</button><button>Shipping</button>
               <br></br> {describe}<br></br><br></br><br></br>
            </div>



          <Foot/>
        </>
    )
}
export default ProductPage;