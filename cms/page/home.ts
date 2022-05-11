import meta from "../symbols/meta";
import collection from "../symbols/collection";
import slug from "../symbols/slug";
import { CmsCollectionFile } from "netlify-cms-core";

const home: CmsCollectionFile = {
  file: "content/page/home.md",
  label: "Startseite",
  name: "home",
  fields: [
    collection("page"),
    slug("home"),
    meta,
    {
      label: "Top",
      name: "top",
      widget: "object",
      fields: [
        { label: "Titel", name: "title", widget: "string" },
        { label: "Text", name: "text", widget: "markdown" },
      ],
    },
    {
      label: "Leistungen",
      name: "features",
      widget: "object",
      fields: [
        {
          label: "Titel",
          name: "title",
          widget: "markdown",
          buttons: ["bold", "italic"],
          editor_components: [],
          modes: ["rich_text"],
          minimal: true,
        },
        {
          label: "Leistungen",
          name: "features",
          widget: "list",
          field: { label: "Text", name: "text", widget: "string" },
        },
        { label: "Text", name: "text", widget: "markdown" },
      ],
    },
    {
      label: "Leistungsüberblick",
      name: "services",
      widget: "object",
      fields: [
        { label: "Titel", name: "title", widget: "string" },
        { label: "Text Oben", name: "text_top", widget: "text" },
        {
          label: "Text Oben Links",
          name: "text_top_left",
          widget: "text",
        },
        {
          label: "Text Oben Rechts",
          name: "text_top_right",
          widget: "text",
        },
        {
          label: "Text Unten Link",
          name: "text_bottom_left",
          widget: "text",
        },
        {
          label: "Text Unten Rechts",
          name: "text_bottom_right",
          widget: "text",
        },
        { label: "Text Unten", name: "text_bottom", widget: "text" },
      ],
    },
    {
      label: "CTA",
      name: "cta",
      widget: "object",
      fields: [{ label: "Text", name: "text", widget: "text" }],
    },
    {
      label: "Kontakt",
      name: "contact",
      widget: "object",
      fields: [
        { label: "Titel", name: "title", widget: "string" },
        { label: "Text", name: "text", widget: "markdown" },
      ],
    },
  ],
};

export default home;
