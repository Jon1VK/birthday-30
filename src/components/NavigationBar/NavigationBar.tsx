import { getUser } from "~/server/data/getUser";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { MobileMenuButton } from "./MobileMenu/Button";
import { MobileMenuStateProvider } from "./MobileMenu/StateProvider";

const publicRoutes = [
  { name: "Etusivu", href: "/" },
  { name: "Muistamiset", href: "/muistamiset" },
];

const protectedRoutes = [{ name: "Hyvä tietää", href: "/ohjeita" }];

export const getRoutes = async () => {
  const user = await getUser();
  return [...publicRoutes, ...(user ? protectedRoutes : [])];
};

export const NavigationBar = async () => {
  const routes = await getRoutes();
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <MobileMenuStateProvider>
        <nav
          className="flex items-center font-display justify-between p-6 lg:px-8"
          aria-label="Päänavigaatio"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex gap-3 items-center">
              <span className="sr-only">Kotisivu</span>
              <Image width={32} height={32} src="/cake.png" alt="Kotisivu" />
              <span>
                <span className="text-lg">J</span>oni{" "}
                <span className="bg-gradient-to-br bg-cover from-lime-500 text-lg to-sky-500 bg-clip-text text-transparent">
                  30v
                </span>
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <MobileMenuButton />
          </div>
          <ul className="hidden lg:flex lg:gap-x-12">
            {routes.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="leading-6 text-gray-900">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <MobileMenu routes={routes} />
      </MobileMenuStateProvider>
    </header>
  );
};
