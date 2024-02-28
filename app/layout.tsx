import Header from "@/app/components/Header";
import { CMS_NAME } from "@/lib/constants";
import localFont from "next/font/local";
import { Toaster } from "./components/ui/toaster";
import "./globals.css";

export const metadata = {
  title: `Next.js and ${CMS_NAME} Example`,
  description: `This is a blog built with Next.js and ${CMS_NAME}.`,
};

const roundo = localFont({
  src: [
    {
      path: "../public/fonts/Roundo-Variable.woff2",
    },
  ],
  variable: "--font-roundo",
});

const manrope = localFont({
  src: [
    {
      path: "../public/fonts/Manrope-Variable.woff2",
    },
  ],
  variable: "--font-manrope",
});

function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-accent-2 mt-40 m-5 rounded-3xl">
      <div className="container mx-auto">
        <div className="py-40 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-medium tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 text-white">
            Le mec rasoir
          </h3>
          <div className="grid gid-cols-1 sm:grid-cols-2 justify-center items-center lg:pl-4 lg:w-1/2">
            <div className="grid mx-3  text-white py-3 px-12 lg:px-8 mb-6 lg:mb-0">
              <h3 className="mb-2 font-semibold">Read Documentation</h3>
              <a href="#">Avis produit</a>
              <a href="#">Avis marque</a>
              <a href="#">tutoriels</a>
            </div>
            <div className="grid mx-3  text-white py-3 px-12 lg:px-8 mb-6 lg:mb-0">
              <h3 className="mb-2 font-semibold">Read Documentation</h3>
              <a href="#">Avis produit</a>
              <a href="#">Avis marque</a>
              <a href="#">tutoriels</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${roundo.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="bg-white">
        <Header />
        <section className="min-h-screen">
          <main>{children}</main>
          <Footer />
        </section>
        <Toaster />
      </body>
    </html>
  );
}
