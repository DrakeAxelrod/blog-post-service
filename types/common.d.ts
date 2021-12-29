import { NextApiRequest, NextApiResponse } from "next";
import { ReactNode } from "react";
import { ReadTimeResults } from "reading-time";

declare type Req = NextApiRequest;
declare type Res = NextApiResponse;

export type MyWrapper = {
  children?: ReactNode;
};

declare type Author = {
  name: {
    first: string;
    last: string;
    full: string;
  };
  handles: {
    twitter: string;
    github: string;
    linkedin: string;
  };
  email: string;
  socials: {
    twitter: string;
    github: string;
    linkedin: string;
    discord: string;
  };
  avatar: string;
  summary: string;
}?;

declare type Image = {
  url: string;
  h: number;
  w: number;
  type: string;
  alt: string;
};

declare type TOCItem = {
  value: string;
  url: string;
  depth: number;
  items?: TOCItem;
};

declare type FrontMatter = {
  title: string;
  author: Author;
  created: string;
  published: string;
  image: Image;
  toc: TOCItem[];
  description: string;
  readingTime: ReadTimeResults;
  wordCount: number;
  slug: string;
  filename?: string;
  tags: string[];
  categories: string[];
  content: string;
  draft: boolean;
};

declare type BundledMDXFile = {
  frontMatter: FrontMatter;
  code: string;
};
