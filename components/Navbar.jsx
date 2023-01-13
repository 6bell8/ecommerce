import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
          <svg
            width="47"
            height="37"
            viewBox="0 0 72 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 52V14.35H9.2L9.65 20.25L7.85 19.8C8.05 18.6667 8.6 17.65 9.5 16.75C10.4333 15.85 11.5833 15.1333 12.95 14.6C14.3167 14.0667 15.8 13.8 17.4 13.8C19.6333 13.8 21.6167 14.4 23.35 15.6C25.0833 16.7667 26.45 18.3833 27.45 20.45C28.45 22.5167 28.95 24.9167 28.95 27.65C28.95 30.3167 28.45 32.7 27.45 34.8C26.45 36.8667 25.0667 38.5 23.3 39.7C21.5333 40.8667 19.5167 41.45 17.25 41.45C15.75 41.45 14.3167 41.1833 12.95 40.65C11.6167 40.0833 10.4833 39.3333 9.55 38.4C8.65 37.4333 8.06667 36.35 7.8 35.15L9.9 34.45V52H0.5ZM14.75 33.8C15.8167 33.8 16.7333 33.55 17.5 33.05C18.2667 32.55 18.85 31.85 19.25 30.95C19.65 30.0167 19.85 28.9167 19.85 27.65C19.85 26.35 19.65 25.25 19.25 24.35C18.85 23.4167 18.2667 22.7 17.5 22.2C16.7333 21.7 15.8167 21.45 14.75 21.45C13.6833 21.45 12.7667 21.7 12 22.2C11.2333 22.6667 10.65 23.3667 10.25 24.3C9.85 25.2333 9.65 26.35 9.65 27.65C9.65 28.9167 9.85 30.0167 10.25 30.95C10.65 31.85 11.2333 32.55 12 33.05C12.7667 33.55 13.6833 33.8 14.75 33.8ZM31.9949 51.75L28.4449 44.55C30.0783 44.55 31.3283 44.3667 32.1949 44C33.0949 43.6333 33.7116 42.9833 34.0449 42.05C34.3783 41.1167 34.5449 39.7833 34.5449 38.05V14.35H43.8449V40.25C43.8449 43.0167 43.3949 45.2333 42.4949 46.9C41.6283 48.6 40.3116 49.8333 38.5449 50.6C36.8116 51.3667 34.6283 51.75 31.9949 51.75ZM39.3449 9.3C37.6449 9.3 36.3283 8.91667 35.3949 8.15C34.4616 7.35 33.9949 6.23333 33.9949 4.8C33.9949 3.46666 34.4616 2.38333 35.3949 1.55C36.3616 0.683331 37.6783 0.249997 39.3449 0.249997C41.0116 0.249997 42.3116 0.649998 43.2449 1.45C44.2116 2.21667 44.6949 3.33333 44.6949 4.8C44.6949 6.13333 44.2116 7.21667 43.2449 8.05C42.2783 8.88333 40.9783 9.3 39.3449 9.3ZM60.0395 41.5C57.2728 41.5 54.8395 41.0667 52.7395 40.2C50.6395 39.3333 49.0061 38.2167 47.8395 36.85L53.2895 32.15C54.3561 33.1167 55.5561 33.8333 56.8895 34.3C58.2561 34.7667 59.4561 35 60.4895 35C60.8561 35 61.1895 34.9667 61.4895 34.9C61.7895 34.8333 62.0228 34.7333 62.1895 34.6C62.3895 34.4333 62.5395 34.2667 62.6395 34.1C62.7728 33.9 62.8395 33.6833 62.8395 33.45C62.8395 32.8833 62.5561 32.45 61.9895 32.15C61.6895 32.0167 61.1895 31.85 60.4895 31.65C59.8228 31.4167 58.9228 31.1667 57.7895 30.9C56.3895 30.5333 55.1395 30.1 54.0395 29.6C52.9395 29.0667 52.0061 28.45 51.2395 27.75C50.5061 27.05 49.9228 26.25 49.4895 25.35C49.0895 24.4167 48.8895 23.4 48.8895 22.3C48.8895 20.9667 49.1895 19.7833 49.7895 18.75C50.3895 17.7167 51.2228 16.8333 52.2895 16.1C53.3561 15.3333 54.5561 14.7667 55.8895 14.4C57.2228 14 58.5895 13.8 59.9895 13.8C61.5561 13.8 63.0228 13.9667 64.3895 14.3C65.7895 14.6 67.0895 15.05 68.2895 15.65C69.5228 16.2167 70.6228 16.9167 71.5895 17.75L66.7895 23.05C66.2228 22.55 65.5561 22.0833 64.7895 21.65C64.0561 21.2167 63.2895 20.8667 62.4895 20.6C61.6895 20.3 60.9395 20.15 60.2395 20.15C59.8061 20.15 59.4395 20.1833 59.1395 20.25C58.8395 20.3167 58.5895 20.4167 58.3895 20.55C58.1895 20.6833 58.0395 20.85 57.9395 21.05C57.8395 21.25 57.7895 21.4667 57.7895 21.7C57.7895 22 57.8728 22.2833 58.0395 22.55C58.2061 22.8167 58.4728 23.0333 58.8395 23.2C59.1395 23.3667 59.6395 23.5833 60.3395 23.85C61.0728 24.0833 62.1228 24.3833 63.4895 24.75C65.0228 25.1833 66.3561 25.6833 67.4895 26.25C68.6228 26.8167 69.5395 27.4667 70.2395 28.2C70.7395 28.7667 71.1228 29.4 71.3895 30.1C71.6561 30.7667 71.7895 31.5167 71.7895 32.35C71.7895 34.1167 71.2728 35.7 70.2395 37.1C69.2395 38.4667 67.8561 39.55 66.0895 40.35C64.3228 41.1167 62.3061 41.5 60.0395 41.5Z"
              fill="#50D76E"
            />
          </svg>
        </Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
