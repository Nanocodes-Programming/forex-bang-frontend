import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import signal from "../assets/img/Group 121.png";
import Card from "../components/Card";

const Signal = () => {
  return (
    <Layout>
      <Wrapper>
        {/* home wrapper */}
        <div className="md:w-[40%] w-full text-left h-full flex flex-col justify-end md:p-[4rem] p-[2rem] items-start">
          <img src={signal} alt="" />
          <h1 className="text-4xl font-bold text-white">Forex Trade Signals</h1>
          <p className="text-2xl text-white   my-4">
            Earn on the go with CypherFx by copying our daily bases signals
            direct to your trading account
          </p>
        </div>
        {/* home wrapper */}
        {/* services starts here */}
      </Wrapper>
      <div className="min-h-[400px] bg-[url('/src/assets/img/forexbg.png')]   bg-cover bg-center">
        <Card
          price="100"
          title="Copy Signals"
          type='Monthly'
          lists={[
            "» Exclusive Monthly Signals",
            "» 1-5 Signals Weekly",
            "» Risk Minimized entries",
            "» Profit Maximized Trades",
            "» Weekly Charting",
            "» Almost 90% Accuracy",
          ]}
        />
      </div>
    </Layout>
  );
};

export default Signal;
