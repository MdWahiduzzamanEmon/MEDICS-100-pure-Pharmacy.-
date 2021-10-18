import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllProducts from '../AllProducts/AllProducts';
import Error from '../Eroor/Error';
import Header from '../Home/Header/Header';
import Home from '../Home/Home/Home';

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
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </Router>
      </div>
    );
};

export default Routing;