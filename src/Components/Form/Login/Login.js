import React from 'react';
import logo from "../../../images/site-logo.png";
import form_bg from "../../../images/sheap.png";
import { Link } from "react-router-dom";
import googleLogo from "../../../images/google-logo-9824-32x32.ico";
import twitterLogo from "../../../images/logo-twitter-png-5860-32x32.ico";
import { Form } from 'react-bootstrap';

const Login = () => {
    return (
      <>
        <section
          style={{ backgroundImage: `url(${form_bg})` }}
          className="form-bg pt-5"
        >
          <Form className="container mt-5 p-5 w-50 border shadow-lg form">
            <div>
              <img src={logo} alt="" className="img-fluid pb-4" />
            </div>
            <h2 className="fw-bold big-text">Sign In</h2>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
                required
              />
              <label htmlFor="floatingInputCustom">Email</label>
            </Form.Floating>
            <Form.Floating>
              <Form.Control
                id="floatingPasswordCustom"
                type="password"
                placeholder="Password"
                required
              />
              <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>

            <button className="btn btn-color rounded-pill my-3">Sign In</button>
            <Link to="/register" className="sign-in-design">
              <p>Please Register?</p>
            </Link>

            <div>
              <button className="btn  rounded-circle border border-info mx-3">
                <img src={googleLogo} alt="" className="img-fluid" />
              </button>
              <button className="btn rounded-circle border border-info mx-3">
                <img src={twitterLogo} alt="" className="img-fluid " />
              </button>
            </div>
          </Form>
        </section>
      </>
    );
};

export default Login;