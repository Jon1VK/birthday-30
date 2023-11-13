"use client";

import { cn } from "~/utils/cn";
import { useLayoutEffect, useState, type SVGProps } from "react";

const colors = ["#ff0000", "#00ff00", "#0000ff"];

const positions = [
  "left-[5%]",
  "left-[10%]",
  "left-[15%]",
  "left-[20%]",
  "left-[25%]",
  "left-[30%]",
  "left-[35%]",
  "left-[40%]",
  "left-[45%]",
  "left-[50%]",
  "left-[55%]",
  "left-[60%]",
  "left-[65%]",
  "left-[70%]",
  "left-[75%]",
  "left-[80%]",
  "left-[85%]",
  "left-[90%]",
  "left-[95%]",
];

const animations = [
  "animate-[rise_20s_linear_infinite_-0s]",
  "animate-[rise_20s_linear_infinite_-1s]",
  "animate-[rise_20s_linear_infinite_-2s]",
  "animate-[rise_20s_linear_infinite_-3s]",
  "animate-[rise_20s_linear_infinite_-4s]",
  "animate-[rise_20s_linear_infinite_-5s]",
  "animate-[rise_20s_linear_infinite_-6s]",
  "animate-[rise_20s_linear_infinite_-7s]",
  "animate-[rise_20s_linear_infinite_-8s]",
  "animate-[rise_20s_linear_infinite_-9s]",
  "animate-[rise_20s_linear_infinite_-10s]",
  "animate-[rise_20s_linear_infinite_-11s]",
  "animate-[rise_20s_linear_infinite_-12s]",
  "animate-[rise_20s_linear_infinite_-13s]",
  "animate-[rise_20s_linear_infinite_-14s]",
  "animate-[rise_20s_linear_infinite_-15s]",
  "animate-[rise_20s_linear_infinite_-16s]",
  "animate-[rise_20s_linear_infinite_-17s]",
  "animate-[rise_20s_linear_infinite_-18s]",
  "animate-[rise_20s_linear_infinite_-19s]",
];

export const Balloons = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    setCount(Math.max(Math.min(Math.ceil(window.innerWidth / 50), 20), 10));
  }, []);

  const balloonSet = new Set<{
    color: string;
    position: string;
    animation: string;
  }>();

  while (balloonSet.size < count) {
    const color = colors[Math.floor(Math.random() * colors.length)]!;
    const position = positions[Math.floor(Math.random() * positions.length)]!;
    const animation =
      animations[Math.floor(Math.random() * animations.length)]!;
    balloonSet.add({ color, position, animation });
  }

  return (
    <div className="absolute left-0 -z-10 right-0 top-0 h-full overflow-hidden">
      {[...balloonSet].map(({ color, position, animation }, i) => (
        <Balloon
          key={i}
          color={color}
          className={cn("absolute -z-50 h-20 w-auto", position, animation)}
        />
      ))}
    </div>
  );
};

export const Balloon = ({
  color,
  ...props
}: SVGProps<SVGSVGElement> & { color?: string }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="640pt"
      height="1280pt"
      viewBox="0 0 640 1280"
      {...props}
    >
      <g transform="translate(0, 1280) scale(0.1, -0.1)">
        <path
          fill={color ?? "#ff0000"}
          d="M 2924 12799 c -84 -8 -274 -45 -365 -70 c -262 -74 -541 -221 -769 -405 c -477 -384 -826 -1007 -935 -1669 c -58 -353 -55 -740 8 -1081 c 127 -683 486 -1288 990 -1668 c 203 -152 389 -251 615 -326 c 122 -41 307 -85 355 -85 c 18 0 21 -6 21 -48 c 0 -86 -44 -202 -115 -300 c -69 -97 -55 -132 53 -132 c 37 0 84 4 105 9 c 2 2 35 -11 72 -29 c 84 -39 162 -50 186 -25 c 26 26 21 55 -22 118 c -53 78 -73 149 -72 265 c 0 52 3 98 8 102 c 4 5 58 13 118 20 c 751 79 1414 570 1785 1325 c 136 274 214 515 265 817 c 159 941 -127 1899 -755 2529 c -344 345 -728 547 -1190 625 c -84 15 -393 26 -357 28 z"
        />
        <path
          fill="#000000"
          d="M 2850 7025 c -0.7 0.626 0.3 -0.374 -0.7 -15.374 c 0 -51 -32 -231 -94 -534 c -92 -448 -100 -510 -100 -740 c 0 -163 3 -211 21 -290 c 56 -252 139 -399 319 -570 c 150 -143 288 -238 649 -450 c 344 -201 494 -308 641 -458 c 96 -97 156 -187 247 -367 c 110 -218 156 -367 188 -610 c 15 -110 15 -495 0 -665 c -37 -420 -38 -575 -7 -765 c 43 -255 144 -476 302 -655 c 125 -141 259 -383 310 -555 c 18 -63 28 -126 32 -209 c 6 -97 10 -121 24 -130 c 14 -8 22 -7 35 7 c 24 24 23 171 -2 282 c -47 213 -192 489 -349 665 c -147 165 -243 381 -280 633 c -20 133 -20 395 0 587 c 21 208 29 609 15 753 c -27 271 -79 455 -198 692 c -94 186 -153 275 -257 383 c -152 159 -299 264 -671 482 c -366 214 -505 312 -644 451 c -155 155 -209 249 -268 464 c -19 72 -25 124 -30 256 c -9 251 2 329 126 939 c 27 135 54 285 61 335 c 6 49 13 91 13.3 93.626 z"
        />
      </g>
    </svg>
  );
};
