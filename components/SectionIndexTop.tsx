import Container from "./Container";
import Heading from "./Heading";

function Component() {
  return (
    <section className="py-32" id="ueber-mich">
      <Container layout="sm">
        <Heading element="h1" size="h1">
          Mit dem BauXperten mehr bewegen
        </Heading>

        <div className="mt-6">
          <div className="prose prose-lg prose-green">
            <p>
              Haben auch Sie Kostendruck, Terminengpässe und Optimierunsbedarf
              bei Ihren Bauvorhaben? <br />
              Oder geht es mehr um die Sicherstellung von Qualitätsstandards?
            </p>
            <p>
              Mein Name ist Roman Sabeder. Meine langjährige Erfahrung im
              Baugewerbe in Ingenieur-, Industrie- und Wohnungsbau sowie
              schlüsselfertigen Bau machen mich insbesondere bei diesen
              Fragestellungen und Aufgaben zu Ihrem BauXperten.
            </p>
            <p>
              Die Leistungsphasen der <b>HOAI von 6-9</b> und meine{" "}
              <b>Gutachtenexpertise</b> biete ich auf Projektbasis an.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Component;
