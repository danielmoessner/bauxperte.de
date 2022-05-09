import Image from "next/image";
import Container from "./Container";
import Heading from "./Heading";

function Component() {
  return (
    <section className="pt-32 pb-32">
      <Container layout="sm">
        <Heading element="h2" size="h2">
          Leistungsüberblick für Ihre Bauvorhaben und Projekte
        </Heading>
        <div className="mt-16">
          <div className="">
            <Image
              src="/media/deer.jpg"
              width={2000}
              height={1000}
              objectFit="contain"
              alt="Bild über die Leistungen"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Component;
