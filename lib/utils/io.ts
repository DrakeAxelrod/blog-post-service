import {
  mkdirSync,
  existsSync,
  writeFileSync,
} from "fs-extra";
import { join } from "path";
import { BundledMDXFile } from "types/common";

const root = process.cwd();
export const public_dir = join(root, "public", "blog");

type Extension = ".html" | ".json"
export const get_public_path_from_slug = (slug, extension: Extension) => {
  if (Array.isArray(slug)) {
    return join(public_dir, `${join(...slug)}${extension}`);
  }
  return join(public_dir, `${slug}${extension}`);
};

export const create_bundled_file = (bundle: BundledMDXFile) => {
  const dirs = join(public_dir, ...bundle.frontMatter.categories);
  // make dirs if they dont exist
  if (!existsSync(dirs)) {
    mkdirSync(dirs, { recursive: true });
  }
  //console.log(bundle.frontMatter.slug);
  const path = get_public_path_from_slug(bundle.frontMatter.slug, ".json")
  writeFileSync(path, JSON.stringify(bundle, null, 2))
}

export const create_html_file = (html: string, bundle: BundledMDXFile) => {
  const dirs = join(public_dir, ...bundle.frontMatter.categories);
  // make dirs if they dont exist
  if (!existsSync(dirs)) {
    mkdirSync(dirs, { recursive: true });
  }
  //console.log(bundle.frontMatter.slug);
  const path = get_public_path_from_slug(bundle.frontMatter.slug, ".html");
  writeFileSync(path, html);
};
