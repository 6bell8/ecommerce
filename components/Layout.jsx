import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

//공통으로 들어갈 컨텐츠 안에 children 하위 컴포넌트 불러오기
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <link rel="icon" href="%PUBLIC_URL%/../pjs.svg" />
        <title>prk store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
