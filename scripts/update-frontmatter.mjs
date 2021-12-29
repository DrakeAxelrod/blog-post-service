import fs from "fs";
import matter from "gray-matter";
import { globby } from "globby";
import path from "path";

const root = process.cwd();
const data = path.join(root, "data");

const get_slug_from_path = (path) => {
  return path.replace(/\.(mdx|md)/, "").replace(`${data}/`, "");
};
const get_path_from_slug = (slug) => {
  if (Array.isArray(slug)) {
    return path.join(data, `${path.join(...slug)}.mdx`);
  }
  return path.join(data, `${slug}.mdx`);
};

const get_all_paths = async () => {
  const paths = await globby(data, {
    expandDirectories: { extensions: ["mdx"] },
  });
  return paths
  // return paths.map((path) => {
  //   return get_slug_from_path(path);
  // });
};

const get_file_meta_data = (file_path) => {
  const stats = fs.statSync(file_path);
  return {
    created: stats.birthtime.toString(),
    updated: stats.ctime.toString(),
  };
};

const update_front_matter_dates = (file_path) => {
  const stats = get_file_meta_data(file_path);

  const file = matter.read(file_path);
  const { data: currentFrontmatter } = file;
  const updatedFrontMatter = {
    ...currentFrontmatter,
    created: stats.created,
    updated: stats.updated,
  };
  file.data = updatedFrontMatter;
  const updatedFileContent = matter.stringify(file);
  fs.writeFileSync(file_path, updatedFileContent);
};

const updateFrontMatter = async () => {
  const paths = await get_all_paths()
  paths.forEach(path => update_front_matter_dates(path))
}

console.log("updating front matter")
updateFrontMatter()
