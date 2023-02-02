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
            <h1 className="text-4xl font-bold text-white">Resources</h1>
            <p className="text-2xl text-white   my-4">
              various types of materials, tools, and inputs that are required to
              carry out a particular task, project or activity
            </p>
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
