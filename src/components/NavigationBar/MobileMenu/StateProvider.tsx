"use client";

import {
  createContext,
  useContext,
  useState,
  type Context,
  type ReactNode,
} from "react";

const useMobileMenuStateFactory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((isOpen) => !isOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return { isOpen, toggle, open, close };
};

type MobileMenuState = ReturnType<typeof useMobileMenuStateFactory>;

const MobileMenuContext = createContext(
  null,
) as unknown as Context<MobileMenuState>;

export const useMobileMenuState = () => useContext(MobileMenuContext);

export const MobileMenuStateProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const mobileMenuState = useMobileMenuStateFactory();
  return (
    <MobileMenuContext.Provider value={mobileMenuState}>
      {children}
    </MobileMenuContext.Provider>
  );
};
