import Image from "next/image";
import logo from "../images/logo.png";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
import { SlSocialSpotify } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";
import { SlSocialYoutube } from "react-icons/sl";

export default function Header() {
  return (
    <nav className=" top-0 z-50 bg-transparent h-36">
      <div className="w-full h-full flex flex-row justify-center items-center gap-12">
        <NavbarLeft />
        <Image
          className="mt-4"
          src={logo}
          alt="logo"
          width={300}
          height={150}
        />
        <NavbarRight />
      </div>
      <div className="flex flex-row absolute top-14 right-8 gap-2 justify-center items-center">
        <a href="https://www.instagram.com/demicasha">
          <BsInstagram className=" top-10 right-0 text-4xl text-brown h-7 w-7" />
        </a>
        <a href="https://open.spotify.com/artist/0xf5TLcShphohGq8Oikadq">
          <SlSocialSpotify className=" top-10 right-0 text-4xl text-brown h-7 w-7" />
        </a>
        <a href="https://www.youtube.com/channel/UCoT9E8U3yuGYyerXWrs-AbA">
          <SlSocialYoutube className=" top-10 right-0 text-4xl text-brown  h-9 w-9" />
        </a>
      </div>
    </nav>
  );
}
