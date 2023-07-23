import { Roboto } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ashiqul Islam Sium",
  description: "portfolio website for Ashiqul Islam Sium",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${roboto.className} overflow-x-hidden`}>
        <div className="portfolio bg-[#222222]">
          <Navbar />
          <div className="main-content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
