import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAddCart } from '../../Context/AddtoCart';
import useData from '../../Hooks/useData';
import bg from '../../images/sheap.png'
import TopSellingProduct from '../TopSellingProduct/TopSellingProduct';

const ProductDetails = () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
    const { productID } = useParams();
  const { handleToAddToCart } = useAddCart();
    const { products } = useData();
  const [indivisualProduct, setIndivisualProduct] = useState();
  const [newQuantity, setNewQuantity] = useState(1);
  const history =useHistory();
    // console.log(products);
    useEffect(() => {
      const Product = products?.find(
        (product) => product?.id === parseInt(productID)
      );
      setIndivisualProduct(Product);
    }, [products, productID]);
    
  if (indivisualProduct) {
    indivisualProduct["quantity"] = newQuantity;
  }
  //  minus 
  const minusProduct = () => {
    if (indivisualProduct.quantity < 1) {
      return;
    } else {
      const newValue = indivisualProduct["quantity"] - 1;
      setNewQuantity(newValue);
    }
     
  };
  
  // plus 
 const plusProduct = () => {
   const newValue = indivisualProduct["quantity"] + 1;
   setNewQuantity(newValue);
  };
  // new price 
  const newPrice = indivisualProduct?.price * indivisualProduct?.quantity;
  
    return (
      <>
        <section
          className="py-5 mt-5"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}>
         {/* product details  */}
          <div className="container pt-5">
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
                    Price: ${newPrice.toFixed(2)}
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
                  <div>
                    <div>
                      <span onClick={minusProduct}>
                        <i className=" fas fa-minus-circle text-info fs-5 cursor"></i>
                      </span>
                      <span className="fw-bold big-text mx-3">
                        {newQuantity}
                      </span>
                      <span onClick={plusProduct}>
                        <i className="fas fa-plus-circle text-info fs-5 cursor"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <button
                  className="btn btn-color mx-2"
                  // api update 
                    onClick={() => {
                      indivisualProduct.price = newPrice;
                      history.push("/cartitem");
                      handleToAddToCart(indivisualProduct);
                      toast("Wow! Product Add to cart successfully");
                    }}
                  >
                    <i className="fas fa-shopping-cart text-warning me-2"></i>
                    Add to Cart
                  </button>
                  <Link to="/allproducts">
                    <button className="btn btn-color mx-2">
                      Back To Product
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <TopSellingProduct />
          </div>
        </section>
      </>
    );
};

export default ProductDetails;