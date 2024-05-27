import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Foot = () => {
    return(
        <div className="footer">
            <ul>
                <li style={{color:"white"}}>CUSTOMER SERVICE   </li><br></br>
                <li>Help & FAQs</li>
                <li>Order Tracking</li>
                <li>Shipping & Delivery</li>
                <li>Orders History</li>
                <li>Advanced Search</li>
                <li>Login</li>
            </ul>
            <ul>
                <li style={{color:"white"}}>ABOUT US</li> <br></br>
                <li>About Us</li>
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Corporate Sales</li>
                <li>Careers</li>
            </ul>
            <ul>
                <li style={{color:"white"}}>MORE INFORMATION</li><br></br>
                <li>Affiliates</li>
                <li>Refer a Friend</li>
                <li>Student Beans Offers</li>
                <li>Gift Vouchers</li>
            </ul>
            <ul class="social-icons">
    <li>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
    </li>
    <li>
        <a href="https://www.facebook.com/Nuturemite/"><FontAwesomeIcon icon={faFacebook} /></a>
    </li>
    <li>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
    </li>
    <li>
        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
    </li>
    <li>
        <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
    </li>
</ul>
        </div>
    )
}
export default Foot;