import { Box, Heading, Text, Stack } from "@chakra-ui/react";
// import PostTags from "./PostTags";
// import NextChakraImage from "@components/image";
import useColors from "hooks/useColors";
// import { Prism } from "@styles/theme/Prism";
// import Author from "@components/author";
// import TableOfContents from "./TableOfContents";
import { FC, ReactNode } from "react";
import dynamic from "next/dynamic";
import { FrontMatter } from "types/common";

const PostTags = dynamic(() => import("./PostTags"));
const Author = dynamic(() => import("../author"));
const NextChakraImage = dynamic(() => import("../image"));
const TableOfContents = dynamic(() => import("./TableOfContents"));
const Prism = dynamic(() => import("styles/theme/Prism"));

type PostLayoutProps = {
  frontMatter: FrontMatter;
  children: ReactNode[] | ReactNode;
};

const PostLayout: FC<PostLayoutProps> = ({ children, frontMatter }) => {
  const colors = useColors();
  // console.log(children)
  const {
    toc,
    title,
    published,
    image,
    author,
    tags,
    readingTime,
    categories,
  } = frontMatter;
  return (
    <Box as="article" className="mdx">
      <Box as="section" mx="auto">
        <Box align="center">
          <Stack as="header" direction="column">
            <Heading as="h1" fontSize={["3rem", "4.5rem"]} color={colors.alpha} fontFamily="Nunito">
              {title}
            </Heading>
            <Text
              fontWeight="semibold"
              color={colors.delta}
              fontSize={["xs", "md"]}>
              {"• Published on "}
              <Text as="time">{published}</Text>
              {" •"}
            </Text>
            <NextChakraImage
              borderColor={colors.delta}
              borderWidth={0.5}
              pos="relative"
              w="full"
              minH={["15rem", "md", "xl"]}
              maxW="4xl"
              maxH="xl"
              src={image.url}
              alt={image.alt}
            />
            <Stack alignSelf="start" direction="row" alignItems="center" py={4}>
              <Author />
              <Text
                fontWeight="semibold"
                transform="capitalize"
                fontSize="xl"
                color={colors.gamma}>
                {author.name}
              </Text>
            </Stack>
            <PostTags
              tags={tags}
              categories={categories}
              readingTime={readingTime.text}
              alignSelf={"start"}
            />
          </Stack>
        </Box>
      </Box>
      <Prism />
      <TableOfContents items={toc} title={title} />
      {children}
    </Box>
  );
};

export default PostLayout;
