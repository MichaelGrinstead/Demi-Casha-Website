import "./globals.css";
import { BioRhyme } from "next/font/google";
import StickyNavbar from "../components/StickyNavbar";
import QueryProvider from "../providers/QueryProvider";
import StickyMobileNavbar from "../components/StickyMobileNavbar";

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
          <StickyMobileNavbar />
          <QueryProvider>{children}</QueryProvider>
        </div>
      </body>
    </html>
  );
}
