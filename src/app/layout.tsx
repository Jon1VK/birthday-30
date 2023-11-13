import "~/styles/globals.css";
import { BackgroundPattern } from "~/components/BackgroundPattern/BackgroundPattern";
import { NavigationBar } from "~/components/NavigationBar/NavigationBar";
import { DynaPuff, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const dynaPuff = DynaPuff({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "600",
});

export const metadata = {
  title: "Joni 30v 🎉",
  description: "Joni Vainio-Kailan 30v synttärit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi">
      <body
        className={`bg-pink-50/25 font-sans [text-wrap:balance] ${inter.variable} ${dynaPuff.variable}`}
      >
        <BackgroundPattern>
          <NavigationBar />
          <main className="mx-auto backdrop-blur-sm max-w-2xl px-6 sm:px-8 py-32 text-center sm:py-36 lg:py-44">
            {children}
          </main>
        </BackgroundPattern>
      </body>
    </html>
  );
}
