"use client";
import { useState, useEffect } from "react";

export default function StickyNavbar({ forceShow = false }) {
  const [showNavbar, setShowNavbar] = useState(forceShow);

  const navbarClass = showNavbar
    ? "header-animation fixed top-0 hidden lg:flex flex-row justify-center items-center gap-6 text-white w-full h-10 bg-brown bg-opacity-80 z-50"
    : "hidden";

  useEffect(() => {
    if (forceShow) {
      setShowNavbar(true);
      return;
    }

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
  }, [forceShow]);

  return (
    <nav className={navbarClass}>
      <a href="/#Home">HOME</a>
      <a href="/#Tour">TOUR</a>
      <a href="/#About">ABOUT</a>
      <a href="/#Watch">WATCH</a>
      <a href="/#Merch">MERCH</a>
      <a href="/#Listen">LISTEN</a>
      <a href="/#Contact">CONTACT</a>
    </nav>
  );
}
