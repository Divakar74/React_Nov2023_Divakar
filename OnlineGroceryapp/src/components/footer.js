import './cssfiles/footer.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faWhatsapp,
  faGoogle,
  faLinkedinIn,
  faYoutube,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import { Facebook, Google, Instagram, Twitter } from 'react-bootstrap-icons';

export default function Footer()
{
  return(
    <div>
        <footer class="footer">
  <div class="footer-container">
    <div class="footer-section">
      <h3>Grocery Shopping</h3>
      <a href='/aboutus' style={{textDecoration:'none',color:'white'}} > <p >  About Us</p></a>
      <a href='/aboutus' style={{textDecoration:'none',color:'white'}} > <p >Contact Us</p></a>
    </div>
    <div class="footer-section">
      <h3>Services</h3>
      <ul>
        <li>Secure Payment</li>
        
      </ul>
    </div>
    <div class="footer-section">
      <h3>Follow Us</h3>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
      </ul>
    </div>
    
  </div>
  <div className="container mt-5">
      <div className="text-center rounded-social-icons">
        {/* Facebook */}
        <Facebook></Facebook>
        {/* Instagram */}
       <Instagram></Instagram>
        {/* Twitter */}
        <Twitter></Twitter>
        {/* Google */}
        <Google></Google>
        
      </div>
    </div>
    <div class="footer-bottom">
    <p> Happy Shopping!</p>
  </div>

</footer>


    </div>
  )
};