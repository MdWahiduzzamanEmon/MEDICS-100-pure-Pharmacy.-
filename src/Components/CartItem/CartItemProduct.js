import React from 'react';

const CartItemProduct = (props) => {
   
    console.log(props?.cart);
    return (
      <div>
        <div className="container text-start pb-4">
          <div className="d-flex align-items-center justify-content-evenly py-4 border my-2 rounded-3 shadow">
            <div className="w-25 rounded-3">
              <img
                src={props?.cart?.image}
                alt={props?.cart?.image}
                className="w-50 border border-3 p-2 rounded-3"
              />
            </div>
            <h5 className="fw-bold w-25">${props?.cart?.price.toFixed(2)}</h5>
            <h6 className="fw-bold big-text">
              Selected({props?.cart?.quantity})
            </h6>
          </div>
        </div>
      </div>
    );
};

export default CartItemProduct;
