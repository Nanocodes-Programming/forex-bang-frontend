import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import pexel1 from "../assets/img/pexels-godisable-jacob-1027162.jpg";
import pexel2 from "../assets/img/pexels-justin-luck-4142863.jpg";
import pexel3 from "../assets/img/pexels-markus-spiske-131778.jpg";

const Blogs = () => {
  const blogsPosts = [
    {
      title: "Romeos is the current React Hashira",
      sub: "well this was discorvered during the annual hashira challenge and its nice",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nisi cum consequatur. Aut, cumque eum consequatur voluptates corporis eligendi doloribus ipsum eius odio. Ipsum hic nisi, possimus tempore natus temporibus.",
      image: pexel1,
    },
    {
      title: "Trading Crypto is one of the things i love doing ",
      sub: "well this was discorvered during the annual hashira challenge and its nice",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nisi cum consequatur. Aut, cumque eum consequatur voluptates corporis eligendi doloribus ipsum eius odio. Ipsum hic nisi, possimus tempore natus temporibus.",
      image: pexel2,
    },
    {
      title:
        "For the wages of sin is death and the gift of God is eternal life",
      sub: "well this was discorvered during the annual hashira challenge and its nice",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nisi cum consequatur. Aut, cumque eum consequatur voluptates corporis eligendi doloribus ipsum eius odio. Ipsum hic nisi, possimus tempore natus temporibus.",
      image: pexel3,
    },
    {
      title: "Sir harrison wins the agba coder of the year award",
      sub: "well this was discorvered during the annual hashira challenge and its nice",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nisi cum consequatur. Aut, cumque eum consequatur voluptates corporis eligendi doloribus ipsum eius odio. Ipsum hic nisi, possimus tempore natus temporibus.",
      image: pexel1,
    },
  ];
  return (
    <>
      <Layout>
        <Wrapper>
          {/* home wrapper */}
          <div className="md:w-[40%] w-full md:text-left text-center h-full flex flex-col md:justify-center justify-end p-[4rem] items-start">
            <p className="text-2xl text-white font-bold  mb-4">Blogs</p>
          </div>
        </Wrapper>

        <section className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 p-[1rem] justify-center">
          {blogsPosts.map(post =>{
            return <div className="w-[320px] bg-white min-h-0-[400px] rounded-lg m-[1rem]">
            <aside className="w-full h-[170px]">
              <img src={post.image} alt="" className="w-full h-full object-cover card_content cursor-pointer hover:scale-[1.1]" />
            </aside>
            <aside className="p-[1rem]">
              <p className="text-center font-bold mb-[0.3rem]">
               {post.title}
              </p>
              <p className="mb-[1rem]">
               {post.sub}
              </p>
              <button className="bg-[orange] text-white px-[3rem] py-[0.3rem] rounded-xl">
                read more
              </button>
            </aside>
          </div>
          })}
        </section>
      </Layout>
    </>
  );
};

export default Blogs;
