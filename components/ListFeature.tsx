import Image from "next/image";

function Component({ children }) {
  return (
    <li className="flex items-center">
      <div className="flex-shrink-0">
        <Image
          src="/img/haekchen-gruen.png"
          width={24}
          height={24}
          alt="Häkchen Icon"
        />
      </div>
      <p className="ml-2 text-lg font-medium leading-6 lg:font-bold xl:text-xl text-x-green">
        {children}
      </p>
    </li>
  );
}

export default Component;
