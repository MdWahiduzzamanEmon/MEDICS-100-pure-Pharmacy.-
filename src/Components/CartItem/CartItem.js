import React from 'react';
import { Col, Form, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useAddCart } from '../../Context/AddtoCart';
import useAuth from '../../Hooks/useAuth';
import bg from '../../images/sheap.png'
import CartItemProduct from './CartItemProduct';
import CartTOtalPrice from './CartTOtalPrice';
import { useHistory } from "react-router";
import { toast } from 'react-toastify';


const CartItem = () => {
  const { user } = useAuth();
  const { cartProduct } = useAddCart();
  const [setAddress]=React.useState("")
  const [city, setCity] = React.useState("");
  const history = useHistory();
// adress value 
  const getAdddress = (e) => {
    setAddress(e.target.value)
  }
  // city value 
  const getCity = (e) => {
    setCity(e.target.value)
    // console.log(e.target.value);
  }
  const handleOrder = (e) => {
    e.preventDefault();
    // console.log(city, address);
  }
  const ordersuccess = () => {
    history.push("/ordersuccess");
    toast("Purchase order successfully. Wait for deliver!");
  }

  return (
    <div
      className="mt-5 pt-5"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <h2 className="fw-bold big-text">
        Check Your Information and Confirm Your Order
      </h2>
      <div className="container mt-5 pt-5">
        <div className="row align-items-center">
          <div className="col-md-5 text-start">
            <Form onSubmit={handleOrder}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={user?.email}
                    readOnly
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={user?.displayName}
                    readOnly
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  placeholder="1234 Main St"
                  onChange={getAdddress}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control onBlur={getCity} />
                </Form.Group>
              </Row>

              <button className="btn btn-outline-success fw-bold" type="submit">
                Save Details
              </button>
            </Form>
          </div>
          <div className="col-md-7 mt-4">
            <div className="border shadow-lg py-4 rounded-3">
              <h5 className="fw-bold">Cart Product</h5>
              <div className="container">
                {cartProduct.map((cart) => (
                  <CartItemProduct key={cart.id} cart={cart}></CartItemProduct>
                ))}
                <CartTOtalPrice />
                {city ? (
                  <button
                    className="btn btn-color fw-bold"
                    onClick={ordersuccess}
                  >
                    Confirm order
                  </button>
                ) : (
                  <button className="btn btn-outline-success fw-bold disabled">
                    Confirm order
                  </button>
                )}
                <Link to="/allproducts">
                  {" "}
                  <button className="btn mt-md-0 mt-3 btn-color fw-bold mx-3">
                    Buy more products
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;