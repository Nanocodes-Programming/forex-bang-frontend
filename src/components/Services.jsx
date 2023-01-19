import chart from "../assets/img/chart3-svgrepo-com 1.png";
import dollar from "../assets/img/dollar-and-bitcoin-exchange-svgrepo-com 1.png";
import group from "../assets/img/Group 121.png";

const service_data = [
  {
    title: "Forex Mentorship Program",
    descrition:
      "Transformed from a novice trader to a Full-time/Part-time Professional Forex Trader/Financial Analyst.",
    image: chart,
  },
  {
    title: "Forex Trade Signals",
    descrition:
      "Earn on the go with LumenFx by copying our daily bases signals direct to your trading account.",
    image: dollar,
  },
  {
    title: "Exchange With Lumen Forex Academy",
    descrition:
      "Sell Bitcoins, Usdt and E-Wallet Funds (Perfect Money,  Skrill, Neteller,  Payoneer Funds) with LumenFx at good rates",
    image: group,
  },
];

const Services = () => {
  return (
    <div className="flex w-[80%] m-auto">
      {service_data.map((service) => {
        return (
          <div className="min-h-[400px] w-[300px] text-center rounded-[10px] mx-[0.5rem]">
            {service.title}
            <img src={service.image} alt="" className="m-auto" />
            {service.descrition}
          </div>
        );
      })}
    </div>
  );
};

export default Services;
