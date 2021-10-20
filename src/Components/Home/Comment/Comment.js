import React from 'react';
import { Carousel } from 'react-bootstrap';
import capsol from '../../../images/happy.jpg'
import cutomer1 from '../../../images/customer-1.png'
import cutomer2 from '../../../images/customer-2.png'
import cutomer3 from '../../../images/customer-3.png'
import bg from "../../../images/sheap.png";

const Comment = () => {
    return (
      <section
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mb-5">
          <section>
            <h1 className="fw-bold big-text py-4 text-uppercase">
              Happy Client says About us
            </h1>
            <p className="p-text">
              Great Solution for Revelstoke Humane Society. Perfect website
              integration tool for non-technical volunteers adding
              pics/descriptions of animals for adoption without having to update
              our website.
            </p>
          </section>
          <Carousel className="d-md-block d-none">
            <Carousel.Item interval={1000}>
              <img
                className="d-block img-fluid mx-auto rounded-3"
                src={capsol}
                alt="First slide"
              />
              <Carousel.Caption className="text-dark">
                <h4 className=" fw-bold">
                  Great Solution for Revelstoke Humane Society. Perfect website
                  integration tool for non-technical volunteers adding
                  pics/descriptions of animals for adoption without having to
                  update our website.
                </h4>
                <img src={cutomer1} alt="" />
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={500}>
              <img
                className="d-block img-fluid mx-auto rounded-3"
                src={capsol}
                alt="First slide"
              />
              <Carousel.Caption className="text-dark">
                <h4 className=" fw-bold">
                  Great customer service! Responded very promptly with info that
                  helped me get my IG feed back! Problem wasn't with them, was
                  just a temporary glitch.
                </h4>
                <img src={cutomer2} alt="" />
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <img
                className="d-block img-fluid mx-auto rounded-3"
                src={capsol}
                alt="First slide"
              />
              <Carousel.Caption className="text-dark">
                <h4 className=" fw-bold">
                  Great customer service! Responded very promptly with info that
                  helped me get my IG feed back! Problem wasn't with them, was
                  just a temporary glitch.
                </h4>
                <img src={cutomer1} alt="" />
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block img-fluid mx-auto rounded-3"
                src={capsol}
                alt="First slide"
              />
              <Carousel.Caption className="text-dark">
                <h4 className=" fw-bold">
                  Great Solution for Revelstoke Humane Society. Perfect website
                  integration tool for non-technical volunteers adding
                  pics/descriptions of animals for adoption without having to
                  update our website.
                </h4>
                <img src={cutomer3} alt="" />
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    );
};

export default Comment;
