import { CMS_NAME, EXAMPLE_PATH } from "@/lib/constants";
import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: `Next.js and ${CMS_NAME} Example`,
  description: `This is a blog built with Next.js and ${CMS_NAME}.`,
};

const roundo = localFont({
  src: [
    {
      path: "../public/fonts/roundo-variable.woff2",
    },
  ],
  variable: "--font-roundo",
});

const manrope = localFont({
  src: [
    {
      path: "../public/fonts/manrope-variable.woff2",
    },
  ],
  variable: "--font-manrope",
});

const synonym = localFont({
  src: [
    {
      path: "../public/fonts/synonym-Variable.woff2",
    },
  ],
  variable: "--font-synonym",
});

function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="container mx-auto px-5">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Built with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
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
      className={`${roundo.variable} ${manrope.variable} ${synonym.variable} scroll-smooth`}
    >
      <body className="bg-[#f9f9f9]">
        <section className="min-h-screen">
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
