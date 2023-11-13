import { InvitationForm } from "~/components/InvitationForm";
import { getUser } from "~/server/data/getUser";
import Link from "next/link";

export default async function Home() {
  const user = await getUser();
  return (
    <>
      <h1 className="inline-block font-display text-4xl text-gray-900 sm:text-6xl">
        <span className="text-5xl sm:text-7xl">J</span>onin{" "}
        <span className="bg-gradient-to-br bg-cover from-lime-500 text-5xl sm:text-7xl to-sky-500 bg-clip-text text-transparent">
          30v
        </span>{" "}
        synttärit
      </h1>
      {user ? (
        <>
          <p className="mt-12 text-lg leading-8 text-gray-600">
            Moi{" "}
            <span className="font-bold tracking-wide text-pink-700 sm:whitespace-nowrap">
              {user.firstname}
            </span>
            . Tervetuloa viettämään mun 30v synttäreitä{" "}
            <span className="font-bold tracking-wide text-pink-700 sm:whitespace-nowrap">
              Lauantaina 13.1. klo 16:00
            </span>{" "}
            alkaen Vincitin toimistolle osoitteeseen{" "}
            <span className="font-bold tracking-wide text-pink-700 sm:whitespace-nowrap">
              Helsinginkatu 15, 20500 Turku
            </span>
            .
          </p>
          <InvitationForm user={user} />
        </>
      ) : (
        <div className="mt-12 text-lg backdrop-blur-sm leading-8 text-gray-600 space-y-6">
          <p>Moi! Oot löytänyt mun 30v synttärien kotisivuille.</p>
          <p>
            Jos haluat palavasti päästä mukaan juhlimaan (tai jos oot hukannut
            ilmoittautumislinkkisi), laita mulle viestiä ja järjestetään asia
            kuntoon!
          </p>
          <p>
            Muistamiset voi jättää{" "}
            <Link
              className="font-bold hover:underline tracking-wide text-pink-700 sm:whitespace-nowrap"
              href="/muistamiset"
            >
              täältä
            </Link>{" "}
            löytyvien ohjeiden avulla.
          </p>
        </div>
      )}
    </>
  );
}
