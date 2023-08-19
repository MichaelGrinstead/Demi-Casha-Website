import Image from "next/image";
import logo from "../images/logo.png";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

export default function Header() {
  return (
    <nav className=" top-0 z-50 bg-transparent h-36">
      <div className="w-full h-full flex flex-row justify-center items-center gap-12">
        <NavbarLeft />
        <div className="h-40 w-80 mt-16 ">
          <Image src={logo} alt="logo" />
        </div>
        <NavbarRight />
      </div>
    </nav>
  );
}
