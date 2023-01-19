import React from "react";
import herobg from '../assets/img/herobg.png'

const Wrapper = ({ children }) => {
  return <div className="h-[100vh] w-full bg-[url('../public/assets/img/herobg.png')] relative">{children}</div>;
};

export default Wrapper;
