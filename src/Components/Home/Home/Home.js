import AOS from "aos";
import React, { useEffect } from "react";
import Experience from "../../Experience/Experience";
import TopSellingProduct from "../../TopSellingProduct/TopSellingProduct";
import Comment from "../../Home/Comment/Comment";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
import Products from "../Products/Products";
import Brand from "../Brand/Brand";

const Home = () => {
  // animation
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      {/* all home components  */}
      <Banner />
      <Banner2 />
      <Products />
      <Experience />
      <TopSellingProduct />
      <Comment />
      <Brand/>
    </div>
  );
};

export default Home;
