
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";



export const metadata = {
  title: "The Grove",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <body>
            <Header />
              {children}
            <Footer />
            <div id="root"></div>
          </body>
    </html>
  );
}