// import Header from "@components/header";
import { Flex, Spacer } from "@chakra-ui/react";
// import Footer from "@components/footer";
import { FC } from "react";
import { ReactNode } from "react";
import dynamic from "next/dynamic";

type PageLayoutProps = {
  display?: string;
  maxW?: string;
  children?: ReactNode;
  _100vh?: Boolean;
};
const PageLayout: FC<PageLayoutProps> = ({
  children,
  maxW = "4xl",
  display = "flex",
  _100vh = false,
}) => {
  return (
    <>
      {_100vh ? (
        <style global jsx>{`
          html,
          body,
          body > div:first-child,
          div#__next,
          div#__next > div {
            height: 100%;
          }
        `}</style>
      ) : (
        <></>
      )}
      <Spacer as="main" maxW={maxW} w="100%" mx="auto" zIndex={0}>
        {children}
      </Spacer>
    </>
  );
};

export default PageLayout;
