import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/footer-logo.png'
const Footer = () => {
    return (
      <div>
        <div className="footer-bg py-5 mt-5">
          <div className="container">
            <div className="row text-white  text-start">
              <div className="col-md-3 col-6">
                <div>
                  <img src={logo} alt="" />
                </div>
                <p className="py-3">A trusted pharmacy for world people</p>
                <div>
                  <p>
                    <i className="fas fa-map-marker-alt medium-text me-3"></i>{" "}
                    11 Georgian Rd, 58/A New York City
                  </p>
                  <p>
                    <i className="fas fa-phone medium-text me-3"></i>
                    +123-9666 1985
                  </p>
                  <p>
                    <i className="fas fa-envelope medium-text me-3"></i>
                    wahedemon09@gmail.com
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <h3 className="fw-bold mb-3">Explore</h3>
                <p>
                  <Link to="/home" className="text-decoration-none text-white">
                    Home
                  </Link>
                </p>
                <p>
                  <Link
                    to="/products"
                    className="text-decoration-none text-white"
                  >
                    Products
                  </Link>
                </p>
                <p>
                  <Link
                    to="/aboutus"
                    className="text-decoration-none text-white"
                  >
                    About Us
                  </Link>
                </p>
                <p>
                  <Link
                    to="/contact"
                    className="text-decoration-none text-white"
                  >
                    Contact
                  </Link>
                </p>
              </div>
              <div className="col-md-3 col-6">
                <h3 className="fw-bold mb-3">Links</h3>
                <p>Make An Appointment</p>
                <p> Free Consultation</p>
                <p> FAQs</p>
                <p>Privacy Policy</p>
              </div>
              <div className="col-md-3 col-6">
                <h3 className="fw-bold mb-3">Subscribe</h3>
                <p>Subscribe to get the Latest News from us.</p>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3 text-dark"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <div>
                  <span>
                    <a
                      href="https://www.facebook.com/"
                      className=" text-info mx-3 fs-4"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://www.youtube.com/"
                      className="text-info mx-3 fs-4"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://www.instagram.com/"
                      className="text-info mx-3 fs-4"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://www.linkedin.com/"
                      className="text-info mx-3 fs-4"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="bg-info py-3">
          <p className="pt-2">2021 &copy; all rights reserved by Medics||Md Wahiduzzaman Emon</p>
        </section>
      </div>
    );
};

export default Footer;