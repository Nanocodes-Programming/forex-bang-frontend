import React from "react";

const FooterForm = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl mb-2">Send us A message</h1>
      <form action="#">
        <input
          type="text"
          className=" rounded-[10px] p-2 w-full block bg-[#d9d9d9b5] outline-none"
          placeholder="Name"
        />
        <input
          type="text"
          className=" rounded-[10px] my-4 p-2 w-full block bg-[#d9d9d9b5] outline-none"
          placeholder="Email"
        />
        <textarea
          className="w-full bg-[#d9d9d9b5] rounded-[10px] outline-none p-2 "
          placeholder="Enter message"
          id=""
          cols="20"
          rows="5"
        ></textarea>
      </form>
    </div>
  );
};

export default FooterForm;
