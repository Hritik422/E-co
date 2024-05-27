import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBox, faDownload, faHeart, faLocation, faPerson, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Foot from '../../common/footer';
const Main = () =>{
    return(
        <>
          <div className="my-account">
               <div className="account-section">
                  <h3>My Account</h3>
                  <ul>
                    <li>Dahboard</li>
                    <li>Order</li>
                    <li>Downloads</li>
                    <li>Addresses</li>
                    <li>Account Details</li>
                    <li>Wishlist</li>
                  </ul>

               </div>


               <div className='my-account-dashboard'>
                   <li>
                   <a href="https://www.facebook.com/Nuturemite/"><FontAwesomeIcon icon={faBox} />Orders</a>
                   </li>
                   <li>
                   <a href="https://www.facebook.com/Nuturemite/"><FontAwesomeIcon icon={faDownload} />Downloads</a>
                   </li>
                   <li>
                   <a href="https://www.facebook.com/Nuturemite/"><FontAwesomeIcon icon={faLocation} />Address</a>
                   </li>
                   <li>
                   <a href="https://www.facebook.com/Nuturemite/"><FontAwesomeIcon icon={faPerson} />Profile</a>
                   </li>
                   <li>
                   <a href="https://www.facebook.com/Nuturemite/"><FontAwesomeIcon icon={faHeart} />Wishlist</a>
                   </li>
                   <li>
                   <a href="https://www.facebook.com/Nuturemite/"><FontAwesomeIcon icon={faSignOut} />Logout</a>
                   </li>
               </div>
          </div>
          <Foot/>
        </>
    )
}
export default Main;