import { cn } from "~/utils/cn";
import type { ReactNode } from "react";
import { Balloons } from "./Balloons";

export const BackgroundPattern = ({ children }: { children: ReactNode }) => {
  return (
    <div className="absolute top-0 left-0 right-0 min-h-screen">
      <Pattern />
      <Balloons />
      {children}
      <Pattern isBottom />
    </div>
  );
};

const Pattern = ({ isBottom }: { isBottom?: boolean }) => {
  return (
    <div
      className={cn(
        "absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl",
        !isBottom && "-top-40 sm:-top-80",
        isBottom && "top-[calc(100%-25rem)] sm:top-[calc(100%-45rem)]",
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72.1875rem]",
          !isBottom &&
            "left-[calc(50%-11rem)] rotate-[30deg] sm:left-[calc(50%-30rem)]",
          isBottom && "left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)]",
        )}
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
      />
    </div>
  );
};
