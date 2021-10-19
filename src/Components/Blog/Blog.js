import React from 'react';
import bg from '../../images/sheap.png'
import blog1 from '../../images/blog-img-1.jpg'
import blog2 from '../../images/blog-img-2.jpg'
import Banner2 from '../Home/Banner2/Banner2';
import Brand from '../Home/Brand/Brand';
const Blog = () => {
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
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4 text-start">
              <h4 className="big-text fw-bold">Categories</h4>
              <li className="p-text py-3">Dental Care</li>
              <li className="p-text py-3">Neurology</li>
              <li className="p-text py-3">General Surgery</li>
              <li className="p-text py-3">Rental Medicine</li>
              <li className="p-text py-3">Orthopaedic</li>
              <li className="p-text py-3">Eye Specialist</li>
            </div>
            <div className="col-md-8 text-start">
              <div>
                <img src={blog1} alt="" className="rounded-3 img-fluid" />
                <p className="p-text pt-4">
                  Efficiently myocardinate market-driven innovation via
                  open-source alignments. Dramatically engage
                  high-Phosfluorescently expedite impactful supply chains via
                  focused results. Holistically . Compellingly supply just in
                  time catalysts for change through..
                </p>
                <button className="btn btn-color my-3">Read More</button>
              </div>
              <div className="my-3">
                <img src={blog2} alt="" className="rounded-3 img-fluid" />
                <p className="p-text pt-4">
                  Efficiently myocardinate market-driven innovation via
                  open-source alignments. Dramatically engage
                  high-Phosfluorescently expedite impactful supply chains via
                  focused results. Holistically . Compellingly supply just in
                  time catalysts for change through..
                </p>
                <button className="btn btn-color my-3">Read More</button>
              </div>
              <div>
                <img src={blog1} alt="" className="rounded-3 img-fluid" />
                <p className="p-text pt-4">
                  Efficiently myocardinate market-driven innovation via
                  open-source alignments. Dramatically engage
                  high-Phosfluorescently expedite impactful supply chains via
                  focused results. Holistically . Compellingly supply just in
                  time catalysts for change through..
                </p>
                <button className="btn btn-color my-3">Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Banner2></Banner2>
        </div>
        <div>
          <Brand />
        </div>
      </div>
    );
};

export default Blog;