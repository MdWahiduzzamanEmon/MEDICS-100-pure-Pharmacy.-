import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';
import { Spinner } from "react-bootstrap";


const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <Spinner animation="border" variant="info" />;
    }
    
 return (
   <Route
     {...rest}
     render={({ location }) =>
        user?.displayName ? (
         children
       ) : (
         <Redirect
           to={{
             pathname: "/login",
             state: { from: location },
           }}
         />
       )
     }
   />
 );
};

export default PrivateRoute;