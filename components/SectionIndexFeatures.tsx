import Container from "./Container";
import Heading from "./Heading";
import ListFeature from "./ListFeature";

const features = [
  "Baumeister & Projektleitung",
  "Handwerksmeister im Maurer- und Betonbau",
  "Schlüsselfertiger Bau",
  "Verbandsgeprüfter Bausachverständiger",
  "Wertgutachten, Verkehrsgutachten, Privatgutachten & Schadensgutachten",
  "Arbeitssicherheit der BG BAU nach VGB 122",
  "VOB, Gewährleistung & Bau-Normen",
  "Aufmaß- und Rechnungsprüfung sowie Nachtragsmanagement",
  "Einhaltung & Sicherstellung von Qualitätsstandards",
  "Effektive und kostensparende Arbeitsabläufe",
  "Innovation und pragmatische Lösung am Bauvorhaben",
];

function Component() {
  return (
    <section className="pt-32 pb-32 bg-green-50">
      <Container layout="sm">
        <Heading element="h2" size="h3">
          Ich freue mich, wenn auch Sie von meine Kompetenzen profitieren und
          wir so Qualitäts-, Zeit- und Kostenvorteile für Ihre Projekte und
          Bauvorhaben erzielen:
        </Heading>
        <div className="mt-12">
          <ul className="space-y-2">
            {features.map((feature) => (
              <ListFeature key={feature}>{feature}</ListFeature>
            ))}
          </ul>
        </div>
        <div className="mt-16">
          <p className="text-green-900">
            Zu meinen Auftraggebern zählen Bauträger, Bauunternehmer sowie
            Ingenieur- und Architekturbüros. Diese schätzen insbesondere die{" "}
            <b>Optimierung der Bauabläufe</b> und die <b>Qualitätssteigerung</b>{" "}
            durch geballte Fachkompetenz.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Component;
