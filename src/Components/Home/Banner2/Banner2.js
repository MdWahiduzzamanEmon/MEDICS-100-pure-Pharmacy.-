import React from 'react';
import alcohol from '../../../images/Alcohol-gel.png'
import mask from '../../../images/mask.png'
import mask_bg from '../../../images/mask-bg.png'
const Banner2 = () => {
    return (
      <div>
        <div className="container my-4 py-5">
          <div className="row justify-content-evenly align-items-center">
            <div className="col-md-4">
              <div className="bg-color rounded-3">
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-6">
                    <h2 className="text-white">Save 20% On Sanitizers</h2>
                    <h5 className="big-text fw-bold">99.9% Germ Protection</h5>
                    <button className="btn btn-warning fw-bold rounded-pill">
                      Buy Now
                    </button>
                  </div>
                  <div className="col-md-6 mt-5">
                    <img src={alcohol} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 rounded-3"
              style={{ backgroundImage: `url(${mask_bg})` }}
            >
              <div className="row justify-content-center align-items-center ">
                <div className="col-md-6">
                  <h2 className="fw-bold text-white">
                    Covid Protective Face Mask
                  </h2>
                  <h4 className="medium-text py-4">Save Upto 15%</h4>
                  <button className="btn btn-warning fw-bold rounded-pill">
                    Buy Now
                  </button>
                </div>
                <div className="col-md-6 mt-5">
                  <img src={mask} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner2;