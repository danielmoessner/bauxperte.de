import slug from "../symbols/slug";
import collection from "../symbols/collection";
import {
  CmsCollectionFile,
  CmsFieldBase,
  CmsFieldObject,
} from "netlify-cms-core";
import { externalLink, internalLink } from "./links";

const text: CmsFieldBase & CmsFieldObject = {
  label: "Text",
  name: "text",
  widget: "object",
  fields: [{ label: "Text", name: "text", widget: "text" }],
};

const footer: CmsCollectionFile = {
  file: "content/setting/footer.json",
  label: "Footer",
  name: "footer",
  fields: [
    collection("setting"),
    slug("footer"),
    // { label: "Copyright", name: "copyright", widget: "string" },
    // { label: "Text", name: "text", widget: "text" },
    {
      label: "Links",
      name: "links",
      widget: "list",
      types: [internalLink, externalLink, text],
    },
    // {
    //   label: "Spalten",
    //   name: "columns",
    //   widget: "list",
    //   collapsed: false,
    //   fields: [
    //     { label: "Titel", name: "title", widget: "string" },
    //     {
    //       label: "Class (Experte)",
    //       name: "class",
    //       widget: "string",
    //       default: "col-span-6 md:col-span-3",
    //     },
    //     {
    //       label: "Inhalt",
    //       name: "content",
    //       widget: "list",
    //       types: [internalLink, externalLink, text],
    //     },
    //   ],
    // },
  ],
};

export default footer;
