"use client";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";

export default function StickyMobileNavbar() {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const navbarClass = showMenu
    ? "lg:hidden fixed top-4 left-2 h-10 w-10  text-brown"
    : "hidden";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(showMenu);

  return (
    <div className="relative">
      {!showMobileNavbar && (
        <HiMenu
          className={navbarClass}
          onClick={() => setShowMobileNavbar(true)}
        />
      )}

      {showMobileNavbar && (
        <nav className="flex flex-col justify-center items-center bg-brown bg-opacity-80 text-white w-full h-full gap-12 fixed z-50">
          <AiOutlineClose
            className="lg:hidden absolute h-10 w-10 left-2 top-4 text-white"
            onClick={() => setShowMobileNavbar(false)}
          />
          <a href="#Home" onClick={() => setShowMobileNavbar(false)}>
            HOME
          </a>
          <a href="#Tour" onClick={() => setShowMobileNavbar(false)}>
            TOUR
          </a>
          <a href="#About" onClick={() => setShowMobileNavbar(false)}>
            ABOUT
          </a>
          <a href="#Watch" onClick={() => setShowMobileNavbar(false)}>
            WATCH
          </a>
          <a
            href="https://demicasha.bandcamp.com/"
            onClick={() => setShowMobileNavbar(false)}
          >
            SHOP
          </a>
          <a href="#Listen" onClick={() => setShowMobileNavbar(false)}>
            LISTEN
          </a>
          <a href="#Contact" onClick={() => setShowMobileNavbar(false)}>
            CONTACT
          </a>
        </nav>
      )}
    </div>
  );
}
