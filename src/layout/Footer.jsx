import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="main">
          <div className="main-container">
            <div className="otherPages">
              <p>Other Pages</p>
              <Link to="/">Home</Link>
              <Link to="/addPage">Add Page</Link>
              <Link to="#">Gallery</Link>
              <Link to="#">About</Link>
              <Link to="#">Languages</Link>
            </div>
            <div className="footer-logo">
              <img
                src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/54/2014/02/colorlib-logo.png"
                alt=""
              />
              <p>
                Awesome and completely free WordPress WooCommerce <br /> themes to take
                your ecommerce website to the next level.
              </p>
              <p>
                If you are having problems with theme setup, please feel free to <br />
                use Colorlib support forum.
              </p>
            </div>
          </div>
        </div>
        <div className="copyrights">
          <div className="container-copyrights">
            <div className="footer-pages">
              <Link to="/">Home</Link>
              <Link to="/addPage">Add Page</Link>
              <Link to="#">Gallery</Link>
              <Link to="#">About</Link>
              <Link to="#">Languages</Link>
            </div>
            <p>
              Dazzling Demo All rights reserved. Theme by Colorlib Powered by
              WordPress
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
