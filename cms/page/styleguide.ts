import meta from "../symbols/meta";
import collection from "../symbols/collection";
import slug from "../symbols/slug";
import header from "../symbols/header";
import { CmsCollectionFile } from "netlify-cms-core";

const styleguide: CmsCollectionFile = {
  file: "content/page/styleguide.md",
  label: "Styleguide",
  name: "styleguide",
  fields: [collection("page"), slug("styleguide"), meta, header],
};

export default styleguide;
