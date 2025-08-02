import Landing from "../components/Landing";
import About from "../components/About";
import Watch from "../components/Watch";
import Tour from "../components/Tour";
import Listen from "../components/Listen";
import Contact from "../components/Contact";
import Merch from "../components/Merch";

export default function Home() {
  return (
    <main>
      <Landing />
      <Tour />
      <About />
      <Merch />
      <Watch />
      <Listen />
      <Contact />
    </main>
  );
}
