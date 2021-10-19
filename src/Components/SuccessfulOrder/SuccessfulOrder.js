import React from 'react';
import gifOrderImg from '../../images/loading-delivery.gif'
import Iframe from "react-iframe";
import bg from '../../images/sheap.png'
const SuccessfulOrder = () => {
    return (
      <div
        className="mt-5 pt-5 big-text"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <section>
          <h1 className="fw-bold mt-5 ">Your Order is on its way!</h1>
          <div>
            <img src={gifOrderImg} alt="" className="img-fluid" />
          </div>

          <div>
            <h3 className="fw-bold">Product Location</h3>
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d911599.1585465381!2d80.2104696993264!3d26.810223285185455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sreact%20location%20tracking!5e0!3m2!1sen!2sbd!4v1634641388611!5m2!1sen!2sbd"
              width="80%"
              height="400px"
              id="myId"
              className="myClassname rounded-3"
              display="initial"
              position="relative"
            />
          </div>
        </section>
      </div>
    );
};

export default SuccessfulOrder;