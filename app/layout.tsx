import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { CMS_NAME } from "@/lib/constants";
import localFont from "next/font/local";
import Script from "next/script";
import React from "react";
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
    <footer className="bg-[#001744] border-t border-accent-2 mx-5 mb-5 rounded-xl">
      <div className="mx-10">
        <div className="py-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <div className="text-white">
            <p>© 2024 All Rights Reserved</p>
          </div>
          <div className="text-white">
            <p>Back to top ↑</p>
          </div>

          <div className="grid gid-cols-1 text-white justify-end items-center lg:pl-4">
            <p className="text-right">
              made with ❤️ by <a href="https://github.com/gbielli">@gbielli</a>
            </p>
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
        <Script
          id="piwik-pro-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://tss.familytribe.fr/yzsnjsswoaaea9i.js?awl='+i.replace(/^GTM-/, '')+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MSRMPCVF');
            `,
          }}
        />
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
