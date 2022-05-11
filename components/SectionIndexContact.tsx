import Image from "next/image";
import Container from "./Container";
import Heading from "./Heading";
import DynamicForm from "./DynamicForm";
import { Index } from "../types/pages";

const fields = [
  {
    label: "Name",
    name: "name",
  },
  {
    label: "E-Mail",
    name: "email",
    type: "email",
    placeholder: "muster@email.de",
  },

  {
    label: "Nachricht",
    name: "nachricht",
    element: "textarea",
    required: false,
    className: "sm:col-span-2",
    attrs: {
      rows: 3,
    },
  },
];

interface Props {
  content: Index["contact"];
}

function Component(props: Props) {
  const content = props.content;

  return (
    <section className="pt-32 pb-32" id="kontakt">
      <Container layout="sm">
        <Heading size="h2" element="h2">
          {content.title}
        </Heading>
        <div className="mt-20">
          <div className="grid grid-cols-2 gap-8">
            <div className="relative overflow-hidden">
              <Image
                src="/img/roman.jpeg"
                width={1000}
                height={1000}
                objectFit="cover"
                alt="Bild von Roman Sabeder"
                objectPosition="left"
              />
              <div className="absolute top-0 left-0 w-32 origin-top-right transform rotate-45 bg-white h-96"></div>
              <div className="absolute top-0 right-0 w-32 origin-top-left transform -rotate-45 bg-white h-96"></div>
              <div className="absolute bottom-0 right-0 w-32 origin-bottom-left transform rotate-45 bg-white h-96"></div>
              <div className="absolute bottom-0 left-0 w-32 origin-bottom-right transform -rotate-45 bg-white h-96"></div>
            </div>
            <div className="flex items-center">
              <div className="">
                <div
                  className="prose"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: content.text }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32">
          <DynamicForm fields={fields} />
        </div>
      </Container>
    </section>
  );
}

export default Component;
