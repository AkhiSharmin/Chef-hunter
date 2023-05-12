import React from "react";
import OurDishes from "../OurDishes/OurDishes";
import OurMenu from "../OurMenu/OurMenu";
import Banner from "../Banner/Banner";
import Chefs from "../Chefs/Chefs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Chefs></Chefs>
      <OurMenu></OurMenu>
      <OurDishes></OurDishes>
    </div>
  );
};

export default Home;
