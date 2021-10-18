import AOS from "aos";
import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
import Products from "../Products/Products";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Banner />
      <Banner2 />
      <Products />
    </div>
  );
};

export default Home;
