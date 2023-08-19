import React from "react";
import { Link } from "react-router-dom";
import { footerStyle } from "./style";
import { colors } from "../../constant/constant";


const Footer = () => {
  const classes = footerStyle();
  return (
    <div className={classes.footerWrapper}>
      <footer className="site-footer" id="footer">
        <div className="bottom-footer">
          <div className="container">
            <div >
              {/* <div className="footer-logo" style={{padding:20}}>
              
                <Link to="/" title="logo">
                  <img src={siteLogo} alt="sitelogo" style={{height:100,width:220, paddingRight:20}} />
                </Link>
                <Link to="/" title="logo">
                  <img src={facebook} alt="sitelogo" style={{ paddingRight:20,paddingLeft:620}} />
                </Link>
                <Link to="/" title="logo">
                  <img src={Email} alt="sitelogo" style={{ paddingRight:20,paddingLeft:20}} />
                </Link>
                <Link to="/" title="logo">
                  <img src={Linkedin} alt="sitelogo" style={{ paddingRight:20,paddingLeft:20}} />
                </Link>
                <Link to="/" title="logo">
                  <img src={YouTube} alt="sitelogo"  style={{ paddingRight:20,paddingLeft:20}}/>
                </Link>
               
              </div> */}
              <div>
                <center>
                <Link className="route-text" to="/" title="Home" >
                  Home
                </Link>
                <Link to="/" title="About" className="route-text">
                  About Us
                </Link>
                <Link to="/" title="Contact" className="route-text">
                  Contact Us
                </Link>
                <Link to="/" title="Policy" className="route-text">
                  Privacy Policy
                </Link>
                </center>
              </div>
              <p className="copyright-text" style={{textAlign:"center",paddingTop:40}}>
                © 2023 BookGallery.com. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
