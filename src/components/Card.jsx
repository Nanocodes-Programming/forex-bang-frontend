import React from "react";

const Card = () => {
  const oneof = "{One-Off]";
  return (
    <div className="flex items-center justify-between w-[70%] m-auto p-[2rem] text-white bg-white/30 backdrop-blur-sm hover:scale-[1.1] cursor-pointer hover:border-[#030C4B] hover:border-4 card_content rounded-[12px] mb-[2rem]">
      <ul className="text-[20px]">
        <li>» One-on-One Private Mentorship</li>
        <li>» One month Exclusive Training</li>
        <li>» Free Signals</li>
        <li>» EAYL bonus</li>
        <li>» Real live Charting with LumenFx</li>
        <li>» Lumen's Exclusive Course</li>
        <li>» Online/Pro Mentorship Sessions</li>
        <li>» Mastery Certificate award</li>
      </ul>
      <div className="basis-[40%] text-center">
        <p>Exclusive Mentorship</p>
        <h2 className="font-bold text-4xl mt-[0.5rem]">
          $500. <span className="text-xl">00</span>
        </h2>
        <p className="mb-[0.5rem]">{oneof}</p>
        <button className="w-full mx-auto my-[1rem] rounded-md text-white font-bold py-[0.5rem] bg-[#2ECBF1] hover:bg-[#2ECBF1] hover:text-[#030C4B]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Card;
