import React from "react";
import Download from "./Download";
import Footer from "./Footer";
import Nav from "./Nav";


const Layout = ({ children }) => {
  return (
    <>
      <section className=" bg-[#030C4B]">
        <Nav />
        {children}
        <Download />
        <Footer />
      </section>
    </>
  );
};

export default Layout;
