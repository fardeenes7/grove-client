import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "The Grove",
  description: "The first indoor pickleball venue in Dallas, TX opening in February of 2024, boasting two premier courts for players to enjoy. Upon opening, players in the Dallas area can now play the sport year-round regardless of weather conditions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <link rel="shortcut icon" href="../../src/app/favicon.ico" type="image/x-icon" />
        <meta name="description" content={metadata.description}></meta>
     
      </Head>
      <body className="overflow-x-hidden">
        <Header />
        {children}
        <Footer />
        <div id="root"></div>
      </body>
    </html>
  );
}
