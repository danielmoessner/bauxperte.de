import Link from "next/link";
import Container from "./Container";
import footer from "../content/setting/footer.json";

function Component() {
  const linkList = footer.links;

  return (
    <section className="bg-white ">
      <Container layout="md">
        <div className="py-3 bg-x-green">
          <ul className="flex items-center space-x-8">
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
        </div>
      </Container>
    </section>
  );
}

export default Component;
