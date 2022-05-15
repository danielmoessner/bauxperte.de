import Image from "next/image";
import Container from "./Container";

function Component() {
  return (
    <header className="">
      <Container layout="md">
        <div className="relative overflow-hidden leading-[0px]">
          <Image
            width={2000}
            height={1000}
            src="/img/header.jpeg"
            alt="Header Bild"
          />
          {/* stuff top */}
          <div className="absolute top-0 w-full h-1.5 bg-x-lime"></div>
          {/* triangle stuff bottom */}
          <div className="absolute bottom-0 left-0 z-0 w-full h-24 origin-bottom-left transform translate-x-[40%] translate-y-[88px] -rotate-[5deg] bg-x-lime"></div>
          <div className="absolute bottom-0 left-0 z-0 w-full h-24 origin-top-right transform -translate-x-[60%] translate-y-[88px] rotate-[7deg] bg-x-lime"></div>
          <div className="absolute bottom-0 left-0 z-0 w-full h-40 origin-bottom-left transform translate-x-[40%] translate-y-full -rotate-[5deg] bg-white"></div>
          <div className="absolute bottom-0 right-0 z-0 w-full h-40 origin-bottom-right transform -translate-x-[60%] rotate-[7deg] translate-y-full bg-white"></div>
        </div>
      </Container>
    </header>
  );
}

export default Component;
