import React from 'react';
import { Col, Form, Row } from "react-bootstrap";
import { useAddCart } from '../../Context/AddtoCart';
import useAuth from '../../Hooks/useAuth';
import bg from '../../images/sheap.png'
import CartItemProduct from './CartItemProduct';
import CartTOtalPrice from './CartTOtalPrice';
const CartItem = () => {
  const { user } = useAuth();
  const { cartProduct } = useAddCart();
  return (
    <div
      className="mt-5"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-5 text-start">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={user?.email}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={user?.displayName}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <button className="btn btn-outline-success fw-bold" type="submit">
                Save Details
              </button>
            </Form>
          </div>
          <div className="col-md-7 mt-4">
            <div className="border shadow-lg py-4">
              <h5 className="fw-bold">Cart Product</h5>
              <div className="container">
                {cartProduct.map((cart) => (
                    <CartItemProduct
                        key={ cart.id}
                    cart={cart}
                  ></CartItemProduct>
                ))}
                <CartTOtalPrice/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;