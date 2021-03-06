import React from 'react';
import { Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name,price,description,image,discount,id} = props.product;
    return (
      <div>
        <Col>
          <Card className="py-3 border-design">
            <div className="position-relative">
              <img src={image} className="image-height " alt="" />
              <h4 className="position-absolute top-0 start-0 discount-design">
                {discount}
              </h4>
            </div>
            <Card.Body className="text-start">
              <Card.Title className="big-text fw-bold">{name}</Card.Title>
              <Card.Text className="p-text">
                {description.slice(0, 90)}
              </Card.Text>
              <h2 className="medium-text fw-bold">${price}</h2>
            </Card.Body>
            <Link to={`/productDetails/${id}`}>
              <button className="w-50 mx-auto btn btn-color">
                <i className="fas fa-pills text-warning me-2"></i>Details
              </button>
            </Link>
          </Card>
        </Col>
      </div>
    );
};

export default Product;