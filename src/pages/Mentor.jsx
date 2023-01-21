import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import chart from "../assets/img/chart3-svgrepo-com 1.png";
import Card from "../components/Card";

const Mentor = () => {
  return (
    <Layout>
      <Wrapper>
        {/* home wrapper */}
        <div className="w-[40%] h-full flex flex-col justify-end p-[4rem] items-start">
          <img src={chart} alt="" />
          <h1 className="text-4xl font-bold text-white">Mentorship Program</h1>
          <p className="text-2xl text-white   my-4">
            Exclusive Mentorship Program Get the best One-on-One Private
            Training you could ever imagine both online and offline with LumenFx
            Expert Team.
          </p>
        </div>
        {/* home wrapper */}
        {/* services starts here */}
      </Wrapper>
      <div className=" bg-[url('/src/assets/img/forexbg.png')] pb-[5rem]  bg-cover bg-center">
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
};

export default Mentor;
