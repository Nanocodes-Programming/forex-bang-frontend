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
          <div className="w-[40%] h-full flex flex-col justify-center p-[4rem] items-start">
            <p className="text-2xl text-white font-bold  mb-4">
              Transform from a novice trader to a Full-time/Part-time
              Professional Forex Trader and Financial Analyst.
            </p>
            <button className="py-[0.5rem] px-[2rem] w-[80%] rounded-xl text-2xl text-white font-bold bg-[#030C4B]">Get Started</button>
          </div>
        </Wrapper>
        <Services />
        <div className="my-[1rem]">
          <TradeChart />
        </div>
      </Layout>
    </>
  );
};

export default Home;
