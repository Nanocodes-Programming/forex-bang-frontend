import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import signal from "../assets/img/Group 121.png";
import Card from "../components/Card";

const Signal = () => {
  return (
    <Layout>
      <Wrapper>
        {/* home wrapper */}
        <div className="w-[40%] h-full flex flex-col justify-end p-[4rem] items-start">
          <img src={signal} alt="" />
          <h1 className="text-4xl font-bold text-white">Forex Trade Signals</h1>
          <p className="text-2xl text-white   my-4">
            Earn on the go with LumenFx by copying our daily bases signals
            direct to your trading account
          </p>
        </div>
        {/* home wrapper */}
        {/* services starts here */}
      </Wrapper>
      <div className="min-h-[400px] bg-[url('/src/assets/img/forexbg.png')]   bg-cover bg-center">
        <Card />
      </div>
    </Layout>
  );
};

export default Signal;
