import Foot from "../../common/footer";
import Navbar from "../../common/navbar";
import Products from "./products";
const Shop = (props) =>{
    //console.log(props.addToCart)
    return (
        <div>
            <Navbar/>
            <div style={{color:"white", background:"black", height:"100px", fontSize:"40px", textAlign:"center"}}>
                 Shop
            </div>
            <Products addToCart={props.addToCart}/><br></br><br></br>
            <Foot/>
        </div>
    );
}
export default Shop;