import { SlSocialSpotify } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";
import { SlSocialYoutube } from "react-icons/sl";

export default function Socials() {
  return (
    <div className="flex flex-row top-14 right-8 gap-2 justify-center items-center">
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
  );
}
