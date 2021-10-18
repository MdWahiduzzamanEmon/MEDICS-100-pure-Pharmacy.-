import React from 'react';
import brand1 from '../../../images/brand-1.png'
import brand2 from '../../../images/brand-2.png'
import brand3 from '../../../images/brand-3.png'
import brand4 from '../../../images/brand-4.png'
const Brand = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-3 col-6 py-3">
                    <img src={brand1} alt="" className=" img-fluid" />
                </div>
                <div className="col-md-3 col-6 py-3">
                    <img src={brand2} alt=""className=" img-fluid"  />
                </div>
                <div className="col-md-3 col-6 py-3">
                    <img src={brand3} alt="" className=" img-fluid" />
                </div>
                <div className="col-md-3 col-6 py-3">
                    <img src={brand4} alt="" className=" img-fluid" />
                </div>
            </div>
            
        </div>
    );
};

export default Brand;