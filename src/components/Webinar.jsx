import pexel1 from "../assets/img/pexels-godisable-jacob-1027162.jpg";
import Swiperjs from "./Swiperjs";
import { SwiperSlide } from "swiper/react";

const Webinar = () => {
  return (
    <>
    <Swiperjs>
    <p className="text-center font-bold text-white text-4xl p-[2rem]">Webinars</p>
      {/* <section className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 p-[1rem] justify-center "> */}
      <SwiperSlide>
        <div className="w-[320px] bg-white min-h-0-[400px] rounded-lg m-[1rem] p-[1rem]">
          <aside className="w-full h-[170px] ">
            <img
              src={pexel1}
              alt=""
              className="w-full h-full object-cover rounded-lg card_content cursor-pointer hover:scale-[1.1]"
            />
          </aside>
          <aside className="p-[1rem]">
            <p className="text-center font-bold mb-[0.3rem]">Abuja Seminar </p>
            <p className="mb-[1rem]"></p>
          </aside>
        </div>
      {/* </section> */}
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[320px] bg-white min-h-0-[400px] rounded-lg m-[1rem] p-[1rem]">
          <aside className="w-full h-[170px] ">
            <img
              src={pexel1}
              alt=""
              className="w-full h-full object-cover rounded-lg card_content cursor-pointer hover:scale-[1.1]"
            />
          </aside>
          <aside className="p-[1rem]">
            <p className="text-center font-bold mb-[0.3rem]">Abuja Seminar </p>
            <p className="mb-[1rem]"></p>
          </aside>
        </div>
      {/* </section> */}
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[320px] bg-white min-h-0-[400px] rounded-lg m-[1rem] p-[1rem]">
          <aside className="w-full h-[170px] ">
            <img
              src={pexel1}
              alt=""
              className="w-full h-full object-cover rounded-lg card_content cursor-pointer hover:scale-[1.1]"
            />
          </aside>
          <aside className="p-[1rem]">
            <p className="text-center font-bold mb-[0.3rem]">Abuja Seminar </p>
            <p className="mb-[1rem]"></p>
          </aside>
        </div>
      {/* </section> */}
      </SwiperSlide>
      </Swiperjs>
    </>
  );
};

export default Webinar;
