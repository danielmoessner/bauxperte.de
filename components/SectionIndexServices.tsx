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
    <section className="py-16 md:py-20 lg:py-32" id="leistungen">
      <Container layout="sm">
        <Heading element="h2" size="h2">
          <div>{content.title}</div>
        </Heading>
        <div className="mt-6 md:mt-10 lg:mt-16">
          <div className="md:hidden">
            <div className="">
              <p className="font-medium whitespace-pre">{content.text_top}</p>
            </div>

            <div className="grid grid-cols-1 mt-10 xs:grid-cols-2 gap-x-6 gap-y-8">
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
                  <p className="font-normal break-normal whitespace-pre">
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
                  <p className="font-normal break-normal whitespace-pre">
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
            <div className="absolute flex items-center justify-center w-12 h-12 mx-auto transform -translate-y-1/2 -translate-x-14 left-10 top-52">
              <svg
                id="a"
                data-name="Ebene 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 86.09 74.56"
              >
                <polygon
                  points="86.09 0 64.56 0 86.09 37.28 86.09 0"
                  fill="none"
                />
                <polygon
                  points="21.52 0 0 0 0 74.56 21.52 74.56 0 37.28 21.52 0"
                  fill="none"
                />
                <path
                  d="M35.09,21.62c.12-.3,.19-.61,.19-.94,0-2.3-3.04-4.1-6.91-4.1s-6.91,1.8-6.91,4.1c0,.26,.05,.5,.12,.75V55.7l.42,.27c.17,.11,2.92,1.84,6.58,1.84,1.88,0,4.01-.46,6.15-1.84l.41-.26v-.07h29.54V21.62h-29.59Zm-1.75,33.08c-4.36,2.54-8.62,.69-9.95-.02V23.54c1.25,.77,3,1.24,4.99,1.24s3.73-.48,4.98-1.24l-.02,31.16Zm-4.96-31.48c-3.15,0-5.34-1.34-5.34-2.53s2.19-2.53,5.34-2.53,5.34,1.34,5.34,2.53-2.19,2.53-5.34,2.53Zm34.51,30.61h-27.72V23.42h27.72v30.4Z"
                  fill="none"
                />
                <polygon
                  points="64.56 74.56 86.09 74.56 86.09 37.28 64.56 74.56"
                  fill="none"
                />
                <path
                  d="M23.39,23.54v31.14c1.33,.71,5.59,2.56,9.95,.02l.02-31.16c-1.25,.77-3,1.24-4.98,1.24s-3.74-.48-4.99-1.24Z"
                  fill="#a8c82a"
                />
                <path
                  d="M28.38,18.15c-3.15,0-5.34,1.34-5.34,2.53s2.19,2.53,5.34,2.53,5.34-1.34,5.34-2.53-2.19-2.53-5.34-2.53Z"
                  fill="#a8c82a"
                />
                <path
                  d="M35.16,53.82h27.72V23.42h-27.72v30.4Zm12.62-27.34h11.3v9.83h-1.8v-8.03h-9.5v-1.8Zm-9.48,17.78h10.72v1.8h-10.72v-1.8Zm0,5.01h10.72v1.8h-10.72v-1.8Z"
                  fill="#a8c82a"
                />
                <path
                  d="M86.09,37.28L64.56,0H21.52L0,37.28l21.52,37.28h43.04l21.52-37.27h0Zm-50.95,18.34v.07l-.41,.26c-2.14,1.38-4.26,1.84-6.15,1.84-3.66,0-6.4-1.73-6.58-1.84l-.42-.27V21.43c-.07-.24-.12-.49-.12-.75,0-2.3,3.03-4.1,6.91-4.1s6.91,1.8,6.91,4.1c0,.32-.08,.64-.19,.94h29.59V55.62h-29.54Z"
                  fill="#a8c82a"
                />
              </svg>
              <div className="absolute transform -translate-x-1/2 left-1/2 top-12">
                <p className="font-normal text-center whitespace-pre">
                  {content.text_top_left}
                </p>
              </div>
            </div>
            <div className="absolute left-10 w-24 h-0.5 mx-auto bg-x-lime top-52"></div>
            {/* top right */}
            <div className="absolute flex items-center justify-center w-12 h-12 mx-auto transform -translate-y-1/2 translate-x-14 right-10 top-52">
              <svg
                id="a"
                data-name="Ebene 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 86.09 74.56"
              >
                <rect y="0" width="86.09" height="74.56" fill="none" />
                <g>
                  <path
                    d="M56.59,40.53c-4.79,0-8.69,3.9-8.69,8.69s3.9,8.69,8.69,8.69c2.43,0,4.68-.98,6.34-2.75,1.52-1.62,2.35-3.73,2.35-5.95,0-4.79-3.9-8.69-8.69-8.69Z"
                    fill="#7b1e15"
                  />
                  <path
                    d="M56.59,38.73c.63,0,1.24,.07,1.84,.17v-7.7H27.57v23.62h20.16c-1.03-1.62-1.64-3.54-1.64-5.6,0-5.79,4.71-10.49,10.49-10.49Z"
                    fill="#7b1e15"
                  />
                  <polygon
                    points="43.05 15.41 25.05 29.4 60.97 29.4 43.05 15.41"
                    fill="#7b1e15"
                  />
                  <path
                    d="M64.56,0H21.52L0,37.28l21.52,37.28h43.04l21.52-37.28L64.56,0Zm-.7,56.76c-1.95,1.87-4.56,2.95-7.27,2.95-2.9,0-5.53-1.18-7.43-3.09H25.77V31.2h-5.97L43.05,13.13l23.15,18.07h-5.96v8.19c3.99,1.49,6.85,5.32,6.85,9.83,0,2.25-.74,4.38-2.05,6.16l4.6,4.6-1.27,1.27-4.49-4.49Z"
                    fill="#7b1e15"
                  />
                </g>
              </svg>
              <div className="absolute transform -translate-x-1/2 left-1/2 top-12">
                <p className="font-normal text-center whitespace-pre">
                  {content.text_top_right}
                </p>
              </div>
            </div>
            <div className="absolute right-10 w-24 h-0.5 mx-auto bg-x-lime top-52"></div>
            {/* bottom left */}
            <div className="absolute flex items-center justify-center w-12 h-12 mx-auto transform translate-y-1/2 -translate-x-14 left-10 bottom-60">
              <svg
                id="a"
                data-name="Ebene 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 86.09 74.56"
              >
                <polygon
                  points="61.93 53.35 60.13 53.35 60.13 49.15 56.53 49.15 56.53 53.35 54.73 53.35 54.73 49.15 51.13 49.15 51.13 53.35 49.33 53.35 49.33 49.15 45.73 49.15 45.73 53.35 43.93 53.35 43.93 49.15 40.33 49.15 40.33 53.35 38.53 53.35 38.53 49.15 34.93 49.15 34.93 53.35 33.13 53.35 33.13 49.15 31.11 49.15 31.11 47.05 26.92 47.05 26.92 45.25 31.11 45.25 31.11 41.65 26.92 41.65 26.92 39.85 31.11 39.85 31.11 36.25 26.92 36.25 26.92 34.45 31.11 34.45 31.11 30.85 26.92 30.85 26.92 29.05 31.11 29.05 31.11 25.45 26.92 25.45 26.92 23.65 31.11 23.65 31.11 20.05 26.92 20.05 26.92 18.25 31.11 18.25 31.11 16.23 22.11 16.23 22.11 58.15 64.04 58.15 64.04 49.15 61.93 49.15 61.93 53.35"
                  fill="#43444a"
                />
                <path
                  d="M64.56,0H21.52L0,37.28l21.52,37.28h43.04l21.52-37.28L64.56,0ZM20.31,59.95V14.43h12.6V47.35h32.93v12.6H20.31Z"
                  fill="#43444a"
                />
              </svg>
              <div className="absolute w-64 transform -translate-x-1/2 left-1/2 top-12">
                <p className="font-normal text-center whitespace-pre">
                  {content.text_bottom_left}
                </p>
              </div>
            </div>
            <div className="absolute right-10 w-24 h-0.5 mx-auto bg-x-lime bottom-60"></div>
            {/* bottom right */}
            <div className="absolute flex items-center justify-center w-12 h-12 mx-auto transform translate-y-1/2 translate-x-14 right-10 bottom-60">
              <svg
                className="w-12 h-12"
                data-name="Ebene 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 86.09 74.56"
              >
                <path
                  d="M58.89,16.4H27.24V57.98h31.65V16.4Zm-28.2,10.25h12.3v1.8h-12.3v-1.8Zm12.38,23.84h-12.3v-1.8h12.3v1.8Zm0-11.02h-12.3v-1.8h12.3v1.8Zm2.55-14.91l2.11,3.17,7.01-5.11,1.06,1.46-8.53,6.22-3.16-4.73,1.5-1Zm1.74,27.76l-3.16-4.73,1.5-1,2.11,3.17,7.01-5.11,1.06,1.46-8.53,6.22Zm0-11.02l-3.16-4.73,1.5-1,2.11,3.17,7.01-5.11,1.06,1.46-8.53,6.22Z"
                  fill="#4354a1"
                />
                <path
                  d="M64.56,0H21.52L0,37.28l21.52,37.28h43.04l21.52-37.28L64.56,0Zm-3.87,59.78H25.44V14.6H60.69V59.78Z"
                  fill="#4354a1"
                />
              </svg>
              <div className="absolute transform -translate-x-1/2 left-1/2 top-12">
                <p className="font-normal text-center whitespace-pre">
                  {content.text_bottom_right}
                </p>
              </div>
            </div>
            <div className="absolute left-10 w-24 h-0.5 mx-auto bg-x-lime bottom-60"></div>
            {/* bottom */}
            <div className="absolute left-0 right-0 flex items-center justify-center w-12 h-12 mx-auto transform -bottom-3">
              <svg
                id="a"
                data-name="Ebene 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 86.09 74.56"
              >
                <rect
                  x="23.05"
                  y="49.44"
                  width="7.68"
                  height="7.68"
                  fill="#677d29"
                />
                <polygon
                  points="56.35 39.43 41.16 33.89 51.89 44.63 50.62 45.9 39.88 35.17 45.42 50.36 57.48 56.91 62.9 51.49 56.35 39.43"
                  fill="#677d29"
                />
                <rect
                  x="23.05"
                  y="17.04"
                  width="7.68"
                  height="7.68"
                  fill="#677d29"
                />
                <rect
                  x="55.45"
                  y="17.04"
                  width="7.68"
                  height="7.68"
                  fill="#677d29"
                />
                <path
                  d="M64.56,0H21.52L0,37.28l21.52,37.28h43.04l21.52-37.28L64.56,0ZM32.53,26.53h-4.74v21.12h4.74v11.28h-11.28v-11.28h4.74V26.53h-4.74V15.24h11.28v4.74h21.12v-4.74h11.28v11.28h-11.28v-4.74h-21.12v4.74Zm25.27,32.61l-13.85-7.52-7.81-21.46,21.46,7.81,7.52,13.85-7.32,7.32Z"
                  fill="#677d29"
                />
              </svg>
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
