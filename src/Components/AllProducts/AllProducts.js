import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../Hooks/useData';
import Product from '../Home/Product/Product';

const AllProducts = () => {
    const { products } = useData();
    return (
      <div className="container">
        <div>
          <h1 className="mt-4 fw-bold big-text text-uppercase">All Products</h1>
        </div>
        <Row xs={1} md={4} className="g-4 py-5">
          {products?.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </Row>
      </div>
    );
};

export default AllProducts;