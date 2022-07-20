import Image from "next/image";
import Container from "./Container";
import Heading from "./Heading";
import DynamicForm from "./DynamicForm";
import { Index } from "../types/pages";

const fields = [
  {
    label: "Name",
    name: "name",
    className: "sm:col-span-2",
  },
  {
    label: "E-Mail",
    name: "email",
    type: "email",
    placeholder: "muster@email.de",
  },
  {
    label: "Telefon",
    name: "phone",
    type: "text",
    placeholder: "0123 234 234",
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
    <section className="py-16 lg:py-32" id="kontakt">
      <Container layout="sm">
        <Heading size="h2" element="h2">
          {content.title}
        </Heading>
        <div className="mt-6 lg:mt-20">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <div className="relative overflow-hidden">
                <Image
                  src="/img/roman_sabeder.jpeg"
                  width={802}
                  height={694}
                  objectFit="contain"
                  alt="Bild von Roman Sabeder"
                  objectPosition="left"
                />
                {/* <div className="absolute top-0 left-0 w-16 origin-top-right transform rotate-45 bg-white lg:w-32 h-96"></div>
                <div className="absolute top-0 right-0 w-16 origin-top-left transform -rotate-45 bg-white lg:w-32 h-96"></div>
                <div className="absolute bottom-0 right-0 w-16 origin-bottom-left transform rotate-45 bg-white lg:w-32 h-96"></div>
                <div className="absolute bottom-0 left-0 w-16 origin-bottom-right transform -rotate-45 bg-white lg:w-32 h-96"></div> */}
              </div>
            </div>
            <div className="flex items-center">
              <div className="">
                <div
                  className="prose prose-a:text-x-lime prose-a:text-xl prose-a:no-underline hover:prose-a:opacity-90"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: content.text }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 lg:mt-32">
          <DynamicForm fields={fields} />
        </div>
      </Container>
    </section>
  );
}

export default Component;
