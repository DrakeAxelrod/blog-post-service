import { bundleMDX } from "mdx-bundler";
import { globby } from "globby";
import { join } from "path";
import { format, parseISO } from "date-fns";
import fs from "fs";
// rehype plugins
import rehypePrismPlus from "rehype-prism-plus";
import rehypeCodeTitles from "./rehype/rehype-code-titles";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
// remark plugins
import remarkGFB from "remark-gfm";
import { remarkTocHeadings } from "./remark";
import a11yEmoji from "@fec/remark-a11y-emoji";
//import remarkSectionize from "remark-sectionize";
import readingTime from "reading-time";
import { PluggableList } from "unified";
import { FrontMatter } from "types/common";

const root = process.cwd();
const data = join(root, "data")

export function date_sort_desc(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

export const get_slug_from_path = (path: string) => {
  return path.replace(/\.(mdx|md)/, "").replace(`${data}/`, "");
};
export const get_path_from_slug = (slug) => {
  if (Array.isArray(slug)) {
    return join(data, `${join(...slug)}.mdx`);
  }
  return join(data, `${slug}.mdx`);
};

export const get_all_paths = async () => {
  const paths = await globby(data, {
    expandDirectories: { extensions: ["mdx"] },
  });
  return paths.map((path) => {
    return get_slug_from_path(path);
  });
};

export const get_source_from_slug = (slug: string) => {
  const base = get_path_from_slug(slug);
  const path = fs.readFileSync(base, "utf8");
  return path;
};


export const get_filename = (slug: string | string[] | undefined) => {
  if (Array.isArray(slug)) {
    return slug.pop();
  } else if (slug === undefined) {
    return slug;
  } else {
    return slug.split("/").pop();
  }
};

export const get_tags_from_slug = (slug) => {
  if (Array.isArray(slug)) {
    return slug;
  } else if (slug === undefined) {
    return [];
  } else {
    const tags = slug.split("/");
    tags.pop();
    return tags;
  }
};
export const format_date = (str: string) => {
  return format(parseISO(str), "MMMM do yyyy");
};

export const bundle = async (slug: string) => {
  const source = get_source_from_slug(slug);
  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = join(
      root,
      "node_modules",
      "esbuild",
      "esbuild.exe",
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = join(
      root,
      "node_modules",
      "esbuild",
      "bin",
      "esbuild",
    );
  }
  let toc = [];
  // Add your remark and rehype plugins here
  const remarkPlugins: PluggableList = [
    remarkGFB,
    [remarkTocHeadings, { exportRef: (toc = []) }],
    // [remarkListItemWrapTextInSpan],
    a11yEmoji,
    require("remark-sectionize"),
    // remarkSectionize,
  ];
  const rehypePlugins: PluggableList = [
    rehypeCodeTitles, // should always be before rehypePrism.
    rehypeSlug,
    rehypeAutolinkHeadings,
    [rehypePrismPlus, { ignoreMissing: true }],
  ];
  const { code, frontmatter } = await bundleMDX<FrontMatter>({
    source: source,
    // cwd: PATHS.components,
    // grayMatterOptions: options => {
    //   options.excerpt = true;
    //   return options;
    // },
    xdmOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        ...remarkPlugins,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        ...rehypePlugins,
      ];
      return options;
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        ".js": "jsx",
        ".ts": "tsx",
      };
      return options;
    },
  });
  frontmatter.content = source;
  frontmatter.slug = slug;
  frontmatter.filename = get_filename(slug);
  frontmatter.readingTime = readingTime(source);
  frontmatter.wordCount = source.split(/\s+/gu).length;
  frontmatter.date = frontmatter.published;
  frontmatter.published = format_date(frontmatter.published); //parse(new Date(frontmatter.published))
  frontmatter.toc = toc;
  frontmatter.categories = get_tags_from_slug(slug);
  const post = {
    frontMatter: frontmatter,
    content: source,
    code,
  };
  return post;
};

export const get_all_bundles = async () => {
  const paths = await get_all_paths();
  const slugs = paths.map((path) => {
    return get_slug_from_path(path);
  });

  const requests = slugs.map(async (slug) => {
    return await bundle(slug);
  });
  return await Promise.all(requests).then((res) => {
    const notDraft = res.filter((e) => !e.frontMatter.draft);
    return notDraft.sort((a, b) => {
      // sort for latest posts
      const a1 = new Date(a.frontMatter.date).getTime();
      const b1 = new Date(b.frontMatter.date).getTime();
      return date_sort_desc(a1, b1);
    });
  });
};
