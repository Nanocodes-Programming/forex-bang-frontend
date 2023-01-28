import teaching from "../assets/img/teaching.jpg";
import graduate from "../assets/img/graduate.jpg";
import mentor from "../assets/img/mentor.jpg";
import ideas from "../assets/img/ideas.jpg";
import trading from "../assets/img/trading.png";
import vip from "../assets/img/vip.png";
const MoreServices = () => {
  const services = [
    {
      title: "Technical & Fundamental Forex Course",
      text: "Browse through the educational trading videos provided on the AMG TV, the videos cater for all types of traders from the beginner, intermediate and advanced. What we teach is simple yet effective trading strategies.",
      img: graduate,
    },
    {
      title: "Weekly Zoom Sessions",
      text: "Every week we will meet to analyse the upcoming trading week, give updates and share inputs, and learn what techniques were used, how and why, in our trading ideas that we've shared during the week.",
      img: teaching,
    },
    {
      title: "Trading Ideas & Signals",
      text: "We are constantly on standby and monitoring the charts all the time for signals, as soon as we spot a movement then we publish it so you can also milk the market with us, our head trader usually sends scalp setups (highly profitable short-term trades) but most of the other mentors send swing trades, in this way you earn while you are learning.",
      img: ideas,
    },
    {
      title: "Mentorship",
      text: "VIP members can schedule a 1-1 mentorship with any of our mentors through the built-in scheduling app. They can ask any questions and sometimes even trade live with the mentor; this is quickest way to become a successful trader.",
      img: mentor,
    },
    {
      title: "Trading Tools",
      text: "Get access to our exclusive indicators that we use to determine entry and exit zones in the market, in this section we also have EA’s and scripts that are proven to work, some already been used successfully by our students to pass their prop-firm funding challenges.",
      img: trading,
    },
    {
      title: "V.I.P Support ",
      text: "We are willing to fund successful traders who are doing well, we have a physical trading floor in SA where funded traders are welcome to work from, the rewards and benefits of being one of our funded traders are immeasurable.",
      img: vip,
    },
  ];
  return (
    <div className="p-[2rem]">
      <h2 className="font-bold text-4xl text-white text-center mb-[2rem]">
        Our Services
      </h2>
      <section className="flex justify-between items-center gap-[2%] flex-wrap">
        {services.map((service) => {
          return (
            <div className="w-[350px] p-[1rem] text-center min-h-[450px]  bg-white rounded-md mb-[1rem] ">
              <img
                src={service.img}
                alt=""
                className="rounded-full w-[100px] h-[100px] m-auto border-4 border-[#030C4B]"
              />
              <h2 className="text-2xl font-bold my-[1rem]">{service.title}</h2>
              <p className="mt-[2rem]">{service.text}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default MoreServices;
