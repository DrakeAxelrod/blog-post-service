import { Container, Flex, Text } from "@chakra-ui/react";
import CustomLink from "components/custom-link";
import { FC, useEffect, useState } from "react";
import SocialShare from "components/posts/SocialShare";
import useColors from "hooks/useColors";

// const SocialShare = dynamic(() => import("../../components/social-share").then((mod) => mod.SocialShare), {
//   loading: () => <p>Loading...</p>,
// });

const getIds = (items) => {
  return items.reduce((acc, item) => {
    if (item.url) {
      // url has a # as first character, remove it to get the raw CSS-id
      acc.push(item.url.slice(1));
    }
    if (item.items) {
      acc.push(...getIds(item.items));
    }
    return acc;
  }, []);
};

const useActiveId = (itemIds: string[]) => {
  const [activeId, setActiveId] = useState(`test`);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` },
    );
    itemIds.forEach((id) => {
      observer.observe(document.getElementById(id) as Element);
    });
    return () => {
      itemIds.forEach((id: string) => {
        const e = document.getElementById(id) || null;
        if (e) {
          observer.unobserve(e);
        }
      });
    };
  }, [itemIds]);
  return activeId;
};

const RenderItems = (items: any, activeId: string) => {
  const colors = useColors();
  return (
    <>
      {items.map((item: any, i: number) => {
        const isActive = activeId === item.url.slice(1);
        // const pl = `${item.depth / 2 + (item.depth === 2 ? 0 : 1)}rem`;
        const isH2 = item.depth === 2;
        const pl = (isH2 ? 0 : 0.25 * item.depth) + "rem";
        return (
          <CustomLink
            key={i}
            href={item.url}
            pl={pl}
            color={isActive ? colors.alpha : ""}>
            {item.value}
            {item.items && RenderItems(item.items, activeId)}
          </CustomLink>
        );
      })}
    </>
  );
};

type TOCProps = {
  items: any[];
  title: string;
};

const TableOfContents: FC<TOCProps> = ({ items, title }) => {
  const colors = useColors();
  const idList = getIds(items);
  const activeId = useActiveId(idList);
  return (
    <Container align="center" py={10}>
      <Text as="header" fontWeight="900" fontSize="3xl" align="center">
        Table of Contents
      </Text>
      <Flex direction="column" py="1rem" align="start" fontSize="xl">
        {RenderItems(items, activeId)}
      </Flex>
      <SocialShare title={title} />
    </Container>
  );
};

export default TableOfContents;
