import Image from "next/image"
import logo from "../images/logo.png"
import Navbar from "./Navbar"
import {SlSocialSpotify} from "react-icons/sl"
import {RiYoutubeLine} from "react-icons/ri"
import {BsInstagram} from "react-icons/bs"
export default function Header() {

    return (
        <nav className=" top-0 z-50 bg-transparent h-48">
            <div className="w-full h-full flex flex-row justify-center items-center gap-24">
            <Navbar />
            <Image className="mt-8" src={logo} alt="logo" width={400} height={200} />
            <div className="text-brown right-48 top-120 flex flex-row gap-10">
            <BsInstagram className="h-10 w-10" />
            <SlSocialSpotify className="h-10 w-10" />
            <RiYoutubeLine className="h-12 w-12" />

            </div>
         
           

            </div>

        </nav>
    )
}