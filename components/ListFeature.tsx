import { CheckIcon } from "@heroicons/react/solid";

function Component({ children }) {
  return (
    <li className="flex items-center">
      <CheckIcon className="w-6 h-6 text-green-800" aria-hidden="true" />
      <p className="ml-2 text-xl font-bold leading-6 text-green-900">
        {children}
      </p>
    </li>
  );
}

export default Component;
