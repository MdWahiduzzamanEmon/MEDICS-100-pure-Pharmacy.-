import React from 'react';
import bg from '../../images/sheap.png'
import aboutdct from '../../images/about-dct.png'
import Experience from '../Experience/Experience';
import Brand from '../Home/Brand/Brand';
const AboutUs = () => {
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
          <h1 className="fw-bold big-text">
            Using Advanced Technology, We can give You the Smile you've Always
            Wanted.
          </h1>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <img src={aboutdct} alt="" className="img-fluid mt-5" />
            </div>
            <div className="col-md-6 text-start">
              <h3 className="fw-bold big-text py-3">
                About our Pharmacy Doctor-
              </h3>
              <p className="p-text">
                A doctor typically works very long hours and has to be available
                for emergencies. These hours are spent seeing patients in an
                office-based setting, running tests as well as interpreting
                them, prescribing medicine or treatments, doing rounds in the
                hospital, making notes on patient's physical conditions,
                advising patients on how to stay healthy and talking to them
                about further treatment. They keep up to date by taking classes
                and regularly reading books and medical journals.
              </p>
              <p className="p-text">
                Do you thrive in situations where you can interact with and help
                people? Are you interested in maintaining and restoring people's
                health through the practice of medicine? You may want to
                consider a career as a doctor! There is a specific type of
                doctor for almost every major system located in the human body.
                Regardless of specialty, doctors face the challenge of
                diagnosing and treating human disease, ailments, injuries, pain,
                or other conditions. This is done by listening to the patient,
                understanding the problem, and then using their scientific
                expertise to know how best to treat the ailment or concern.
              </p>
            </div>
          </div>
          <div className="py-5">
            <Experience />
          </div>
          <div>
            <Brand />
          </div>
        </div>
      </div>
    );
};

export default AboutUs;