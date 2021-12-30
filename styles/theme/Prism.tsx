import { css, Global } from "@emotion/react";
import useColors from "hooks/useColors";
import theme from ".";

const { colors } = theme;
const font = {
  code: "Jetbrains Mono",
  heading: "Nunito",
  normal: "Open Sans",
};

const Prism = () => {
  const _colors = useColors();
  return (
    <Global
      styles={css`
        :root {
          font-variant-ligatures: none;
        }
        .mdx blockquote {
          opacity: 80%;
          background: ${colors.black.bright};
          color: ${colors.white.normal};
          border-left: 10px solid ${colors.red.bright};
          margin: 1.5em 10px;
          padding: 1em;
        }
        .mdx hr {
          margin: 50px 0;
          display: block;
        }
        .mdx ol {
          margin: 1rem;
          margin-left: 1.5rem;
        }
        .mdx ul {
          margin: 1rem;
          margin-left: 1.5rem;
          list-style-type: "➔ ";
        }
        .mdx ul li::marker {
          padding: 3rem;
          color: ${colors.magenta.bright};
        }
        .mdx ol li::marker {
          color: ${colors.blue.bright};
          font-weight: bold;
        }
        .mdx h2 {
          color: ${colors.green.bright};
          padding-top: 1rem;
          padding-bottom: 1rem;
          font-size: 2.5rem;
          font-weight: 900;
        }
        .mdx h3 {
          color: ${colors.green.bright};
          padding-top: 1rem;
          padding-bottom: 1rem;
          font-size: 2.25rem;
          font-weight: 900;
        }
        .mdx h4 {
          color: ${colors.green.bright};
          padding-top: 1rem;
          padding-bottom: 1rem;
          font-size: 2rem;
          font-weight: 900;
        }
        .mdx h5 {
          color: ${colors.green.bright};
          padding-top: 1rem;
          padding-bottom: 1rem;
          font-size: 1.75rem;
          font-weight: 900;
        }
        .mdx p img {
          width: 100%;
          /* padding-left: 2rem;
          padding-right: 2rem;
          padding-top: 1rem;
          padding-bottom: 1rem; */
        }
        .mdx .footnotes ol li::marker {
          font-size: larger;
          color: ${colors.white.bright};
        }
        .mdx a[target="_blank"] {
          color: ${colors.cyan.bright};
        }
        .mdx a[target="_blank"]:hover {
          color: ${colors.magenta.bright};
        }
        .mdx .footnotes > .chakra-link {
          color: ${colors.white.bright};
        }
        .mdx .PostTags ul {
          margin-right: 0;
          margin-left: 0;
        }
        /**
        * Inspired by gatsby remark prism - https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/
        * 1. Make the element just wide enough to fit its content.
        * 2. Always fill the visible space in .code-highlight.
        */
        .code-highlight {
          float: left;
          width: 100%;
        }
        .code-line {
          white-space: pre-wrap; /* Since CSS 2.1 */
          display: block;
          padding-left: 16px;
          padding-right: 16px;
          margin-left: -16px;
          margin-right: -16px;
          border-left-width: 4px;
          border-left-color: ${colors.comment};
        }
        // .code-line:nth-child(even) {
        //   margin-left: 0;
        //   background-color: ${colors.comment};
        // }
        .highlight-line {
          margin-left: -16px;
          margin-right: -16px;
          background: rgba(255, 255, 255, 0.125);
          border-left-width: 4px;
          border-left-color: $purple;
        }
        .line-number::before {
          opacity: 60%;
          padding-right: 16px;
          margin-left: -8px;
          color: ${colors.white.bright}; /* Line number color */
          content: attr(line);
        }
        /* rest */
        code {
          white-space: pre;
          padding-top: ${theme.space[2]};
          color: ${colors.white.bright};
        }
        code[class*="language-"],
        pre[class*="language-"] {
          font-family: ${font.code};
          text-align: left;
          word-spacing: normal;
          word-break: normal;
          word-wrap: normal;
          -moz-tab-size: 2;
          -o-tab-size: 2;
          tab-size: 2;
          -webkit-hyphens: none;
          -moz-hyphens: none;
          -ms-hyphens: none;
          hyphens: none;
          width: 100%;
        }
        /* Code blocks */
        pre {
          overflow-x: auto;
          background: ${colors.black.normal};
          padding-top: ${theme.space[4]};
          padding-bottom: ${theme.space[4]};
          padding-left: ${theme.space[4]};
          padding-right: ${theme.space[4]};
          margin: ${theme.space[4]} 0;
          white-space: pre-wrap; // was nowrap
          overflow: auto;
          min-width: 100%;
          font-size: 0.9rem;
          border-radius: ${theme.radii.md};
        }
        .token.important,
        .token.bold {
          font-weight: bold;
        }
        .token.italic {
          font-style: italic;
        }
        .token.entity {
          cursor: help;
        }
        .rehype-code-title {
          background: ${colors.white.normal};
          border-color: ${colors.white.normal};
          color: ${colors.black.dark};
          margin-top: ${theme.space[4]};
          padding: ${theme.space[2]};
          border-top-left-radius: ${theme.radii.md};
          border-top-right-radius: ${theme.radii.md};
          font-family: ${font.heading};
          border-width: 1px;
          border-bottom-width: 0;
          font-size: 1rem;
          font-weight: 900;
          margin-bottom: 0;
          width: 100%;
          + pre {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            margin-top: 0;
          }
        }

        /**
        * Nord Theme Originally by Arctic Ice Studio
        * https://nordtheme.com
        *
        * Ported for PrismJS by Zane Hitchcoxc (@zwhitchcox) and Gabriel Ramos (@gabrieluizramos)
        */
        code[class*="language-"],
        pre[class*="language-"] {
          color: ${colors.red};
          background: none;
          font-family: ${font.code};
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          word-wrap: normal;
          line-height: 1.5;
          -moz-tab-size: 4;
          -o-tab-size: 4;
          tab-size: 4;
          -webkit-hyphens: none;
          -moz-hyphens: none;
          -ms-hyphens: none;
          hyphens: none;
        }

        /* Code blocks */
        pre[class*="language-"] {
          padding: 1em;
          margin: 0.5em 0;
          overflow: auto;
          border-radius: 0.3em;
        }

        :not(pre) > code[class*="language-"],
        pre[class*="language-"] {
          background: ${colors.black.normal};
        }

        /* Inline code */
        :not(pre) > code[class*="language-"] {
          padding: 0.1em;
          border-radius: 0.3em;
          white-space: normal;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: ${colors.comment};
        }

        .token.punctuation {
          color: ${colors.blue.bright};
        }

        .namespace {
          opacity: 0.7;
        }

        .token.property,
        .token.tag,
        .token.constant,
        .token.symbol,
        .token.deleted {
          color: ${colors.red.bright};
        }

        .token.number {
          color: ${colors.yellow.bright};
        }

        .token.boolean {
          color: ${colors.yellow.bright};
        }

        .token.selector,
        .token.attr-name,
        .token.string,
        .token.char,
        .token.builtin,
        .token.inserted {
          color: ${colors.green.bright};
        }

        .token.operator,
        .token.entity,
        .token.url,
        .language-css .token.string,
        .style .token.string,
        .token.variable {
          color: ${colors.white.bright};
        }

        .token.atrule,
        .token.attr-value,
        .token.function,
        .token.class-name {
          color: ${colors.blue.bright};
        }

        .token.keyword {
          color: ${colors.purple.bright};
        }

        .token.regex,
        .token.important {
          color: ${colors.yellow.bright};
        }

        .token.important,
        .token.bold {
          font-weight: bold;
        }

        .token.italic {
          font-style: italic;
        }

        .token.entity {
          cursor: help;
        }
      `}
    />
  );
};

export default Prism;
