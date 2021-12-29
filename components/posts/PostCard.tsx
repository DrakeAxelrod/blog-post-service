// import NextChakraImage from "@components/image";
import { Heading, Text, Stack, LinkBox, LinkOverlay } from "@chakra-ui/react";
import useColors from "@hooks/useColors";
// import PostTags from "./PostTags";
import config from "config";
// import Author from "@components/author";
import { truncateText } from "@utils/strings";
import { FC } from "react";
import dynamic from "next/dynamic";

const PostTags = dynamic(() => import("./PostTags"));
const Author = dynamic(() => import("../author"));
const NextChakraImage = dynamic(() => import("../image"));

type PostCardProps = {
  frontMatter: FrontMatter;
};
const PostCard: FC<PostCardProps> = ({ frontMatter }) => {
  const colors = useColors();
  const { image, title, description } = frontMatter;
  const { url, alt } = image;
  return (
    <LinkBox
      as="article"
      bg={colors.background.normal}
      rounded="md"
      boxShadow={"2xl"}
      p={6}
      justifyContent="space-evenly">
      <Text
        color={colors.beta}
        textTransform={"uppercase"}
        fontWeight={800}
        fontSize={"sm"}
        fontFamily="Open Sans"
        pb="1rem"
        letterSpacing={1.1}>
        Post
      </Text>
      <NextChakraImage
        pos="relative"
        src={url}
        alt={alt}
        h="225"
        w="full"
        borderColor={colors.beta}
        borderWidth="0.1rem"
      />
      <Heading
        color={colors.alpha}
        py="1rem"
        fontSize="2rem"
        align="center"
        fontFamily="Nunito">
        <LinkOverlay
          href={`blog/${frontMatter.slug}`}
          px="0.5rem"
          _focus={{
            bgColor: "transparent",
            outlineColor: "cyan.bright",
          }}>
          {title}
        </LinkOverlay>
      </Heading>
      <Stack direction="row">
        <Author size="lg" />
        <Stack spacing={0} justifyContent="center">
          <Text
            color={colors.beta}
            fontFamily="Open Sans"
            fontWeight="bold"
            py="0.1rem"
            fontSize={"1rem"}>
            {config.meta.owner.name.full}
          </Text>
          <Text
            color={colors.delta}
            fontWeight="bold"
            fontSize={"1rem"}
            fontFamily="Open Sans">
            {frontMatter.published}
          </Text>
        </Stack>
      </Stack>
      <PostTags
        tags={frontMatter.tags}
        categories={frontMatter.categories}
        readingTime={frontMatter.readingTime.text}
        fontFamily="Open Sans"
        pt="1rem"
        mx="0"
      />
      <Text pt="1rem" fontFamily="Open Sans" fontSize="1.2rem">
        {truncateText(description, 200)}
      </Text>
    </LinkBox>
  );
};

export default PostCard;
