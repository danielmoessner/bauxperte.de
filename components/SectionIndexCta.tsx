import Container from "./Container";
import Heading from "./Heading";
import { Index } from "../types/pages";

interface Props {
  content: Index["cta"];
}

function Component(props: Props) {
  const content = props.content;

  return (
    <section className="overflow-hidden bg-white">
      <Container layout="full">
        <div className="relative">
          <div className="bg-x-lime/20">
            <Container layout="sm">
              {/* top */}
              {/* <div className="absolute top-0 left-0 w-full h-16 origin-top-left transform bg-white"></div>
            <div className="absolute top-0 left-0 w-16 h-32 origin-bottom-left transform -translate-y-1/2 bg-white -rotate-[60deg]"></div>
            <div className="absolute top-0 right-0 w-16 h-32 origin-bottom-right transform -translate-y-1/2 bg-white rotate-[60deg]"></div> */}
              {/* bottom */}
              {/* <div className="absolute bottom-0 left-0 w-full h-16 origin-bottom-left transform bg-white"></div>
            <div className="absolute bottom-0 left-0 w-16 h-32 origin-top-left transform translate-y-1/2 bg-white rotate-[60deg]"></div>
            <div className="absolute bottom-0 right-0 w-16 h-32 origin-top-right transform translate-y-1/2 bg-white -rotate-[60deg]"></div> */}
              {/* content */}
              <div className="py-16 md:py-40">
                <Heading size="h2" element="h2" classes="!text-x-green">
                  {content.text}
                </Heading>
              </div>
            </Container>
          </div>
          {/* triangle stuff top */}
          <div className="absolute top-0 left-0 z-0 w-full h-1.5 origin-top-left transform translate-x-[60%] rotate-[5deg] bg-x-green/60"></div>
          <div className="absolute top-0 left-0 z-0 w-full h-1.5 origin-top-right transform -translate-x-[40%] -rotate-[7deg] bg-x-green/60"></div>
          <div className="absolute top-0 left-0 z-10 w-full h-64 origin-bottom-left transform translate-x-[60%] -translate-y-full rotate-[5deg] bg-white"></div>
          <div className="absolute top-0 left-0 z-10 w-full h-64 origin-bottom-right transform -translate-x-[40%] -translate-y-full -rotate-[7deg] bg-white"></div>
          {/* triangle stuff bot */}
          <div className="absolute bottom-0 left-0 z-0 w-full h-1.5 origin-bottom-left transform translate-x-[40%] -rotate-[5deg] bg-x-green/60"></div>
          <div className="absolute bottom-0 left-0 z-0 w-full h-1.5 origin-bottom-right transform -translate-x-[60%] rotate-[7deg] bg-x-green/60"></div>
          <div className="absolute bottom-0 left-0 z-10 w-full h-64 origin-top-left transform translate-x-[40%] translate-y-full -rotate-[5deg] bg-white"></div>
          <div className="absolute bottom-0 left-0 z-10 w-full h-64 origin-top-right transform -translate-x-[60%] translate-y-full rotate-[7deg] bg-white"></div>
        </div>
      </Container>
    </section>
  );
}

export default Component;
