import Ebooks from "../components/Ebooks";
import Layout from "../components/Layout";
import Videos from "../components/Videos";
import Webinar from "../components/Webinar";
import Wrapper from "../components/Wrapper";

const Resources = () => {
  return (
    <>
      <Layout>
        <Wrapper>
          {/* home wrapper */}
          <div className="md:w-[40%] w-full md:text-left text-center h-full flex flex-col md:justify-center justify-end p-[4rem] items-start">
            <p className="text-2xl text-white font-bold  mb-4">Resources</p>
          </div>
        </Wrapper>
        <Webinar />
        <Videos />
        <Ebooks />
      </Layout>
    </>
  );
};

export default Resources;
