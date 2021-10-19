import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllProducts from '../AllProducts/AllProducts';
import Error from '../Eroor/Error';
import Login from '../Form/Login/Login';
import Register from '../Form/Register/Register';
import Header from '../Home/Header/Header';
import Home from '../Home/Home/Home';
import ProductDetails from '../ProductDetails/ProductDetails';
import PrivateRoute from '../../PrivateRoute/PrivateRoute'
import Footer from '../Footer/Footer';
import CartItem from '../CartItem/CartItem';
import SuccessfulOrder from '../SuccessfulOrder/SuccessfulOrder';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import Blog from '../Blog/Blog';


const Routing = () => {
    return (
      <div>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/allproducts">
              <AllProducts />
            </Route>
            <PrivateRoute path="/productDetails/:productID">
              <ProductDetails />
            </PrivateRoute>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/signin">
              <Login />
            </Route>
            <Route path="/cartitem">
              <CartItem />
            </Route>
            <Route path="/ordersuccess">
              <SuccessfulOrder />
            </Route>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <PrivateRoute path="/conatctus">
              <ContactUs />
            </PrivateRoute>
            <PrivateRoute path="/blog">
              <Blog />
            </PrivateRoute>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
};

export default Routing;