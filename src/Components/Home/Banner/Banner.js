import React from 'react';
import banner_img from '../../../images/banner-img.png'
import './Banner.css'
import shape from '../../../images/sheap.png'
const Banner = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${shape})`,
          backgroundAttachment: "fixed",
        }}
        className="pb-4 mt-3"
      >
        <div className="d-md-flex flex-md-row justify-content-center align-items-center">
          <div className="" data-aos="fade-right">
            <h5 className="medium-text">Your health. Our priority.</h5>
            <h1 className="big-text fw-bold py-3">100% pure Pharmacy.</h1>
            <button className="btn btn-color rounded-pill">Contact Us</button>
          </div>
          <div className="mt-md-0 mt-3">
            <img src={banner_img} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    );
};

export default Banner;