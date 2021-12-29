import { FC } from "react";
import { Avatar, AvatarProps } from "@chakra-ui/react";
import useColors from "hooks/useColors";

type AuthorProps = {} & Omit<AvatarProps, "src" | "name">;

const Author: FC<AuthorProps> = ({
  size = "xl",
  borderWidth = "0.25rem",
  ...rest
}) => {
  const colors = useColors();
  return (
    <Avatar
      src={
        "https://avatars.githubusercontent.com/u/51012876?s=400&u=1250212107eadb8f74caba9ab80f25c8fbe60ccf&v=4"
      }
      name={"Drake Axelrod"}
      size={size}
      borderWidth={borderWidth}
      borderColor={colors.alpha}
      {...rest}
    />
  );
};

export default Author;
