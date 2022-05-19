import Link from "next/link";
import Container from "./Container";
import footer from "../content/setting/footer.json";

function Component() {
  const linkList = footer.links;

  return (
    <footer className="">
      <div className="w-full h-1 bg-x-lime"></div>
      <Container layout="full">
        <div className="relative overflow-hidden">
          <div className="pt-3 pb-3 bg-x-green">
            <Container layout="sm">
              <ul className="flex items-center justify-end space-x-8">
                {linkList.map((item) => {
                  let element = <div>?</div>;
                  if (item.type === "text")
                    element = (
                      <div className="text-base text-gray-200 whitespace-pre-line">
                        {item.text}
                      </div>
                    );
                  if (item.type === "link")
                    element = (
                      <Link href={item.url}>
                        <a className="text-base text-gray-200 hover:text-gray-100">
                          {item.text}
                        </a>
                      </Link>
                    );
                  if (item.type === "externalLink")
                    element = (
                      <a
                        href={item.url}
                        target="_blank"
                        className="text-base text-gray-200 hover:text-gray-100"
                        rel="noreferrer"
                      >
                        {item.text}
                      </a>
                    );

                  return <li key={`${item.text}${item.type}`}>{element}</li>;
                })}
              </ul>
            </Container>
          </div>
          {/* triangle stuff top */}
          {/* <div className="absolute top-0 left-0 z-0 w-full h-24 origin-top-left transform translate-x-[60%] -translate-y-[88px] rotate-[5deg] bg-x-lime"></div>
          <div className="absolute top-0 left-0 z-0 w-full h-24 origin-top-right transform -translate-x-[40%] -translate-y-[88px] -rotate-[7deg] bg-x-lime"></div>
          <div className="absolute top-0 left-0 z-10 w-full h-24 origin-bottom-left transform translate-x-[60%] -translate-y-full rotate-[5deg] bg-white"></div>
          <div className="absolute top-0 left-0 z-10 w-full h-24 origin-bottom-right transform -translate-x-[40%] -translate-y-full -rotate-[7deg] bg-white"></div> */}
        </div>
      </Container>
    </footer>
  );
}

export default Component;
