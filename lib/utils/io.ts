import {
  mkdirSync,
  existsSync,
  writeFileSync,
} from "fs-extra";
import { join } from "path";
import { BundledMDXFile } from "types/common";

const root = process.cwd();
export const public_dir = join(root, "public", "blog");

export const get_public_path_from_slug = (slug) => {
  if (Array.isArray(slug)) {
    return join(public_dir, `${join(...slug)}.json`);
  }
  return join(public_dir, `${slug}.json`);
};

export const create_bundled_file = (bundle: BundledMDXFile) => {
  const dirs = join(public_dir, ...bundle.frontMatter.categories);
  // make dirs if they dont exist
  if (!existsSync(dirs)) {
    mkdirSync(dirs, { recursive: true });
  }
  //console.log(bundle.frontMatter.slug);
  const path = get_public_path_from_slug(bundle.frontMatter.slug)
  writeFileSync(path, JSON.stringify(bundle, null, 2))
}
