"use client";
import { useState, useEffect } from "react";
export default function StickyNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);

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

  if (showNavbar) {
    return (
      <nav className="header-animation fixed top-0 flex flex-row justify-center items-center gap-10 text-white w-full h-8 bg-brown bg-opacity-98">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Tour">Tour</a>
        <a href="#Video">Video</a>
      </nav>
    );
  }
}
