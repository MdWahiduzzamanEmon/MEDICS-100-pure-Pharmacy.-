import React, { useContext, useState } from "react";

export const AuthAddCart = React.createContext();

export const useAddCart = () => {
  return useContext(AuthAddCart);
};

const AddtoCart = ({ children }) => {
    const [cartProduct, setCartProduct] = useState([]);


    // console.log(cartProduct);

// cart product add 
  const handleToAddToCart = (product) => {
      const adding = [ ...cartProduct, {...product}] ;
    setCartProduct(adding);
  };

  const value = {
    handleToAddToCart,
    cartProduct,
    setCartProduct,
  };

  return <AuthAddCart.Provider value={value}>{children}</AuthAddCart.Provider>;
};

export default AddtoCart;
