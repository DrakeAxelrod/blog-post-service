import { get_all_bundles } from "@mdx";
import type { GetStaticProps, NextPage } from "next";
import { create_bundled_file, public_dir } from "@utils/io";
import { emptyDirSync } from "fs-extra";
import { getMDXExport } from "mdx-bundler/client"
import { useMemo } from "react";
import React from "react";
import ReactDOMServer from "react-dom/server";


const MDXPage = ({ code }: { code: string }) => {
  const mdxExport = getMDXExport(code);
  const Component = useMemo(() => mdxExport.default, [code]);
  return <Component />;
}

const Home: NextPage = ({ bundles }: any) => {
  return <>Blog Post Provider</>;
};

export const getStaticProps: GetStaticProps = async () => {
  emptyDirSync(public_dir);
  const bundles = await get_all_bundles();
  bundles.forEach((bundle) => {
    const html = ReactDOMServer.renderToString(
          <MDXPage code={bundle.code} />
        );
    bundle["html"] = html
    create_bundled_file(bundle);
  });
  return {
    props: { bundles: bundles},
  };
};

export default Home;
