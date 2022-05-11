interface Meta {
  title: string;
  description: string;
  image: string;
}

interface BasePage {
  collection: "page";
  slug: string;
  meta: Meta;
}

export interface Index extends BasePage {
  top: {
    title: string;
    text: string;
  };
  features: {
    title: string;
    features: string[];
    text: string;
  };
  services: {
    title: string;
    text_top: string;
    text_top_left: string;
    text_top_right: string;
    text_bottom_left: string;
    text_bottom_right: string;
    text_bottom: string;
  };
  cta: {
    text: string;
  };
  contact: {
    title: string;
    text: string;
  };
}
