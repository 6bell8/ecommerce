import React from "react";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">작은 텍스트</p>
        <h3>중간 텍스트</h3>
        <img src="" alt="headphones" className="hero-banner-image" />
        <div>
          <Link href="/product/ID">
            <button type="button">Button text</button>
          </Link>
          <div className="desc"></div>
          <h5>세부사항</h5>
          <p>세부사항</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
