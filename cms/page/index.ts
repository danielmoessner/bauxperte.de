import { CmsCollection } from "netlify-cms-core";
import home from "./home";

const config: CmsCollection = {
  name: "pages",
  label: "Seiten",
  label_singular: "Seite",
  delete: false,
  editor: {
    preview: false,
  },
  files: [home],
};

export default config;
