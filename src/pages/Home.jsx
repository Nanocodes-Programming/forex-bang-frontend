import React from "react";
import Layout from "../components/Layout";
import Services from "../components/Services";
import TradeChart from "../components/TradeChart";
import Wrapper from "../components/Wrapper";

const Home = () => {
  return (
    <>
      <Layout>
        <Wrapper>
          {/* home wrapper */}
          <div className="md:w-[40%] w-full md:text-right text-center h-full flex flex-col md:justify-center justify-end p-[4rem] items-start">
            <p className="text-2xl text-white font-bold  mb-4">
              Transform from a novice trader to a Full-time/Part-time
              Professional Forex Trader and Financial Analyst.
            </p>
            <button className="py-[0.5rem] px-[2rem] w-[80%] rounded-xl text-2xl text-white font-bold bg-[#030C4B] hover:bg-[#2ECBF1] hover:text-[#030C4B]">
              Get Started
            </button>
          </div>
          {/* home wrapper */}
          {/* services starts here */}
          <div className="absolute top-[80%]">
            <Services />
          </div>
          {/* services ends here  */}
        </Wrapper>
        <div className="min-h-[580px] bg-[url('/src/assets/img/forexbg.png')]   bg-cover bg-center"></div>
        <div className="py-[1rem] bg-[url('/src/assets/img/forexbg.png')]">
          <TradeChart />
        </div>
      </Layout>
    </>
  );
};

export default Home;
