import React from "react";
import Layout from "../components/Layout";
import Services from "../components/Services";
import TradeChart from "../components/TradeChart";
import Wrapper from "../components/Wrapper";

const Home = () => {
  return (
    <>
      <Layout>
        <Wrapper>this is romeo</Wrapper>
        <Services />
        <TradeChart />
      </Layout>
    </>
  );
};

export default Home;
