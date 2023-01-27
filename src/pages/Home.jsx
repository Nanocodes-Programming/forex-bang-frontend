import React from "react";
import Layout from "../components/Layout";
import Learning from "../components/Learning";
import Services from "../components/Services";
import TradeChart from "../components/TradeChart";
import Wrapper from "../components/Wrapper";

const Home = () => {
  return (
    <>
      <Layout>
        <Wrapper>
          {/* home wrapper */}
          <div className="md:w-[40%] w-full md:text-left text-center h-full flex flex-col md:justify-center justify-end p-[4rem] items-start">
            <p className="text-2xl text-white font-bold  mb-4">
              Transform from a novice trader to a Full-time/Part-time
              Professional Forex Trader and Financial Analyst.
            </p>
            <button className="py-[0.5rem] px-[2rem] md:w-[80%] w-full rounded-xl text-2xl text-white font-bold bg-[#030C4B] hover:bg-[#2ECBF1] hover:text-[#030C4B]">
              Get Started
            </button>
          </div>
          {/* home wrapper */}
          {/* services starts here */}
          <div className="md:absolute top-[80%] static md:block hidden">
            <Services />
          </div>
          {/* services ends here  */}
        </Wrapper>
        <div className="md:hidden block">
          <Services />
        </div>
        <div className="min-h-[580px] bg-[url('/src/assets/img/forexbg.png')]  md:block hidden bg-cover bg-center"></div>
        <Learning />
        <div className="py-[1rem] bg-[url('/src/assets/img/forexbg.png')]">
          <TradeChart />
        </div>
      </Layout>
    </>
  );
};

export default Home;
