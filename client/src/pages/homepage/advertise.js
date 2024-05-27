import { fa42Group, faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faClock, faDollar, faLock, faMoneyBill, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Advertise = () =>{
      return(
        <>
        <div className="home-container">
           <h3 style={{color:"grey"}}>Exclusive Product New Arrivals</h3>
           <h1 style={{fontSize:"45px"}}>ORGANIC COFFEE</h1> 
           <h2 style={{fontWeight:"lighter"}}>SPECIAL BLEND</h2>
           <h5 style={{fontWeight:"lighter", color:"grey"}}>Fresh Products on Sale</h5>
           <h1 style={{fontSize:"70px"}}>UPTO 50% OFF</h1>
        </div>
        <div className="services">
            <div>
            <li><FontAwesomeIcon icon={faShippingFast} /></li>
                <h5>Free Shipping</h5>
                <p>Free shipping on all orders above 2000</p>
            </div>
            <div>
            <li><FontAwesomeIcon icon={faDollar} /></li>
                <h5>Money Back Guarantee</h5>
                <p>100% Money Back Guarantee</p>
            </div>
            <div>
            <li><FontAwesomeIcon icon={faClock} /></li>
                <h5>Online Support 24/7</h5>
                <p>Whatsapp 999999999 for online support</p>
            </div>
            <div>
            <li><FontAwesomeIcon icon={faLock} /></li>
                <h5>Secure Payment</h5>
                <p>100% secure payments in our portal</p>
            </div>
        </div>
        <div className="title-line">
            <h3 style={{fontSize:"25px"}}>Popular Departments</h3>
            <p>Products From These Categories Often Buy</p><br></br><br></br>
            <h3 style={{fontSize:"25px"}}>Most Popular</h3>
            <p>All our new arrivals in a exclusive brand selection</p><br></br><br></br>
        </div>
        </>
      )
}
export default Advertise;