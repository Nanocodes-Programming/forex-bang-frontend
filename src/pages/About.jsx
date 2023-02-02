// import Googlemaps from "../components/Googlemaps";
import Layout from "../components/Layout";
import about from "../assets/img/about_us1.png";
import Wrapper from "../components/Wrapper";

const About = () => {
  return (
    <>
      <Layout>
        <Wrapper>
        <div className="md:w-[40%] w-full text-left  h-full flex flex-col justify-end md:p-[4rem] p-[2rem] items-start">
         <h1 className="text-4xl font-bold text-white">About us </h1>
            <p className="text-2xl text-white   my-4">
              Exclusive Mentorship Program Get the best One-on-One Private
              Training you could ever imagine both online and offline with
              LumenFx Expert Team.
            </p>
        </div>
         
        </Wrapper>
        <div className="flex p-[2rem] md:flex-row flex-col">
          <img src={about} alt="" />
          <div className="p-[1rem] text-white">
            <h2 className="font-bold text-4xl mb-[1rem]">About Us</h2>
            <p className="text-lg my-[2rem]">
              Lumen forex academy is the largest forex community with the most
              active subscribers in the continent. The academy is led by Dr Ref
              Wayne who is a pioneer and an Award-Winning Forex Trader. What
              makes us the first choice is the reputation that we have built
              over time as we continue to recieve testimonials on a daily basis.
            </p>

            <button className="min-w-[200px] mx-auto my-[1rem] rounded-md text-white font-bold py-[0.5rem] bg-[#2ECBF1] hover:bg-[#2ECBF1] hover:text-[#030C4B]">
              join the academy
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
