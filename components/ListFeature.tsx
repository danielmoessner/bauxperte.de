import { CheckIcon } from "@heroicons/react/solid";
import Image from "next/image";

function Component({ children }) {
  return (
    <li className="flex items-center">
      {/* <CheckIcon className="w-6 h-6 text-x-green" aria-hidden="true" /> */}
      <div className="flex-shrink-0">
        <Image
          src="/img/haekchen-gruen.png"
          width={24}
          height={24}
          alt="Häkchen Icon"
        />
      </div>
      <p className="ml-2 text-xl font-bold leading-6 text-x-green">
        {children}
      </p>
    </li>
  );
}

export default Component;
