"use client";

import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";
import { env } from "~/env.mjs";
import { cn } from "~/utils/cn";
import { useState } from "react";
import styles from "./styles.module.css";

export const BankCopyButton = () => {
  const [tooltipVisible, setToolTipVisible] = useState(false);

  const handleClick = () => {
    void window.navigator.clipboard.writeText(env.NEXT_PUBLIC_BANK_NUMBER);
    setToolTipVisible(true);
    setTimeout(() => {
      setToolTipVisible(false);
    }, 1500);
  };
  return (
    <button
      className={cn(
        "relative flex gap-2 items-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600",
        tooltipVisible && styles.tooltipVisible,
      )}
      onClick={handleClick}
    >
      <span>{env.NEXT_PUBLIC_BANK_NUMBER}</span>
      <DocumentDuplicateIcon className="w-5 h-5" />
    </button>
  );
};
