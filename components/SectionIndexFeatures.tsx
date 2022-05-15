import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import ListFeature from "./ListFeature";
import { Index } from "../types/pages";

interface Props {
  content: Index["features"];
}

function Component(props: Props) {
  const content = props.content;

  return (
    <section className="">
      <Container layout="md">
        <div className="bg-x-lime bg-opacity-20">
          <Container layout="sm">
            <div className="py-16 md:py-32">
              <Heading element="h2" size="h3" color="text-x-green">
                <div
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: content.title }}
                ></div>
              </Heading>
              <div className="mt-12">
                <ul className="space-y-2">
                  {content.features.map((feature) => (
                    <ListFeature key={feature}>{feature}</ListFeature>
                  ))}
                </ul>
              </div>
              <div className="mt-16">
                <div className="text-x-green">
                  <div
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: content.text }}
                  ></div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </section>
  );
}

export default Component;
