import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { GlobalProvider } from "@/context/GlobalContext";
import AuthProvider from "./components/AuthProvider";
import { Fira_Sans } from "next/font/google";

const inter = Fira_Sans({
  weight: ["400", "700", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Movie like",
  description: "new movie likes lists, action movie, horror movie",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <GlobalProvider>
          <body className={inter.className}>
            <Navbar />
            <main> {children}</main>
            <Footer />
          </body>
        </GlobalProvider>
      </html>
    </AuthProvider>
  );
}
