import { StackProps, Tag, Wrap } from "@chakra-ui/react";
import useColors from "hooks/useColors";
import { FC } from "react";

type PostTagsProps = {
  tags: string[];
  categories?: string[];
  readingTime?: string;
} & StackProps;

const PostTags: FC<PostTagsProps> = ({
  tags,
  categories,
  readingTime,
  ...rest
}) => {
  const colors = useColors();
  return (
    <Wrap className="PostTags" alignSelf="start" direction="row" {...rest}>
      <Tag
        bgColor={colors.theta}
        color="black.normal"
        fontWeight="bold"
        fontSize={"0.75rem"}>
        {readingTime}
      </Tag>
      {categories
        ? categories.map((v, i) => (
            <Tag
              key={i}
              bgColor={colors.delta}
              color="black.normal"
              fontWeight="bold"
              fontSize={"0.75rem"}>
              {v}
            </Tag>
          ))
        : null}
      {tags.map((v, i) => (
        <Tag
          key={i}
          bgColor={colors.omega}
          color="black.normal"
          fontWeight="bold"
          fontSize={"0.75rem"}>
          {v}
        </Tag>
      ))}
    </Wrap>
  );
};

export default PostTags;
