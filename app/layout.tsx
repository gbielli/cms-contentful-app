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
              (function(window, document, dataLayerName, id) {
                window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
                function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString();f="; SameSite=Strict"}document.cookie=a+"="+b+d+f+"; path=/"}
                var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
                var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
                tags.async=!0,tags.src="https://guillaumebielli.containers.piwik.pro/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
                !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);
              })(window, document, 'dataLayer', 'c0bf97b9-5555-4695-a323-486e94d68981');
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
