"use client";
import { useState, useEffect } from "react";
export default function StickyNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const navbarClass = showNavbar
    ? "hidden header-animation fixed top-0 lg:flex flex-row justify-center items-center gap-6 text-white w-full h-10 bg-brown bg-opacity-80"
    : "hidden";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={navbarClass}>
      <a href="#Home">HOME</a>
      <a href="#Tour">TOUR</a>
      <a href="#About">ABOUT</a>
      <a href="#Watch">WATCH</a>
      <a href="https://demicasha.bandcamp.com/">SHOP</a>
      <a href="#Listen">LISTEN</a>
      <a href="#Contact">CONTACT</a>
    </nav>
  );
}
