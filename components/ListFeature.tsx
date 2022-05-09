import { CheckIcon } from "@heroicons/react/solid";

function Component({ children }) {
  return (
    <li className="flex items-center">
      <CheckIcon className="w-6 h-6 text-x-green" aria-hidden="true" />
      <p className="ml-2 text-xl font-bold leading-6 text-x-green">
        {children}
      </p>
    </li>
  );
}

export default Component;
