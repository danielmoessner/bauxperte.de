import Container from "./Container";
import Heading from "./Heading";

function Component() {
  return (
    <section className="py-16 bg-green-800">
      <Container layout="sm">
        <Heading size="h2" element="h2" classes="!text-green-50">
          Reibungslos, innovativ &amp; kostensparend - qualitative Bauabläufe
          optimal aufeinander abgestimmt.
        </Heading>
      </Container>
    </section>
  );
}

export default Component;
