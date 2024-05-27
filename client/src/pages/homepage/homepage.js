
import Foot from "../../common/footer";
import Navbar from "../../common/navbar";
import Advertise from "./advertise";
import Products from "./products";
import Weekly from "./weekly";
const Homepage = (props) => {
    return(
        <div>
            <Navbar/>
            <div>
                <Advertise/>
                <Products addToCart={props.addToCart}/>
                <Weekly addToCart={props.addToCart}/>
                <Foot/>
            </div>
        </div>
    )
}

export default Homepage;