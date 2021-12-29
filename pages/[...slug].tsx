import { fetcher } from "@utils/fetcher";
import { getAbsoluteURL } from "@utils/get-absolute-url";
import PostLayout from "components/posts/PostLayout";
import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import MDXPage from "components/mdx";
import PageLayout from "components/page-layout";
import { Box } from "@chakra-ui/react";
import { bundle } from "@mdx";

const Post: FC<any> = ({ frontMatter, code }) => {
  const isDev = process.env.NODE_ENV === "development";
  return isDev ? (
    <PageLayout>
      <PostLayout frontMatter={frontMatter}>
        <MDXPage code={code} />
      </PostLayout>
    </PageLayout>
  ) : <Box>Only Available in Development</Box>;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug }: any = params;
  const post = await bundle(slug)
  return {
    props: post,
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 300, // In seconds
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const url = process.env.isDev ? `http://localhost:3000/api/posts` : "https://posts.draxel.io/api/posts";
  const posts = await fetcher(url);
  // const paths = await getAllFrontMatter();
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.frontMatter.slug.split("/"),
        },
      };
    }),
    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    fallback: "blocking",
  };
};
export default Post;
