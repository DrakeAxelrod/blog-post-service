import {
  BoxProps,
  Text,
  IconButton,
  ButtonGroup,
  Icon,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { join } from "path";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import useColors from "hooks/useColors";
import { FC } from "react";
import { getAbsoluteURL } from "@utils/get-absolute-url";

type Props = {
  title: string;
};

const SocialShare: FC<Props> = ({ title }) => {
  const colors = useColors();
  const { asPath } = useRouter();
  const url = join(getAbsoluteURL(), asPath);
  const socialLinks = [
    {
      href: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
      company: "twitter",
      icon: FaTwitter,
    },
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      company: "facebook",
      icon: FaFacebook,
    },
    {
      href: `https://www.linkedin.com/shareArticle?url=${url}&title=${title}`,
      company: "linkedin",
      icon: FaLinkedin,
    },
  ];

  return (
    <>
      <Text fontWeight="bold">Share this post</Text>
      <ButtonGroup direction="row">
        {socialLinks.map((link, index) => {
          return (
            <IconButton
              key={index}
              href={link.href}
              aria-label={`share on ${link.company}`}
              color={colors.default.bg}
              bgColor={colors.alpha}>
              <Icon as={link.icon} fontSize="2xl" />
            </IconButton>
          );
        })}
      </ButtonGroup>
    </>
  );
};

export default SocialShare;
