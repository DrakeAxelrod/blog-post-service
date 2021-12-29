import { FC, useMemo } from "react";
import {
  ComponentMap,
  getMDXComponent,
  MDXContentProps,
} from "mdx-bundler/client";
import Link from "./Link";
import { Paragraph } from "./Paragraph";
import Pre from "./Pre";

export const components: ComponentMap = {
  a: Link,
  p: Paragraph,
  pre: Pre,
  // img: Image as any,
};

type Props = {
  code: string;
  rest?: MDXContentProps;
};

const MDXPage: FC<Props> = ({ code, ...rest }) => {
  const MDXComponent = useMemo(() => getMDXComponent(code), [code]);
  return <MDXComponent components={components} {...rest} />;
};

export default MDXPage;
