import {ProgressBar} from "react-bootstrap";
import React from 'react';
import banner from '../../images/banner-2.png'
import bg from '../../images/sheap.png'



const Experience = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >

        {/* experiences  */}
        <div className="container py-5 mb-4">
          <div
            className="row justify-content-center align-items-center"
            data-aos="fade-up"
          >
            <div className="col-md-6 text-start">
              <h1 className="fw-bold big-text">
                We have 25 Years of Experience
              </h1>
              <p className="p-text">
                Pharmacy is the clinical health science that links medical
                science with chemistry and it is charged with the discovery,
                production, disposal, safe and effective use, and control of
                medications and drugs.
              </p>
              <div>
                <h6 className="fw-bold big-text">Medical Private (70)</h6>
                <ProgressBar
                  variant="info"
                  className="progress"
                  animated
                  now={70}
                />
              </div>
              <div className="py-3">
                <h6 className="fw-bold big-text">Patients Served (85)</h6>
                <ProgressBar variant="info" animated now={85} />
              </div>
              <div>
                <h6 className="fw-bold big-text">Satisfied Patients (95)</h6>
                <ProgressBar variant="info" animated now={95} />
              </div>
            </div>
            <div className="col-md-6 mt-md-0 mt-5">
              <img src={banner} alt="" className="img-fluid rounded-3" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Experience;