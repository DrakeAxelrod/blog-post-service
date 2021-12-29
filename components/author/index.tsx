import { FC } from "react";
import { Avatar, AvatarProps } from "@chakra-ui/react";
import useColors from "hooks/useColors";


const Author: FC<AvatarProps> = ({
  size = "xl",
  borderWidth = "0.25rem",
  src,
  name,
  ...rest
}) => {
  const colors = useColors();
  return (
    <Avatar
      src={src}
      name={name}
      size={size}
      borderWidth={borderWidth}
      borderColor={colors.alpha}
      {...rest}
    />
  );
};

export default Author;
