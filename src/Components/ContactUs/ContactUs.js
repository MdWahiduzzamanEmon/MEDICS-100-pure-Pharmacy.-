import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import bg from '../../images/sheap.png'
const ContactUs = () => {
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
          <h2 className="fw-bold big-text text-decoration-underline">
            Get In touch for any kind of Information
          </h2>
          <div className="row ">
            <div className="col-md-6 text-start py-5">
              <h4 className="fw-bold big-text">Contact us-</h4>
              <p className="p-text py-3">
                Your email address will not be published. Required fields are
                marked *
              </p>

              <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Name" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <button className="btn btn-color mt-4">Submit Comment</button>
            </div>
            <div className="col-md-6 text-start mt-5">
                        <div className="row">
                            <h3 className="fw-bold big-text">Our Branches--</h3>
                <div className="col-md-6 col-6 border-end border-bottom p-3">
                  <h5 className="fw-bold">Pharmacy City Center</h5>
                  <p className="p-text">Monday to Sunday 7 am to 9 pm</p>
                  <p className="p-text">
                    45 Hudson Street Villa Rica, GA 30180
                  </p>
                </div>
                <div className="col-md-6 col-6  border-bottom p-3">
                  <h5 className="fw-bold">Pharmacy Prime</h5>
                  <p className="p-text">Monday to Sunday 7 am to 9 pm</p>
                  <p className="p-text">
                    45 Hudson Street Villa Rica, GA 30180
                  </p>
                </div>
                <div className="col-md-6 col-6 border-bottom border-end p-3">
                  <h5 className="fw-bold">Pharmacy New</h5>
                  <p className="p-text">Monday to Sunday 7 am to 9 pm</p>
                  <p className="p-text">
                    45 Hudson Street Villa Rica, GA 30180
                  </p>
                </div>
                <div className="col-md-6 col-6 border-bottom p-3">
                  <h5 className="fw-bold">Pharmacy Delta</h5>
                  <p className="p-text">Monday to Sunday 7 am to 9 pm</p>
                  <p className="p-text">
                    45 Hudson Street Villa Rica, GA 30180
                  </p>
                </div>
                <div className="col-md-6 col-6 border-bottom border-end p-3">
                  <h5 className="fw-bold">Pharmacy Aqua</h5>
                  <p className="p-text">Monday to Sunday 7 am to 9 pm</p>
                  <p className="p-text">
                    45 Hudson Street Villa Rica, GA 30180
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContactUs;