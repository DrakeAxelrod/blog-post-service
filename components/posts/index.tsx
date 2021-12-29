import { SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";
// import PostCard from "./PostCard";
import dynamic from "next/dynamic";

const PostCard = dynamic(() => import("./PostCard"));

const AllPosts: FC<any> = ({ posts }) => {
  return (
    <SimpleGrid columns={[1, 2]} spacing={5}>
      {posts.map((post: any, i: number) => (
        <PostCard key={i} frontMatter={post.frontMatter} />
      ))}
    </SimpleGrid>
  );
};

export default AllPosts;
