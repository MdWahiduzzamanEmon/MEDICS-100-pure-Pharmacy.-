import React from 'react';
import logo from '../../images/footer-logo.png'
const Footer = () => {
    return (
      <div>
        <div className="container">
          <div className="row text-white footer-bg">
            <div className="col-md-3 col-md-6">
              <div>
                <img src={logo} alt="" />
                        </div>
                        <p>A trusted pharmacy for world people</p>
            </div>
            <div className="col-md-3 col-md-6"></div>
            <div className="col-md-3 col-md-6"></div>
            <div className="col-md-3 col-md-6"></div>
          </div>
        </div>
      </div>
    );
};

export default Footer;