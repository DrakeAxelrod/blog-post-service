import {
  get_all_front_matter,

} from "../lib/mdx";
import type { GetStaticProps, NextPage } from "next";

const Home: NextPage = (posts) => {
  return <div>Hello</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await get_all_front_matter();
  console.log(posts);
  return {
    props: posts,
  };
};

export default Home;
