"use client";

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { useMobileMenuState } from "./StateProvider";

export const MobileMenu = ({
  routes,
}: {
  routes: { name: string; href: string }[];
}) => {
  const { isOpen, close } = useMobileMenuState();
  return (
    <Transition as={Fragment} show={isOpen}>
      <Dialog
        as="div"
        className="fixed font-display inset-0 z-50 bg-black/30 lg:hidden"
        onClose={close}
      >
        <Transition.Child
          as={Fragment}
          enter="transition duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-150 ease-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition duration-150 ease-out"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition duration-150 ease-out"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={close}
                className="-m-1.5 flex items-center gap-3 p-1.5 text-gray-900"
              >
                <span className="sr-only">Kotisivu</span>
                <Image width={32} height={32} src="/cake.png" alt="Kotisivu" />
                <span>
                  <span className="text-lg">J</span>oni{" "}
                  <span className="bg-gradient-to-br bg-cover from-lime-500 text-lg to-sky-500 bg-clip-text text-transparent">
                    30v
                  </span>
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 flex items-center gap-2 rounded-md p-2.5 text-gray-700"
                onClick={close}
              >
                <span>Sulje</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {routes.map((item) => (
                    <Link
                      key={item.name}
                      onClick={close}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
