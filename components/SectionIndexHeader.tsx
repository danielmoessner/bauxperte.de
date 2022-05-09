import Image from "next/image";
import Container from "./Container";

function Component() {
  return (
    <Container layout="md">
      <Image
        width={2000}
        height={1000}
        src="/img/header.jpeg"
        alt="Header Bild"
      />
    </Container>
  );
}

export default Component;
