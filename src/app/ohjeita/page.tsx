import { getUser } from "~/server/data/getUser";
import { notFound } from "next/navigation";

export default async function Muistamiset() {
  const user = await getUser();
  if (!user) notFound();

  return (
    <>
      <h1 className="font-display text-4xl text-gray-900 sm:text-6xl">
        <span className="bg-gradient-to-br bg-cover from-lime-500 to-sky-500 bg-clip-text text-transparent">
          <span className="text-5xl sm:text-7xl">H</span>
          yvä tietää
        </span>
      </h1>

      <div className="mt-12 text-lg leading-8 text-gray-600 space-y-6">
        <p>
          Osoite tosiaan{" "}
          <span className="font-bold tracking-wide text-pink-700">
            Helsinginkatu 15, 20500 Turku
          </span>
          . Sisään pääsee{" "}
          <span className="font-bold tracking-wide text-pink-700">
            rapusta B
          </span>
          . Pihalla on runsaasti tilaa autoille ja pyörille. Kauempaakin tulevat
          urheilun ystävät voivat siis polkasta fillarilla paikalle niin saa
          päivän treenin tehtyä samalla.
        </p>
        <p>
          <span className="font-bold tracking-wide text-pink-700">
            Jos saavut autolla
          </span>
          , nouda sisältä parkkilappu ja vie se autosi tuulilasin alareunaan
          näkyvälle paikalle. Näin vältyt ParkkiPaten mielivaltaselta
          sakotusvimmalta.
        </p>
        <p>
          Tarjolla on{" "}
          <span className="font-bold tracking-wide text-pink-700">ruokaa*</span>{" "}
          ja{" "}
          <span className="font-bold tracking-wide text-pink-700">juomaa</span>,
          kakkua ja kahvia sekä lisää juomaa. Oma piilopullo ei siis ole
          tarpeellinen. Juomatarjontaan voi vaikuttaa laittamalla mulle
          ehdotuksia. Varsinkin jotain spesiaalimpia drinkkiehdotuksia otan
          mielelläni vastaan.
          <span className="text-xs block mt-1">
            *Sikatilallisen poikana mainostetusti tarjolla sikaa. Jos sulla on
            ruoka-allergioita, ilmoita niistä mulle.
          </span>
        </p>
        <p>
          Toimistolta poistutaan luultavasti jossain kohtaa kohti{" "}
          <span className="font-bold tracking-wide text-pink-700">
            Turun yöelämää
          </span>
          . Tähän aktiviteettiin ei tarvitse osallistua, mutta toimistosta on
          kaikkien poistuttava samoihin aikoihin, sillä toimiston hälytykset
          kytketään poistuessa päälle.
        </p>
        <p>
          <span className="font-bold tracking-wide text-pink-700">
            Yhteiskyyditykset
          </span>{" "}
          ja yhteiset majoitusjärjestelyt on suotavaa. Jos haluat suunnitella
          kyydityksiä tai majoituskuvioita etukäteen, voin jakaa kutsulistasta
          potentiaalisia nimiä pyydettäessä.
        </p>
      </div>
    </>
  );
}
