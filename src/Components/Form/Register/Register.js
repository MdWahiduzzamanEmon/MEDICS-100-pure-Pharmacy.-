import React from 'react';
import { Form } from 'react-bootstrap';
import logo from '../../../images/site-logo.png'
import form_bg from '../../../images/sheap.png'
import { Link, useLocation, useHistory } from "react-router-dom";
import googleLogo from '../../../images/google-logo-9824-32x32.ico'
import twitterLogo from '../../../images/logo-twitter-png-5860-32x32.ico'
import useAuth from '../../../Hooks/useAuth';
import { toast } from 'react-toastify';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
const Register = () => {
  const {
    googleSignIn,
    twitterSignIn,
    setLoading,
    setUser,
    handleEmail,
    handlePassword,
    password,
    email,
    handleName,
    name,
    
  } = useAuth();
  const auth = getAuth();
  const location = useLocation();
  const redirect_url = location?.state?.from || "/home";
  const history = useHistory();
  // google
  const redirectGoogleSign = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        toast("Log in Succesfull. Enjoy!!");
        history.push(redirect_url);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  // twitter
  const redirectTwitterSign = () => {
    twitterSignIn()
      .then((result) => {
        setUser(result.user);
        toast("Log in Succesfull. Enjoy!!");
        history.push(redirect_url);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  // email pass authentication

  const handletoSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      toast("Password must be atleast 6 characters long");
      }
      if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        toast("Two uppercase letters");
        return;
      }
      if (!/(?=.*[!@#$&*])/.test(password)) {
        toast("One special case letter (!@#$&*)");
        return;
      }
    emailPassRegistration();

    console.log(email, name, password);
  };
  // registration
  const emailPassRegistration = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        toast("Registration Success. Enjoy!");
        updateName();
        history.push(redirect_url);
        // ...
      })
      .catch((error) => {
        toast(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // update name

  const updateName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then(() => {
      toast("Name Updated!!");
    });
  };

  return (
    <>
      <section
        style={{ backgroundImage: `url(${form_bg})` }}
        className="form-bg pt-5 mt-5"
      >
        <div className="container mt-5 p-5 w-75 border shadow-lg form">
          <Form onSubmit={handletoSubmit}>
            <div>
              <img src={logo} alt="" className="img-fluid pb-4" />
            </div>
            <h2 className="fw-bold big-text">Register</h2>
            {/*get user name  */}
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="Enter your name"
                required
                onChange={handleName}
              />
              <label htmlFor="floatingInputCustom">Name</label>
            </Form.Floating>

            {/* get user email  */}
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
                required
                onChange={handleEmail}
              />
              <label htmlFor="floatingInputCustom">Email</label>
            </Form.Floating>

            {/* get user password */}
            <Form.Floating>
              <Form.Control
                id="floatingPasswordCustom"
                type="password"
                placeholder="Password"
                required
                onChange={handlePassword}
              />
              <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>

            <button className="btn btn-color rounded-pill my-3">Sign Up</button>
          </Form>
          <Link to="/signin" className="sign-in-design">
            <span >Already Sign Up?</span>
          </Link>
          <div>
            <button
              className="btn  rounded-circle border border-info mx-3 mt-3"
              onClick={redirectGoogleSign}
            >
              <img src={googleLogo} alt="" className="img-fluid" />
            </button>
            <button
              className="btn rounded-circle border border-info mx-3 mt-3"
              onClick={redirectTwitterSign}
            >
              <img src={twitterLogo} alt="" className="img-fluid " />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;