import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import chart from "../assets/img/chart3-svgrepo-com 1.png";
import Card from "../components/Card";

const Mentor = () => {
  return (
    <Layout>
      <Wrapper>
        {/* home wrapper */}
        <div className="md:w-[40%] w-full text-left  h-full flex flex-col justify-end md:p-[4rem] p-[2rem] items-start">
          <img src={chart} alt="" />
          <h1 className="text-4xl font-bold text-white">Mentorship Program</h1>
          <p className="text-2xl text-white   my-4">
            Exclusive Mentorship Program Get the best One-on-One Private
            Training you could ever imagine both online and offline with CypherFx
            Expert Team.
          </p>
        </div>
        {/* home wrapper */}
        {/* services starts here */}
      </Wrapper>
      <div className=" bg-[url('/src/assets/img/forexbg.png')] pb-[5rem]  bg-cover bg-center">
        <Card
          price="500"
          title="Exclusive Mentorship"
          lists={[
            
            "» One-on-One Private Mentorship",
            " » One month Exclusive Training",
            " » Free Signals",
            "» EAYL bonus",
            "» Real live Charting with CypherFx",
            "» Cypher's Exclusive Course",
            " » Online/Pro Mentorship Sessions",
            " » Mastery Certificate award",
          ]}
        />
        <Card
          price="300"
          title="In-Class Mentorship "
          lists={[
            "» Physically based Training",
            "» Online based Training",
            "» Novice to Mastery Courses",
            "» Real Live Trading Sessions",
            "» Free WiFi",
            "» Free Signals",
            "» Access to prerecorded Lessons",
            "» One Month immerse Training",
            "» Fixtures with the Expert Team",
            "» Prop Firm Challenge Experience",
            "» Exposure to the CryptoSystem",
            "» Mastery Certificate Award",
          ]}
        />
        <Card
        price="200"
        title="online Mentorship"
          lists={[
            "» Online based Training",
            " » Novice to Mastery Courses",
            " » Online Live Trading experience",
            "» Access to prerecorded Lessons",
            "  » Zoom Sessions",
            " » Access to Online membership group",
            "  » Free Signals",
            "» Prop Firm Challenge Experience ",
            "  » Mastery Certificate Award",
          ]}
        />
      </div>
    </Layout>
  );
};

export default Mentor;
