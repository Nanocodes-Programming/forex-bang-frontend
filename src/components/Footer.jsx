import React from "react";
import FooterContact from "./FooterContact";
import FooterForm from "./FooterForm";
import UseLInks from "./UseLInks";

const Footer = () => {
  return (
    <div className="md:flex flex-wrap justify-around p-[1rem] items-start bg-[#030C4B] text-white block">
      <FooterContact /> 
      <UseLInks />
      <FooterForm />
    </div>
  );
};

export default Footer;
