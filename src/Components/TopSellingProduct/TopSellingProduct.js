import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../Hooks/useData';
import Product from '../Home/Product/Product';
import bg from '../../images/sheap.png'
const TopSellingProduct = () => {
    const { products}= useData();
    return (
      <div className="container mb-5">
        <div
          className="pt-5"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div >
            <h1 className="py-3 fw-bold big-text text-uppercase">
              Top Selling Products
            </h1>
            <p className="p-text pb-3 mb-3">
              Ecommerce business owners and marketers alike are susceptible to a
              common copywriting mistake (even professional copywriters make it
              sometimes): writing product descriptions that simply describe your
              products.
            </p>
          </div>
          {/* top selling product  */}
          <Row xs={1} md={2} className="g-4" >
            {products?.slice(5, 9).map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </Row>
        </div>
      </div>
    );
};

export default TopSellingProduct;