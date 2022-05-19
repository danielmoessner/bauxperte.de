import Image from "next/image";
import Container from "./Container";

function Component() {
  return (
    <header className="">
      <Container layout="full">
        <div className="relative overflow-hidden leading-[0px]">
          <div className="max-h-[50vh]">
            <Image
              width={4000}
              height={2000}
              src="/img/header.jpeg"
              alt="Header Bild"
              objectFit="cover"
              objectPosition="bottom"
            />
          </div>
          {/* stuff top */}
          {/* <div className="absolute top-0 w-full h-1.5 bg-x-lime"></div> */}
          {/* triangle stuff bottom */}
          <div className="absolute bottom-0 left-0 z-0 w-full h-1.5 origin-bottom-left transform translate-x-[40%] -rotate-[5deg] bg-x-lime/50"></div>
          <div className="absolute bottom-0 left-0 z-0 w-full h-1.5 origin-bottom-right transform -translate-x-[60%] rotate-[7deg] bg-x-lime/50"></div>
          <div className="absolute bottom-0 left-0 z-0 w-full h-40 origin-top-left transform translate-x-[40%] translate-y-full -rotate-[5deg] bg-white"></div>
          <div className="absolute bottom-0 right-0 z-0 w-full h-40 origin-top-right transform -translate-x-[60%] translate-y-full rotate-[7deg] bg-white"></div>
        </div>
      </Container>
    </header>
  );
}

export default Component;
