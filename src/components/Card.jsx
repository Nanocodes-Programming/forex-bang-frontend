import React from "react";

const Card = ({ lists, title, price }) => {
  console.log(lists);
  const oneof = "{One-Off]";
  return (
    <div className="flex md:flex-row flex-col-reverse md:text-left text-center items-center justify-between md:w-[70%] w-[80%] m-auto p-[2rem] text-white bg-white/30 backdrop-blur-sm hover:scale-[1.1] cursor-pointer hover:border-[#030C4B] hover:border-4 card_content rounded-[12px] mb-[2rem]">
      <ul className="text-[20px]">
        {lists?.map((listed) => {
          return <li key={listed}>{listed}</li>;
        })}
        <button className="w-full md:hidden m-4 block mx-auto my-[1rem] rounded-md text-white font-bold py-[0.5rem] bg-[#2ECBF1] hover:bg-[#2ECBF1] hover:text-[#030C4B]">
          Subscribe
        </button>
      </ul>

      <div className="basis-[40%] text-center">
        <p>{title}</p>
        <h2 className="font-bold text-4xl mt-[0.5rem]">
          ${price}. <span className="text-xl">00</span>
        </h2>
        <p className="mb-[0.5rem]">{oneof}</p>
        <button className="w-full hidden md:block mx-auto my-[1rem] rounded-md text-white font-bold py-[0.5rem] bg-[#2ECBF1] hover:bg-[#2ECBF1] hover:text-[#030C4B]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Card;
