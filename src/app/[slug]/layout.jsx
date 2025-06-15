import StickyNavbar from "../../components/StickyNavbar";
import MobileNavbar from "../../components/MobileNavbar";

export default function SlugLayout({ children }) {
  return (
    <>
      <StickyNavbar forceShow={true} />
      <MobileNavbar />
      {children}
    </>
  );
}
