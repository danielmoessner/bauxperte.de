import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { findMarkdown } from "../lib/getMarkdown";
import Head from "next/head";
import SectionIndexContact from "../components/SectionIndexContact";
import SectionIndexTop from "../components/SectionIndexTop";
import SectionIndexFeatures from "../components/SectionIndexFeatures";
import SectionIndexServices from "../components/SectionIndexServices";
import SectionIndexCta from "../components/SectionIndexCta";
import SectionIndexHeader from "../components/SectionIndexHeader";
import { Index } from "../types/pages";
import md from "markdown-it";
import { Markdown } from "../types/shared";
import * as v8 from "v8";

interface Props {
  page: Markdown<Index>;
}

function Component(props: Props) {
  const page = props.page.frontmatter;

  return (
    <Layout>
      <Head>
        <script
          defer
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        ></script>
      </Head>
      <Seo meta={page.meta} />

      <SectionIndexHeader />
      <SectionIndexTop content={page.top} />
      <SectionIndexFeatures content={page.features} />
      <SectionIndexServices content={page.services} />
      <SectionIndexCta content={page.cta} />
      <SectionIndexContact content={page.contact} />

      {/* <Header header={page.header} />
      <section>
        <Container layout="sm">
          <div className="pt-8 pb-20 sm:pt-4 lg:pt-6">
            <div className="">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:gap-6">
                {animals.map((animal, index) => (
                  <Animate key={animal.slug} delay={index % 3}>
                    <AnimalCard animal={animal} />
                  </Animate>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section> */}
    </Layout>
  );
}

export async function getStaticProps() {
  const origPage = findMarkdown<Index>("home", "page");
  // copy the object in order to render frontmatter correctly
  const page = v8.deserialize(v8.serialize(origPage));
  page.frontmatter.top.text = md().render(page.frontmatter.top.text);
  page.frontmatter.features.title = md().render(
    page.frontmatter.features.title
  );
  page.frontmatter.features.text = md().render(page.frontmatter.features.text);
  page.frontmatter.contact.text = md().render(page.frontmatter.contact.text);

  return {
    props: {
      page: page,
    },
  };
}

export default Component;
