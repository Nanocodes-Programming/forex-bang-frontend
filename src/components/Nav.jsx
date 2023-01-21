import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Nav = () => {
  const [navScroll, setNavScroll] = useState(false);

  // changenavbg
  const changeBg = () => {
    window.scrollY >= 80 ? setNavScroll(true) : setNavScroll(false);
  };
  window.addEventListener("scroll", changeBg);
  return (
    <>
      <div
        className={
          navScroll
            ? "flex card_content items-center justify-between p-[1rem] px-[3rem] h-[80px] fixed top-0 w-full z-20 bg-[#030C4B]"
            : "flex bg-transparent card_content items-center justify-between p-[1rem] px-[3rem] fixed top-0 w-full z-20 bg-[#030C4B]"
        }
      >
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="main" className="w-[60px] h-[60px]" />
            <h2 className="text-white font-bold mx-2">
              Lumen Forex <br />
              Academy
            </h2>
          </div>
        </Link>
        <ul className="flex justify-between items-center text-white">
          <Link to="/mentorship">
            <li className="p-[0.5rem] font-bold font-2xl">Mentorship</li>
          </Link>
          <Link to="/signal">
            <li className="p-[0.5rem]  font-bold font-2xl">Signals</li>
          </Link>
          <Link to="/exchange">
            <li className="p-[0.5rem] font-bold font-2xl">Exchange</li>
          </Link>
          <Link to="/about">
            <li className="p-[0.5rem]  font-bold font-2xl">About us </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Nav;
