import { get_all_bundles } from "@mdx";
import type { GetStaticProps, NextPage } from "next";
import { create_bundled_file, create_html_file, public_dir } from "@utils/io";
import { emptyDirSync } from "fs-extra";
import { getMDXComponent, getMDXExport } from "mdx-bundler/client"
import { useMemo } from "react";
import { fetcher } from "@utils/fetcher";
import React from "react";
import ReactDOMServer from "react-dom/server";


const MDXPage = ({ code }: { code: string }) => {
  const mdxExport = getMDXExport(code);
  const Component = useMemo(() => mdxExport.default, [code]);
  return <Component />;
}

const Home: NextPage = ({ bundles }: any) => {
  // bundles.map(bundle => {
  //   const component = MDXPage({ code: bundle.code })
  //   console.log(ReactDOMServer.renderToString(component));
  // })
  //const Component = useMemo(() => getMDXComponent(post.code), [post.code]);
  return <>{}</>;
};

export const getStaticProps: GetStaticProps = async () => {
  emptyDirSync(public_dir);
  const bundles = await get_all_bundles();
  bundles.forEach((bundle) => {
    create_bundled_file(bundle);
    const html = ReactDOMServer.renderToString(<MDXPage code={bundle.code} />);
    create_html_file(html, bundle);
  });
  return {
    props: { bundles: bundles},
  };
};

export default Home;
