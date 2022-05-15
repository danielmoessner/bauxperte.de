import Container from "./Container";
import Heading from "./Heading";
import LogoX from "./LogoX";
import Image from "next/image";
import { Index } from "../types/pages";

interface Props {
  content: Index["services"];
}

function Component(props: Props) {
  const content = props.content;

  return (
    <section className="pt-32 pb-32" id="leistungen">
      <Container layout="sm">
        <Heading element="h2" size="h2">
          <div>{content.title}</div>
        </Heading>
        <div className="mt-16">
          <div className="md:hidden">
            <div className="">
              <p className="font-medium whitespace-pre">{content.text_top}</p>
            </div>

            <div className="grid grid-cols-2 mt-10 gap-x-6 gap-y-8">
              <div className="">
                <div className="w-12 h-12">
                  <Image
                    className=""
                    src="/icons/icon_stellungnahme.png"
                    width={181}
                    height={156}
                    alt="Icon"
                  />
                </div>
                <div className="">
                  <p className="font-normal whitespace-pre">
                    {content.text_top_left}
                  </p>
                </div>
              </div>

              <div className="">
                <div className="w-12 h-12">
                  <Image
                    className=""
                    src="/icons/icon_privatgutachten.png"
                    width={181}
                    height={156}
                    alt="Icon"
                  />
                </div>
                <div className="">
                  <p className="font-normal break-words whitespace-pre">
                    {content.text_top_right}
                  </p>
                </div>
              </div>

              <div className="">
                <div className="w-12 h-12">
                  <Image
                    className=""
                    src="/icons/icon_baubegleitung.png"
                    width={181}
                    height={156}
                    alt="Icon"
                  />
                </div>
                <div className="">
                  <p className="font-normal break-words whitespace-pre">
                    {content.text_bottom_left}
                  </p>
                </div>
              </div>

              <div className="">
                <div className="w-12 h-12">
                  <Image
                    className=""
                    src="/icons/icon_bauabnahmen.png"
                    width={181}
                    height={156}
                    alt="Icon"
                  />
                </div>
                <div className="">
                  <p className="font-normal whitespace-pre">
                    {content.text_bottom_right}
                  </p>
                </div>
              </div>

              <div className="">
                <div className="w-12 h-12">
                  <Image
                    className=""
                    src="/icons/icon_innovativ.png"
                    width={181}
                    height={156}
                    alt="Icon"
                  />
                </div>
                <div className="">
                  <p className="font-normal whitespace-pre">
                    {content.text_bottom}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden max-w-md mx-auto md:block">
            <LogoX />
            {/* top */}
            <div className="absolute left-0 right-0 w-0.5 h-20 mx-auto bg-x-lime top-16"></div>
            <div className="absolute left-0 right-0 mx-auto top-1">
              <p className="font-medium text-center whitespace-pre">
                {content.text_top}
              </p>
            </div>
            {/* top left */}
            <div
              // style={{ background: "url(/icons/Icon_Bauabnahmen_Polygon.png)" }}
              className="absolute flex items-center justify-center w-12 h-12 mx-auto transform -translate-y-1/2 -translate-x-14 left-10 top-52"
            >
              <img
                src="/icons/Icon_Stellungnahme_Polygon.png"
                width={360}
                height={311}
                alt="Icon"
              />

              <div className="absolute transform -translate-x-1/2 left-1/2 top-12">
                <p className="font-normal text-center whitespace-pre">
                  {content.text_top_left}
                </p>
              </div>
            </div>
            <div className="absolute left-10 w-24 h-0.5 mx-auto bg-x-lime top-52"></div>
            {/* top right */}
            <div className="absolute flex items-center justify-center w-12 h-12 mx-auto transform -translate-y-1/2 translate-x-14 right-10 top-52">
              <img
                src="/icons/icon_privatgutachten.png"
                width={181}
                height={156}
                alt="Icon"
              />
              <div className="absolute transform -translate-x-1/2 left-1/2 top-12">
                <p className="font-normal text-center whitespace-pre">
                  {content.text_top_right}
                </p>
              </div>
            </div>
            <div className="absolute right-10 w-24 h-0.5 mx-auto bg-x-lime top-52"></div>
            {/* bottom left */}
            <div className="absolute flex items-center justify-center w-12 h-12 mx-auto transform translate-y-1/2 -translate-x-14 left-10 bottom-60">
              <Image
                src="/icons/icon_baubegleitung.png"
                width={181}
                height={156}
                alt="Icon"
              />
              <div className="absolute w-64 transform -translate-x-1/2 left-1/2 top-12">
                <p className="font-normal text-center whitespace-pre">
                  {content.text_bottom_left}
                </p>
              </div>
            </div>
            <div className="absolute right-10 w-24 h-0.5 mx-auto bg-x-lime bottom-60"></div>
            {/* bottom right */}
            <div className="absolute flex items-center justify-center w-12 h-12 mx-auto transform translate-y-1/2 translate-x-14 right-10 bottom-60">
              <Image
                src="/icons/icon_bauabnahmen.png"
                width={181}
                height={156}
                alt="Icon"
              />
              <div className="absolute transform -translate-x-1/2 left-1/2 top-12">
                <p className="font-normal text-center whitespace-pre">
                  {content.text_bottom_right}
                </p>
              </div>
            </div>
            <div className="absolute left-10 w-24 h-0.5 mx-auto bg-x-lime bottom-60"></div>
            {/* bottom */}
            <div className="absolute left-0 right-0 flex items-center justify-center w-12 h-12 mx-auto transform -bottom-3">
              <Image
                src="/icons/icon_innovativ.png"
                width={181}
                height={156}
                alt="Icon"
              />
            </div>
            <div className="absolute bottom-10 left-0 right-0 w-0.5 h-28 mx-auto bg-x-lime"></div>
            <div className="absolute left-0 right-0 mx-auto -bottom-10">
              <p className="font-normal text-center whitespace-pre">
                {content.text_bottom}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Component;
