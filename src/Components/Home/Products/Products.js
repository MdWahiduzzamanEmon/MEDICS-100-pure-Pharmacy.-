import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useData from '../../../Hooks/useData';
import Product from '../Product/Product';

const Products = () => {
    const { products, filterProduct, setFilterProduct } = useData();
    
    const handletoProduct = (quality) => {
        const value = products.filter(product => product.category.includes(quality));
        setFilterProduct(value);
    }
    return (
      <div className="container py-5" id="product">
        <h2>Featured Products</h2>
        <div>
          <button
            className="btn btn-warning fw-bold rounded mx-3"
            onClick={() => handletoProduct("all")}
          >
            All
          </button>
          <button
            className="btn btn-warning fw-bold rounded mx-3"
            onClick={() => handletoProduct("new")}
          >
            New
          </button>
        </div>
        <div className="pt-5">
          <Row xs={1} md={4} className="g-4">
            {filterProduct?.slice(0, 8).map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </Row>
            </div>
            <div>
                <Link to='/allproducts'>
                    <button className="btn btn-color mt-5 fw-bold rounded-pill">All Product </button>
                </Link>
            </div>
      </div>
    );
};

export default Products;