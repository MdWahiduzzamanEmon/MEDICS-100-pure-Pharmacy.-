import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../Hooks/useData';
import Product from '../Home/Product/Product';
import bg from '../../images/sheap.png'
const AllProducts = () => {
    const { products } = useData();
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mt-5 pt-5">
        <div>
          <h1 className="mt-4 fw-bold big-text text-uppercase">Check Out All Products</h1>
        </div>
        <Row xs={1} md={4} className="g-4 py-5">
          {products?.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AllProducts;