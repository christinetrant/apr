import "./globals.css";
import {Alegreya_Sans, Poppins} from "next/font/google";
import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";
// https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,700;1,100;1,700&family=Poppins:ital,wght@0,400;0,700;1,400;1,700
const alegreyaSans = Alegreya_Sans({
    weight: ["100", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
});

const poppins = Poppins({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({children}) {
    return (
        <html lang="en" className={poppins.className}>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
