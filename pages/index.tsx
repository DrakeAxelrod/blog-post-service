import { get_all_bundles } from "@mdx";
import type { GetStaticProps, NextPage } from "next";
import { create_bundled_file, public_dir } from "@utils/io";
import { emptyDirSync } from "fs-extra";

const Home: NextPage = (posts) => {
  return <div>Blog Post Provider</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  emptyDirSync(public_dir);
  const bundles = await get_all_bundles();
  bundles.forEach((bundle) => {
    create_bundled_file(bundle);
  });
  return {
    props: { a: [] },
  };
};

export default Home;
