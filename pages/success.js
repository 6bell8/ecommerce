import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { runReality } from "../lib/utils";

import { useStateContext } from "../context/StateContext";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  //   const { order, setorder } = useState(null);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runReality();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>주문 해주셔서 감사합니다.</h2>
        <p className="email-msg">주문사항은 이메일을 확인하세요!</p>
        <p className="description">다른 문의 사항은 이메일문의로 부탁합니다.</p>
        <a href="parkgutime@gmail.com" className="email">
          parkgutime@gmail.com
        </a>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            쇼핑 계속하기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
