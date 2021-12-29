import Link from "next/link";
import { Link as _Link, LinkProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type CustomLinkProps = {
  children: ReactNode;
} & Omit<LinkProps, "cursor">;

const CustomLink = ({ href, children, ...rest }: CustomLinkProps) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));
  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <_Link cursor="pointer" _hover={{ textDecoration: "none" }} {...rest}>
          {children}
        </_Link>
      </Link>
    );
  }
  return (
    <_Link
      cursor="pointer"
      target="_blank"
      rel="noopener noreferrer"
      _hover={{ textDecoration: "none" }}
      href={href}
      {...rest}>
      {children}
    </_Link>
  );
};

export default CustomLink;
