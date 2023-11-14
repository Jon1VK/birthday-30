import { Balloon } from "~/components/BackgroundPattern/Balloons";

export default function NotFound() {
  return (
    <div className="relative flex justify-center animate-[bounce_3s_linear_infinite]">
      <Balloon className="relative top-20 left-1 w-40 h-auto" />
      <span className="font-display text-4xl absolute text-white top-32">
        404
      </span>
    </div>
  );
}
