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
    <section className="relative z-20">
      <Container layout="full">
        <div className="relative overflow-hidden">
          <div className="bg-x-lime bg-opacity-20">
            <Container layout="sm">
              <div className="py-16 md:py-48">
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
          {/* triangle stuff top */}
          <div className="absolute top-0 left-0 z-0 w-full h-1.5 origin-top-left transform translate-x-[60%] rotate-[5deg] bg-x-green"></div>
          <div className="absolute top-0 left-0 z-0 w-full h-1.5 origin-top-right transform -translate-x-[40%] -rotate-[7deg] bg-x-green"></div>
          <div className="absolute top-0 left-0 z-10 w-full h-64 origin-bottom-left transform translate-x-[60%] -translate-y-full rotate-[5deg] bg-white"></div>
          <div className="absolute top-0 left-0 z-10 w-full h-64 origin-bottom-right transform -translate-x-[40%] -translate-y-full -rotate-[7deg] bg-white"></div>
          {/* triangle stuff bot */}
          <div className="absolute bottom-0 left-0 z-0 w-full h-1.5 origin-bottom-left transform translate-x-[40%] -rotate-[5deg] bg-x-green"></div>
          <div className="absolute bottom-0 left-0 z-0 w-full h-1.5 origin-bottom-right transform -translate-x-[60%] rotate-[7deg] bg-x-green"></div>
          <div className="absolute bottom-0 left-0 z-10 w-full h-64 origin-top-left transform translate-x-[40%] translate-y-full -rotate-[5deg] bg-white"></div>
          <div className="absolute bottom-0 left-0 z-10 w-full h-64 origin-top-right transform -translate-x-[60%] translate-y-full rotate-[7deg] bg-white"></div>
        </div>
      </Container>
    </section>
  );
}

export default Component;
