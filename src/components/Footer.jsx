import React from "react";
import FooterContact from "./FooterContact";
import FooterForm from "./FooterForm";
import UseLInks from "./UseLInks";

const Footer = () => {
  return (
    <div className="flex justify-between p-[1rem] items-center">
      <FooterContact />
      <UseLInks />
      <FooterForm />
    </div>
  );
};

export default Footer;
