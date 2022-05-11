import Container from "./Container";
import Heading from "./Heading";
import { Index } from "../types/pages";

interface Props {
  content: Index["top"];
}

function Component({ content }: Props) {
  return (
    <section className="py-32" id="ueber-mich">
      <Container layout="sm">
        <Heading element="h1" size="h1">
          {content.title}
        </Heading>

        <div className="mt-6">
          <div
            className="prose prose-lg prose-green"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: content.text }}
          ></div>
        </div>
      </Container>
    </section>
  );
}

export default Component;
