import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Nav = () => {
  return (
    <>
      <div className="flex bg-transparent items-center justify-between p-[1rem] px-[3rem] fixed top-0 w-full z-20">
        <div className="flex items-center">
          <img src={logo} alt="main" className="w-[60px] h-[60px]" />
          <h2 className="text-white font-bold mx-2">
            Lumen Forex <br />
            Academy
          </h2>
        </div>
        <ul className="flex justify-between items-center text-white">
          <Link to="/mentorship">
            <li className="p-[0.5rem] font-bold font-2xl">Mentorship</li>
          </Link>
          <Link to='/signal'>
            <li className="p-[0.5rem]  font-bold font-2xl">Signals</li>
          </Link>
          <Link to='/exchange'>
            <li className="p-[0.5rem] font-bold font-2xl">Exchange</li>
          </Link>
          <Link to='/about'>
            <li className="p-[0.5rem]  font-bold font-2xl">About us </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Nav;
