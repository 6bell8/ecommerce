import React from "react";

import { Product, FooterBanner, HeroBanner } from "../components";

export const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className="products-heading">
        <h2>베스트 인기 상품</h2>
        <p>다양한 종류의 스피커</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2"].map((product) => product)}
      </div>
      <FooterBanner />
    </div>
  );
};

export default Home;
