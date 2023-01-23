import React from "react";

const ScrollCounter = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between w-[80%] m-auto md:my-auto my-[1rem] text-center text-white z-10 relative">
      <aside>
        <h1 className="text-5xl mb-3 font-bold">180+</h1>
        <p>Student</p>
      </aside>
      <aside >
        <h1 className="text-5xl mb-3 font-bold">98%</h1>
        <p>Success Rate</p>
      </aside>
      <aside>
        <h1 className="text-5xl mb-3 font-bold">500+</h1>
        <p>Subscribers</p>
      </aside>
      <aside>
        <h1 className="text-5xl mb-3 font-bold">50+</h1>
        <p>Signals daily</p>
      </aside>
    </div>
  );
};

export default ScrollCounter;
