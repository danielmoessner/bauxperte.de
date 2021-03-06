import { CmsCollection } from "netlify-cms-core";
import collection from "../symbols/collection";

const animal: CmsCollection = {
  name: "animal",
  label: "Wildtiere",
  label_singular: "Wildtier",
  editor: {
    preview: true,
  },
  folder: "content/animal",
  slug: "{{fields.slug}}",
  create: true,
  preview_path: "wildtiere/{{fields.slug}}",
  fields: [
    collection("animal"),
    { label: "Titel", name: "title", widget: "string" },
    { label: "Slug", name: "slug", widget: "string" },
    { label: "Bild", name: "image", widget: "image" },
    { label: "Auszug", name: "excerpt", widget: "text" },
    { label: "Inhalt", name: "body", widget: "markdown" },
    {
      label: "Kategorie",
      name: "category",
      widget: "relation",
      collection: "category",
      search_fields: ["title"],
      value_field: "title",
    },
  ],
};

export default animal;
