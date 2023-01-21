import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import dollar from "../assets/img/dollar-and-bitcoin-exchange-svgrepo-com 1.png";
import Card from "../components/Card";

const Exchanges = () => {
  return (
    <Layout>
      <Wrapper>
        {/* home wrapper */}
        <div className="w-[40%] h-full flex flex-col justify-end p-[4rem] items-start">
          <img src={dollar} alt="" />
          <h1 className="text-4xl font-bold text-white">Exchange With Lumen Forex Academy</h1>
        </div>
        {/* home wrapper */}
        {/* services starts here */}
      </Wrapper>
      <div className=" bg-[url('/src/assets/img/forexbg.png')] pb-[5rem]  bg-cover bg-center">
        <Card />
      </div>
    </Layout>
  );
};

export default Exchanges;
