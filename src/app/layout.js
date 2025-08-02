import "./globals.css";
import { BioRhyme } from "next/font/google";
import StickyNavbar from "../components/StickyNavbar";
import MobileNavbar from "../components/StickyNavbar";
import QueryProvider from "../providers/QueryProvider";

const bioRhyme = BioRhyme({ weight: "400", subsets: ["latin-ext"] });

export const metadata = {
  title: "Demi Casha",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bioRhyme.className}>
        <div>
          <StickyNavbar />
          <MobileNavbar />
          <QueryProvider>{children}</QueryProvider>
        </div>
      </body>
    </html>
  );
}
