import React from "react";
import { BiEnvelope, BiPhoneCall, BiLocationPlus } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="flex justify-between p-[1rem]">
      <div>
        <ul>
          <h1 className="my-[1rem] font-bold text-3xl">Contact Us</h1>
          <li className="flex  items-center my-3">
            {" "}
            <span className="mx-2">
              <BiEnvelope />
            </span>{" "}
            support@lumenforex.com
          </li>
          <li className="flex items-center my-3">
            <span className="mx-2">
              <BiPhoneCall />
            </span>
            +1345667899
          </li>
          <li className="flex items-center my-3">
            <span className="mx-2">
              <BiLocationPlus />
            </span>
            eflsgsgsn f dfs sdf fffsf df f w eerwewer{" "}
          </li>
        </ul>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Footer;
