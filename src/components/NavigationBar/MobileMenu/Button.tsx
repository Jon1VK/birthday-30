"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { useMobileMenuState } from "./StateProvider";

export const MobileMenuButton = () => {
  const { open } = useMobileMenuState();
  return (
    <button
      type="button"
      className="-m-2.5 gap-2 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      onClick={open}
    >
      <span>Valikko</span>
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};
