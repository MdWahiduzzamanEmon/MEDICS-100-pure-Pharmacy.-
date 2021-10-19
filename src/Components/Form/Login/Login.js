import React from 'react';
import logo from "../../../images/site-logo.png";
import form_bg from "../../../images/sheap.png";
import { Link, useLocation, useHistory } from "react-router-dom";
import googleLogo from "../../../images/google-logo-9824-32x32.ico";
import twitterLogo from "../../../images/logo-twitter-png-5860-32x32.ico";
import { Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import { toast } from 'react-toastify';
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
const Login = () => {

    const {
      googleSignIn,
      twitterSignIn,
      setLoading,
      setUser,
      handlePassword,
      handleEmail,
      password,
      email,
    } = useAuth();
    const location = useLocation();
    const redirect_url = location?.state?.from||"/home";
    const history = useHistory();
     const auth = getAuth();
    // google 
    const redirectGoogleSign = () => {
        googleSignIn()
            .then((result) => {
                setUser(result.user);
                toast("Log in Succesfull. Enjoy!!")
              history.push(redirect_url)
          })
            .catch((error) => { })
            .finally(() => {
                setLoading(false);
            })
    }
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
    }

// user email pass login 
    const handleToLogin = (e) => {
        e.preventDefault();
       
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            // Signed in
            toast("Log in Succesfull. Enjoy!!");
            history.push(redirect_url);
          })
          .catch((error) => {
            toast(error.message);
          })
          .finally(() => {
            setLoading(false);
          });
    }

    //reset password

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
          .then(() => {
            // 
              toast("Password reset email sent! Check your email ");
            // ..
          })
          .catch((error) => {
           
          });
    }

    return (
      <>
        <section
          style={{ backgroundImage: `url(${form_bg})` }}
          className="form-bg pt-5 mt-5"
        >
          <div className="container mt-5 p-5 w-75 border shadow-lg form">
            <Form onSubmit={handleToLogin}>
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
                  onChange={handleEmail}
                />
                <label htmlFor="floatingInputCustom">Email</label>
              </Form.Floating>
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

              <button className="btn btn-color rounded-pill my-3">
                Sign In
              </button>
            </Form>
            <Link to="/register" className="sign-in-design">
              <span>Please Register?</span>
            </Link>
            <span>
              <button
                className={
                  email
                    ? "btn btn-outline-success rounded-pill my-3 ms-3 fw-bold"
                    : "btn btn-outline-success rounded-pill my-3 ms-3 fw-bold disabled"
                }
                onClick={handleResetPassword}
              >
                Reset Password
              </button>
            </span>
            <div>
              <button
                className="btn  rounded-circle border border-info mx-3"
                onClick={redirectGoogleSign}
              >
                <img src={googleLogo} alt="" className="img-fluid" />
              </button>
              <button
                className="btn rounded-circle border border-info mx-3"
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

export default Login;