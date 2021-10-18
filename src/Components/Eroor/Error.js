import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../images/404-error.webp'
const Error = () => {
    return (
      <div className="d-flex flex-column">
        <div>
          <img src={error} alt="" className="img-fluid" />
        </div>
        <div>
          <Link to="/home">
            <button className="btn btn-color fw-bold rounded-pill">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    );
};

export default Error;