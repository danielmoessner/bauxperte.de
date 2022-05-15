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
      <Container layout="md">
        <div className="bg-x-green">
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
            <div className="py-16 md:py-32">
              <Heading size="h2" element="h2" classes="!text-green-50">
                {content.text}
              </Heading>
            </div>
          </Container>
        </div>
      </Container>
    </section>
  );
}

export default Component;
