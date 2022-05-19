import slug from "../symbols/slug";
import collection from "../symbols/collection";
import {
  CmsCollectionFile,
  CmsFieldBase,
  CmsFieldObject,
} from "netlify-cms-core";
import { externalLinkFields, internalLinkFields } from "./links";

const link: CmsFieldBase & CmsFieldObject = {
  label: "Normales Item",
  name: "link",
  widget: "object",
  fields: internalLinkFields,
  collapsed: false,
};

const links: CmsFieldBase & CmsFieldObject = {
  label: "Dropdown Item",
  name: "links",
  widget: "object",
  collapsed: false,
  fields: [
    {
      label: "Text",
      name: "text",
      widget: "string",
    },
    {
      label: "Links",
      name: "links",
      widget: "list",
      fields: internalLinkFields,
    },
  ],
};

const navigation: CmsCollectionFile = {
  file: "content/setting/navigation.json",
  label: "Navigation",
  name: "navigation",
  fields: [
    collection("setting"),
    slug("navigation"),
    {
      label: "Links",
      name: "links",
      widget: "list",
      collapsed: false,
      types: [link, links],
    },
    {
      label: "Button",
      name: "button",
      widget: "object",
      fields: externalLinkFields,
    },
  ],
};

export default navigation;
