import Header from "./Header";
import NewRelease from "./NewRelease";
import MobileNavbar from "../components/MobileNavbar";

export default function Landing() {
  return (
    <div className="page-section first relative" id="Home">
      <MobileNavbar />
      <Header />
      <NewRelease />
    </div>
  );
}
