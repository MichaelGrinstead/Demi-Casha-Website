"use client";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

export default function MobileNavbar() {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  return (
    <div>
      {!showMobileNavbar && (
        <HiMenu
          className="lg:hidden absolute h-10 w-10 left-2 top-4 text-brown"
          onClick={() => setShowMobileNavbar(true)}
        />
      )}
      {showMobileNavbar && (
        <nav className="flex flex-col justify-center items-center bg-brown bg-opacity-80 text-white w-full h-full gap-12 fixed z-50">
          <AiOutlineClose
            className="lg:hidden absolute h-10 w-10 left-2 top-4 text-white"
            onClick={() => setShowMobileNavbar(false)}
          />
          <a href="/#Home" onClick={() => setShowMobileNavbar(false)}>
            HOME
          </a>
          <a href="/#Tour" onClick={() => setShowMobileNavbar(false)}>
            TOUR
          </a>
          <a href="/#About" onClick={() => setShowMobileNavbar(false)}>
            ABOUT
          </a>
          <a href="/#Watch" onClick={() => setShowMobileNavbar(false)}>
            WATCH
          </a>
          <a href="/#Merch" onClick={() => setShowMobileNavbar(false)}>
            MERCH
          </a>
          <a href="/#Listen" onClick={() => setShowMobileNavbar(false)}>
            LISTEN
          </a>
          <a href="/#Contact" onClick={() => setShowMobileNavbar(false)}>
            CONTACT
          </a>
        </nav>
      )}
    </div>
  );
}
