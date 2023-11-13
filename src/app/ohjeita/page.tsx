import { getUser } from "~/server/data/getUser";
import { redirect } from "next/navigation";

export default async function Muistamiset() {
  const user = await getUser();
  if (!user) redirect("/");

  return (
    <>
      <h1 className="font-display backdrop-blur-sm text-4xl text-gray-900 sm:text-6xl">
        <span className="bg-gradient-to-br bg-cover from-lime-500 to-sky-500 bg-clip-text text-transparent">
          <span className="text-5xl sm:text-7xl">H</span>
          yvä tietää
        </span>
      </h1>

      <div className="mt-12 text-lg backdrop-blur-sm leading-8 text-gray-600 space-y-6">
        <p>Ohjeet tulossa myöhemmin.</p>
      </div>
    </>
  );
}
