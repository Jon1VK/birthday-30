import { BankCopyButton } from "~/components/BankCopyButton";
import { getUser } from "~/server/data/getUser";

export default async function Muistamiset() {
  const user = await getUser();

  return (
    <>
      <h1 className="font-display text-4xl text-gray-900 sm:text-6xl">
        <span className="bg-gradient-to-br bg-cover from-lime-500 to-sky-500 bg-clip-text text-transparent">
          <span className="text-5xl sm:text-7xl">M</span>
          uistamiset
        </span>
      </h1>

      <div className="mt-12 text-lg leading-8 flex flex-col items-center gap-7 text-gray-600">
        <>
          <p>
            Jos sun sukanvarressa on ylimäärästä, ja haluat mua muistaa, niin
            tuosta alta voipi kopioida tilinumeron ja sujauttaa ylimääräset
            varat käytettäväksi kohti{" "}
            <span className="font-bold tracking-wide text-pink-700">
              korkeampaa tarkoitusta*
            </span>
            .
            <span className="text-xs block mt-1">
              *Käyttökohteina varoille juhlien tarjoilut ja ulkomaanmatka.
            </span>
          </p>
          <BankCopyButton />
          {user && (
            <>
              <p>
                Lahjaksi kelpaa myös baarissa tarjotut drinkit. Muut aineelliset
                lahjat on kielletty, jotta mun ei tarvi raahata niitä
                toimistolta seuraavana päivänä kämpälle.
              </p>
              <p className="font-bold tracking-wide text-pink-700">
                Paras lahja on se, että saavut paikalle!
              </p>
            </>
          )}
        </>
      </div>
    </>
  );
}
