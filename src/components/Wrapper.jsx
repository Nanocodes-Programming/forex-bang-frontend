import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className='h-[100vh] w-full bg-[url("/src/assets/img/herobg.png")] bg-cover bg-center relative bg-no-repeat '>
      {children}
    </div>
  );
};

export default Wrapper;
