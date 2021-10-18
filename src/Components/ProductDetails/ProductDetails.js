import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useData from '../../Hooks/useData';

const ProductDetails = () => {
    const { productID } = useParams();
    
    const { products } = useData();
    const [indivisualProduct, setIndivisualProduct] = useState();
    // console.log(products);
    useEffect(() => {
      const Product = products?.find(
        (product) => product?.id === parseInt(productID)
      );
      setIndivisualProduct(Product);
    }, [products, productID]);
    
    // const { image,name,price,description} = indivisualProduct;
    // console.log(indivisualProduct);
    return (
      <>
        <section className="my-5 py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="border border-3 py-5">
                  <img
                    src={indivisualProduct?.image}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-7 text-start">
                <div className="border-bottom">
                  <h2 className="big-text fw-bold">
                    {indivisualProduct?.name}
                  </h2>
                  <h4 className="fw-bold medium-text pb-3">
                    Price: ${indivisualProduct?.price.toFixed(2)}
                  </h4>
                </div>
                <div>
                  <p className="p-text pt-4">
                    {indivisualProduct?.description}
                  </p>
                  <h6 className="fw-bold py-3">
                    <span className="big-text ">Brand Name:</span>{" "}
                    {indivisualProduct?.brand}
                  </h6>

                  <h6 className="fw-bold">
                    Quantity:{" "}
                    <input
                      type="number"
                      name=""
                      max="10"
                      min="1"
                      className="input-quantity"
                    />
                  </h6>
                </div>
                <div className="py-4">
                  <button className="btn btn-color mx-2">Add to Cart</button>
                  <Link to="/allproducts">
                    <button className="btn btn-color mx-2">
                      Back To Product
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default ProductDetails;