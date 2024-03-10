import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { GlobalProvider } from "@/context/GlobalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie like",
  description: "new movie likes lists, action movie, horror movie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalProvider>
        <body className={inter.className}>
          <Navbar />
          <main> {children}</main>
          <Footer />
        </body>
      </GlobalProvider>
    </html>
  );
}
