import Container from "./Container";
import Heading from "./Heading";
import LogoX from "./LogoX";
import Image from "next/image";

function Component() {
  return (
    <section className="pt-32 pb-32" id="leistungen">
      <Container layout="sm">
        <Heading element="h2" size="h2">
          Leistungsüberblick für Ihre Bauvorhaben und Projekte
        </Heading>
        <div className="mt-16">
          <div className="relative max-w-md mx-auto">
            <LogoX />
            {/* top */}
            <div className="absolute left-0 right-0 w-0.5 h-20 mx-auto bg-x-lime top-16"></div>
            <div className="absolute left-0 right-0 mx-auto top-1">
              <p className="font-medium text-center">
                Baumeister <br />
                Bausachverständiger
              </p>
            </div>
            {/* top left */}
            <div
              // style={{ background: "url(/icons/Icon_Bauabnahmen_Polygon.png)" }}
              className="absolute flex items-center justify-center w-12 h-12 mx-auto transform -translate-y-1/2 -translate-x-14 left-10 top-52"
            >
              <Image
                src="/icons/Icon_Stellungnahme_Polygon.png"
                width={360}
                height={311}
                alt="Icon"
              />

              <div className="absolute transform -translate-x-1/2 left-1/2 top-12">
                <p className="font-normal text-center">Baumeisterarbeiten</p>
              </div>
            </div>
            <div className="absolute left-10 w-24 h-0.5 mx-auto bg-x-lime top-52"></div>
            {/* top right */}
            <div className="absolute flex items-center justify-center w-12 h-12 mx-auto transform -translate-y-1/2 translate-x-14 right-10 top-52">
              <Image
                src="/icons/Icon_Privatgutachten_Polygon.png"
                width={360}
                height={311}
                alt="Icon"
              />
              <div className="absolute transform -translate-x-1/2 left-1/2 top-12">
                <p className="font-normal text-center">
                  Privatgutachten <br />
                  Wertgutachten <br />
                  Schadensgutachten
                </p>
              </div>
            </div>
            <div className="absolute right-10 w-24 h-0.5 mx-auto bg-x-lime top-52"></div>
            {/* bottom left */}
            <div className="absolute flex items-center justify-center w-12 h-12 mx-auto transform translate-y-1/2 translate-x-14 right-10 bottom-60">
              <Image
                src="/icons/Icon_Bauabnahmen_Polygon.png"
                width={360}
                height={311}
                alt="Icon"
              />
              <div className="absolute transform -translate-x-1/2 left-1/2 top-12">
                <p className="font-normal text-center">
                  Baubegleitung <br />
                  Bauabnahmen
                </p>
              </div>
            </div>
            <div className="absolute left-10 w-24 h-0.5 mx-auto bg-x-lime bottom-60"></div>
            {/* bottom right */}
            <div className="absolute flex items-center justify-center w-12 h-12 mx-auto transform translate-y-1/2 -translate-x-14 left-10 bottom-60">
              <Image
                src="/icons/Icon_Baubegleitung_Polygon.png"
                width={360}
                height={311}
                alt="Icon"
              />
              <div className="absolute w-64 transform -translate-x-1/2 left-1/2 top-12">
                <p className="font-normal text-center">
                  Schlüsselfertiger Bau <br />
                  Hoch- und Ingenieurbau
                </p>
              </div>
            </div>
            <div className="absolute right-10 w-24 h-0.5 mx-auto bg-x-lime bottom-60"></div>
            {/* bottom */}
            <div className="absolute left-0 right-0 flex items-center justify-center w-12 h-12 mx-auto transform -bottom-3">
              <Image
                src="/icons/Icon_Innovativ_Polygon.png"
                width={360}
                height={311}
                alt="Icon"
              />
            </div>
            <div className="absolute bottom-10 left-0 right-0 w-0.5 h-28 mx-auto bg-x-lime"></div>
            <div className="absolute left-0 right-0 mx-auto -bottom-10">
              <p className="font-normal text-center">
                kostensparendes &amp; innovatives Bauen
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Component;
