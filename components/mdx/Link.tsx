import CustomLink from "components/custom-link";
import useColors from "hooks/useColors";

const Link = (props) => {
  const colors = useColors();
  return (
    <CustomLink href={props.href} fontWeight="bold">
      {props.children}
    </CustomLink>
  );
};

export default Link;
