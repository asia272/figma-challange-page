import React from 'react';
import "./Footer.css";
import footerImg from "../../assets/footerImg.png"
import locationIcon from "../../assets/locationIcon.png";
import msgIcon from "../../assets/msgIcon.png";

const Footer = () => {
  return (
    <footer>
      <img src={footerImg} alt="footer_img" />
      <div className='venue'>
        <p>Venue Locator</p>
        <p>Join the 28-Day Challenge</p>
        <p>DYG SWAG Store</p>
      </div>
      <div>
        <div>
          <span><img src={msgIcon} alt="msgIcon" /></span>
          <p>hello@danceyourselffit.com</p>
        </div>
        <div>
          <span><img src={locationIcon} alt="" /></span>
          <p>Docklands Innovation Park, East Wall, Dublin 3, Ireland. 85 Great Portland street, First Floor, London, W1W 7LT</p>
        </div>
      </div>
      <p className='footer-p'>FACEBOOK DISCLAIMER - This website is not part of the Facebook website or Facebook Inc. Additionally, this site is not endorsed by Facebook in any way. Facebook is a trademark of Facebook, Inc.</p>
      <p>Privacy Policy | Terms of Service</p>

    </footer>
  )
}

export default Footer
