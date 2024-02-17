import Providers from "./providers";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
    metadataBase: new URL("https://grove-client.vercel.app"),
    title: "The Grove",
    description:
        "The first indoor pickleball venue in Dallas, TX opening in February of 2024, boasting two premier courts for players to enjoy. Upon opening, players in the Dallas area can now play the sport year-round regardless of weather conditions.",
    openGraph: {
        images: "/opengraph-image.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <body className="overflow-x-hidden">
            <Providers>
                <Header />
                {children}
                <Footer />
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transitionBounce
                />
                <div id="root"></div>
            </Providers>
        </body>
    );
}
