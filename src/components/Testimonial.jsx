import { SwiperSlide } from "swiper/react";
import Swiperjs from "./Swiperjs";
import { BsFillStarFill } from "react-icons/bs";
import profile from "../assets/img/profile.jpg";
// Import Swiper styles


const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Romeo",
      text: ` The copy trading opportunity by Aplus Trading Hub is for hungryminds who wish to succeed. They have a team of experienced
            traders, excellent in consistency and result oriented. I recommend
            the free copy trading by Aplus Trading Hub`,
      image: profile,
    },
    {
      id: 2,
      name: "Cynthia",
      text: ` The copy trading opportunity by Aplus Trading Hub is for hungryminds who wish to succeed. They have a team of experienced
            traders, excellent in consistency and result oriented. I recommend
            the free copy trading by Aplus Trading Hub`,
      image: profile,
    },
    {
      id: 3,
      name: "Peter",
      text: ` The copy trading opportunity by Aplus Trading Hub is for hungryminds who wish to succeed. They have a team of experienced
            traders, excellent in consistency and result oriented. I recommend
            the free copy trading by Aplus Trading Hub`,
      image: profile,
    },
  ];
  return (
    <Swiperjs>
      {testimonials.map((testify) => {
        return (
          <SwiperSlide>
            <div className="w-[300px] min-h-[300px] border-2 p-[1rem] text-white rounded-lg">
              <div className="text-center mb-4 flex flex-col items-center justify-center">
                <img
                  src={testify.image}
                  alt=""
                  className="w-[90px] h-[90px] object-cover rounded-full m-auto "
                />
                <span className="flex items-center mt-2 ">
                  <BsFillStarFill className="text-[yellow]" />
                  <BsFillStarFill className="text-[yellow]" />
                  <BsFillStarFill className="text-[yellow]" />
                  <BsFillStarFill className="text-[yellow]" />
                  <BsFillStarFill className="text-[yellow]" />
                </span>
              </div>
              <p>{testify.text}</p>
              <p className="text-right font-bold">~ {testify.name}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiperjs>
  );
};

export default Testimonial;
