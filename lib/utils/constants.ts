import { join } from "path";

const ROOT = process.cwd();

export const PATHS = {
  root: ROOT,
  data: join(ROOT, "data"),
  components: join(ROOT, "components"),
};
